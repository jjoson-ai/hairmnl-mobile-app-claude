#!/usr/bin/env node
// Compiles JSX sources (app/*.jsx, frames/*.jsx) and inline <script type="text/babel">
// blocks in each screen HTML to plain JS. Rewrites script tags to load compiled
// output and swaps the React dev bundles for production minified builds. Drops
// Babel Standalone entirely so the browser no longer runs a 700KB client-side
// JSX compile on every page view.
//
// Re-run after editing any .jsx source or any inline <script type="text/babel">
// block in a screen HTML file. Requires esbuild on PATH (invoked via npx).

import fs from 'node:fs';
import path from 'node:path';
import esbuild from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname));
const HTML_FILES = fs.readdirSync(ROOT).filter(f => /^\d{2}-.+\.html$/.test(f)).sort();
const JSX_SOURCES = [
  'frames/ios-frame.jsx',
  'frames/android-frame.jsx',
  'app/ui.jsx',
  'app/screens-entry.jsx',
  'app/screens-home.jsx',
  'app/screens-shop.jsx',
  'app/screens-cart.jsx',
  'app/screens-account.jsx',
];

const REACT_PROD = 'https://unpkg.com/react@18.3.1/umd/react.production.min.js';
const REACT_DOM_PROD = 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js';

fs.mkdirSync(path.join(ROOT, 'compiled/app'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'compiled/frames'), { recursive: true });

// 1. Compile shared JSX sources.
await esbuild.build({
  entryPoints: JSX_SOURCES.map(p => path.join(ROOT, p)),
  outdir: path.join(ROOT, 'compiled'),
  outbase: ROOT,
  loader: { '.jsx': 'jsx' },
  jsx: 'transform',
  bundle: false,
  format: 'iife',
  logLevel: 'warning',
});

// 2. For each screen HTML: rewrite script tags and compile the inline <script type="text/babel">.
const inlineBabel = /<script\s+type="text\/babel"\s*>([\s\S]*?)<\/script>/;
const externalBabel = /<script\s+type="text\/babel"\s+src="([^"]+\.jsx)"\s*><\/script>/g;
const babelStandalone = /\s*<script\s+src="https:\/\/unpkg\.com\/@babel\/standalone[^"]+"[^>]*><\/script>\n?/;

for (const file of HTML_FILES) {
  const fp = path.join(ROOT, file);
  let html = fs.readFileSync(fp, 'utf8');

  // Swap React dev → production minified (drop integrity hashes since the URL changed).
  html = html.replace(
    /<script\s+src="https:\/\/unpkg\.com\/react@[^"]+\/umd\/react\.development\.js"[^>]*><\/script>/,
    `<script src="${REACT_PROD}" crossorigin="anonymous"></script>`
  );
  html = html.replace(
    /<script\s+src="https:\/\/unpkg\.com\/react-dom@[^"]+\/umd\/react-dom\.development\.js"[^>]*><\/script>/,
    `<script src="${REACT_DOM_PROD}" crossorigin="anonymous"></script>`
  );

  // Drop Babel Standalone.
  html = html.replace(babelStandalone, '\n');

  // Rewrite external JSX script tags → compiled JS.
  html = html.replace(externalBabel, (_, src) => {
    const compiled = 'compiled/' + src.replace(/\.jsx$/, '.js');
    return `<script src="${compiled}"></script>`;
  });

  // Compile and inline the per-page JSX block.
  const m = html.match(inlineBabel);
  if (m) {
    const { code } = await esbuild.transform(m[1], {
      loader: 'jsx',
      jsx: 'transform',
      format: 'iife',
    });
    html = html.replace(inlineBabel, `<script>\n${code.trim()}\n</script>`);
  }

  fs.writeFileSync(fp, html);
  console.log('✓', file);
}

console.log('\nBuild complete.');
