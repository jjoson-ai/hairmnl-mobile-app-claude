# HairMNL — Mobile App Prototype

A clickable HTML prototype of the HairMNL iOS + Android app. Each screen renders both platforms side-by-side.

## Running locally

Because the app uses Babel-in-browser for JSX, open `index.html` through a local static server (not `file://`) so imports resolve:

```bash
# Python
python3 -m http.server 8000
# or Node
npx serve .
```

Then visit http://localhost:8000.

## Publishing to GitHub Pages

1. Push this folder to a GitHub repo.
2. In repo Settings → Pages, set Source = `main` branch, folder = `/` (or `/dist` if you nest it).
3. Visit `https://<your-user>.github.io/<repo>/`.

## Structure

- `index.html` — landing page linking to all screens
- `01-splash.html` … `16-empty.html` — one HTML per screen, same shared bundle
- `app/` — React components (splash, home, PDP, cart, etc.)
- `frames/` — iOS + Android device bezels
- `styles/` — shared CSS
- `assets/` — fonts, logos, seals, patterns, iconography

## Screens

| # | Screen | File |
|---|---|---|
| 01 | Splash | `01-splash.html` |
| 02 | Onboarding | `02-onboarding.html` |
| 03 | Home | `03-home.html` |
| 04 | Search | `04-search.html` |
| 05 | Shop / PLP | `05-shop.html` |
| 06 | PDP | `06-pdp.html` |
| 07 | Cart | `07-cart.html` |
| 08 | Checkout | `08-checkout.html` |
| 09 | Confirmation | `09-confirmation.html` |
| 10 | Account | `10-account.html` |
| 11 | Loyalty | `11-loyalty.html` |
| 12 | Chat | `12-chat.html` |
| 13 | Studio | `13-studio.html` |
| 14 | Editorial | `14-editorial.html` |
| 15 | Notifications | `15-notifications.html` |
| 16 | Empty States | `16-empty.html` |

## Tweaks

Every screen has a floating **Tweaks** panel (bottom-right) that exposes:
- Palette (Blush / Stone)
- Tab bar style (Serif mark / Terracotta dot / Mono index)
- Home layout (Editorial / Shop-first / Concern-led)
- Onboarding variant (Story / Utility / Interactive)
- PDP variant (Image-led / Editorial / Spec-dense)
- Signed in (Yes / No)
- Cart state (Loaded / Empty)

---

© 2026 HairMNL. Design-review artifact. Not for public distribution.
