(() => {
  function ScreenSplash({ onDone }) {
    React.useEffect(() => {
      const t = setTimeout(onDone, 2400);
      return () => clearTimeout(t);
    }, []);
    return /* @__PURE__ */ React.createElement("div", { className: "scr scr--blush", style: { alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(MiniStatus, null), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "url(assets/patterns/hair_strands.png)", backgroundSize: "cover", opacity: 0.12 } }), /* @__PURE__ */ React.createElement("div", { className: "stack", style: { alignItems: "center", gap: 24, position: "relative" } }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo/seal_black.png", alt: "HairMNL seal", className: "seal-pulse", style: { width: 120, height: 120 } }), /* @__PURE__ */ React.createElement("div", { className: "t-eyebrow" }, "Your Mane Authority"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 2, width: 44, background: "rgba(0,0,0,0.25)", margin: "0 auto", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, top: 0, bottom: 0, background: "var(--hm-ink)", width: "40%", animation: "slide 1.8s ease-in-out infinite" } }))), /* @__PURE__ */ React.createElement("style", null, `@keyframes slide { 0% { transform: translateX(-100%);} 100% { transform: translateX(280%);} }`));
  }
  function ScreenOnboarding({ variant = "story", onDone }) {
    const [step, setStep] = React.useState(0);
    const slides = ONBOARDING_SLIDES[variant];
    const last = step === slides.length - 1;
    const s = slides[step];
    if (variant === "interactive") {
      return /* @__PURE__ */ React.createElement(OnboardingInteractive, { step, setStep, onDone, slides, last, s });
    }
    if (variant === "utility") {
      return /* @__PURE__ */ React.createElement(OnboardingUtility, { step, setStep, onDone, slides, last, s });
    }
    return /* @__PURE__ */ React.createElement("div", { className: "scr", style: { background: s.bg || "var(--hm-blush)" } }, /* @__PURE__ */ React.createElement(MiniStatus, null), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { className: "t-index" }, String(step + 1).padStart(2, "0"), " / ", String(slides.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("button", { className: "reset t-eyebrow-sans", onClick: onDone }, "Skip")), /* @__PURE__ */ React.createElement("div", { className: "scr-main", style: { padding: "32px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", aspectRatio: "4/5", marginBottom: 28, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: `url(assets/patterns/hair_strands.png)`, backgroundSize: "cover", opacity: 0.4, mixBlendMode: "multiply" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" } }, s.seal && /* @__PURE__ */ React.createElement("img", { src: s.seal, style: { width: 180, height: 180 } })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 16, top: 16 } }, /* @__PURE__ */ React.createElement("span", { className: "t-index", style: { color: "rgba(0,0,0,0.5)" } }, "HAIRMNL \u2014 CHAPTER ", String(step + 1).padStart(2, "0")))), /* @__PURE__ */ React.createElement("div", { className: "t-eyebrow", style: { marginBottom: 10 } }, s.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "t-display", style: { fontSize: 34, lineHeight: 1.02, marginBottom: 14 }, dangerouslySetInnerHTML: { __html: s.title } }), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, color: "var(--hm-ink-soft)", lineHeight: 1.55 } }, s.body), s.consents && /* @__PURE__ */ React.createElement("div", { className: "stack", style: { gap: 14, marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--hm-hairline-strong)" } }, s.consents.map((c, i) => /* @__PURE__ */ React.createElement("label", { key: i, className: "row row--gap12", style: { gap: 12 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", defaultChecked: c.def, style: { width: 18, height: 18, accentColor: "var(--hm-ink)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--hm-ink-soft)" } }, c.label))), /* @__PURE__ */ React.createElement("div", { className: "t-eyebrow", style: { fontSize: 9, color: "var(--hm-ink-muted)", marginTop: 4 } }, "In compliance with the Data Privacy Act of 2012 (RA 10173)."))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 24px", flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { gap: 6, marginBottom: 14, justifyContent: "center" } }, slides.map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { width: i === step ? 22 : 6, height: 2, background: i === step ? "var(--hm-ink)" : "rgba(0,0,0,0.22)", transition: "width 220ms" } }))), /* @__PURE__ */ React.createElement("button", { className: "btn btn--block", onClick: () => last ? onDone() : setStep(step + 1) }, last ? "Begin" : "Continue")));
  }
  function OnboardingUtility({ step, setStep, onDone, slides, last, s }) {
    return /* @__PURE__ */ React.createElement("div", { className: "scr scr--paper" }, /* @__PURE__ */ React.createElement(MiniStatus, null), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo/horizontal_black.png", style: { height: 18 } }), /* @__PURE__ */ React.createElement("button", { className: "reset t-eyebrow-sans", onClick: onDone }, "Skip")), /* @__PURE__ */ React.createElement("div", { className: "scr-main", style: { padding: "32px 20px" } }, /* @__PURE__ */ React.createElement("div", { className: "t-index", style: { marginBottom: 20 } }, String(step + 1).padStart(2, "0"), " \u2014 ", String(slides.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("h1", { className: "t-display", style: { fontSize: 42, lineHeight: 0.98, marginBottom: 18 }, dangerouslySetInnerHTML: { __html: s.title } }), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, color: "var(--hm-ink-soft)", maxWidth: "86%", marginBottom: 24 } }, s.body), s.features && /* @__PURE__ */ React.createElement("div", { className: "stack", style: { gap: 0, marginTop: 14, borderTop: "1px solid var(--hm-hairline-strong)" } }, s.features.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "row row--gap12", style: { padding: "14px 0", borderBottom: "1px solid var(--hm-hairline)" } }, /* @__PURE__ */ React.createElement("div", { className: "t-index", style: { width: 24 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, f.t), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--hm-ink-muted)" } }, f.b)))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 24px", flex: "0 0 auto", display: "flex", gap: 10 } }, step > 0 && /* @__PURE__ */ React.createElement("button", { className: "btn btn--ghost", onClick: () => setStep(step - 1) }, "Back"), /* @__PURE__ */ React.createElement("button", { className: "btn", style: { flex: 1 }, onClick: () => last ? onDone() : setStep(step + 1) }, last ? "Start" : "Next")));
  }
  function OnboardingInteractive({ step, setStep, onDone, slides, last, s }) {
    const [selected, setSelected] = React.useState({});
    return /* @__PURE__ */ React.createElement("div", { className: "scr scr--blush" }, /* @__PURE__ */ React.createElement(MiniStatus, null), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "row row--sb" }, /* @__PURE__ */ React.createElement("span", { className: "t-eyebrow" }, "A Quick Mane Check"), /* @__PURE__ */ React.createElement("button", { className: "reset t-eyebrow-sans", onClick: onDone }, "Skip")), /* @__PURE__ */ React.createElement("div", { className: "row", style: { gap: 4, marginTop: 14 } }, slides.map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, height: 2, background: i <= step ? "var(--hm-ink)" : "rgba(0,0,0,0.18)" } })))), /* @__PURE__ */ React.createElement("div", { className: "scr-main", style: { padding: "28px 20px" } }, /* @__PURE__ */ React.createElement("div", { className: "t-index", style: { marginBottom: 10 } }, "STEP ", String(step + 1).padStart(2, "0"), " OF ", String(slides.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("h2", { className: "t-display", style: { fontSize: 30, marginBottom: 22, lineHeight: 1.05 }, dangerouslySetInnerHTML: { __html: s.title } }), s.chips && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, s.chips.map((c, i) => {
      const isSel = selected[step] === c;
      return /* @__PURE__ */ React.createElement("button", { key: i, className: `chip ${isSel ? "chip--active" : ""}`, onClick: () => setSelected({ ...selected, [step]: c }) }, c);
    })), s.illus && /* @__PURE__ */ React.createElement("div", { className: "row", style: { gap: 10, marginTop: 20, flexWrap: "wrap" } }, s.illus.map((it, i) => {
      const isSel = selected[step] === it.label;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: i,
          className: "reset",
          onClick: () => setSelected({ ...selected, [step]: it.label }),
          style: { flex: "0 0 calc(33% - 8px)", padding: 12, border: isSel ? "1px solid var(--hm-ink)" : "1px solid var(--hm-hairline-strong)", background: isSel ? "var(--hm-paper)" : "transparent", textAlign: "center" }
        },
        /* @__PURE__ */ React.createElement("img", { src: it.src, style: { width: "100%", aspectRatio: "1/1", objectFit: "contain" } }),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, marginTop: 6, fontWeight: 500 } }, it.label)
      );
    }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 24px", flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn--block", onClick: () => last ? onDone() : setStep(step + 1) }, last ? "See your routine" : "Continue")));
  }
  const ONBOARDING_SLIDES = {
    story: [
      {
        eyebrow: "01 \u2014 THE REAL DEAL",
        seal: "assets/logo/seal_black.png",
        bg: "var(--hm-blush)",
        title: "Your <em>Mane</em> Authority.",
        body: "Hair is more than what we see. It's confidence. It's power. It's identity. We go great lengths to curate and personalise professional hair care from all over the world \u2014 just for you."
      },
      {
        eyebrow: "02 \u2014 AT THE ROOT",
        seal: "assets/icons/solutions/curls.png",
        bg: "var(--hm-lilac)",
        title: "Expert <em>mane</em> care. Free.",
        body: "Every HairMNL account gets a complimentary consultation with a professional stylist. Send a photo of your hair or scalp; we'll prescribe a routine. No cost, no obligation."
      },
      {
        eyebrow: "03 \u2014 NO STRESS TRESSES",
        seal: "assets/icons/ecom/best_seller.png",
        bg: "var(--hm-sand)",
        title: "10,000 points to start.",
        body: "Join Tousled and we'll credit 10,000 welcome points to your account today. Enough for a full-size treatment from K\xE9rastase or Olaplex, on us."
      },
      {
        eyebrow: "04 \u2014 STAY IN TOUCH",
        bg: "var(--hm-sky)",
        seal: "assets/logo/seal_black.png",
        title: "Reach you, <em>kindly</em>.",
        body: "Pick how you'd like to hear from us. You can change these any time in Settings.",
        consents: [
          { label: "Push notifications \u2014 order updates, back-in-stock alerts, points expiry", def: true },
          { label: "SMS \u2014 delivery notifications only", def: true },
          { label: "Viber \u2014 consultation replies from our stylist team", def: false },
          { label: "Email \u2014 editorial and campaigns (weekly)", def: false }
        ]
      }
    ],
    utility: [
      {
        title: "A <em>professional</em> shelf,<br/>on your phone.",
        body: "Every product we carry is sourced direct from its brand. No greys, no fakes.",
        features: [
          { t: "Direct from the professional distributor", b: "K\xE9rastase, L'Or\xE9al Pro, Davines, Olaplex, K18, Redken and more" },
          { t: "Expert consultations, free", b: "Licensed stylists on-call via in-app chat" },
          { t: "Philippines-wide delivery", b: "GCash, Maya, BillEase, COD \u2014 standard nationwide" }
        ]
      },
      {
        title: "How you'll<br/><em>shop</em>.",
        body: "Shop by brand, by hair issue, by concern, or take the Hair Quiz for a tailored routine.",
        features: [
          { t: "Hair Quiz", b: "Six questions. Personalised routine in under 90 seconds." },
          { t: "Shop by Concern", b: "Damaged, frizzed, coloured, thinning, brassy \u2014 we get it." },
          { t: "Ask the Expert", b: "Upload a photo. Get a prescription in one business day." }
        ]
      },
      {
        title: "Earn points.<br/>Redeem the <em>good</em> stuff.",
        body: "Every peso spent earns you a Tousled point. Points stack across tiers.",
        features: [
          { t: "10,000 welcome points", b: "Redeemable on your first order" },
          { t: "Tier upgrades", b: "Silver \u2192 Gold \u2192 Premium. Free salon services at Premium." },
          { t: "Birthday treat", b: "A guaranteed gift during your birth month" }
        ]
      },
      {
        title: "Your <em>consent</em>,<br/>your control.",
        body: "In compliance with RA 10173 (Data Privacy Act), you'll see these options at first-run and any time in Settings.",
        features: [
          { t: "Notifications", b: "Order and stock alerts" },
          { t: "Marketing", b: "Editorial, campaigns, promos" },
          { t: "Data handling", b: "Read our full privacy notice" }
        ]
      }
    ],
    interactive: [
      {
        title: "What's your hair like <em>most</em> of the time?",
        illus: [
          { label: "Straight", src: "assets/icons/hair_type/straight.png" },
          { label: "Wavy", src: "assets/icons/hair_type/wavy.png" },
          { label: "Curly", src: "assets/icons/hair_type/curly.png" },
          { label: "Short", src: "assets/icons/hair_type/short.png" },
          { label: "Men's", src: "assets/icons/hair_type/mens_21.png" },
          { label: "Men's", src: "assets/icons/hair_type/mens_20.png" }
        ]
      },
      {
        title: "Which of these <em>feels</em> true today?",
        chips: ["Too oily at roots", "Dry ends", "Lifeless", "Frizzy in humidity", "Colour-treated", "Breaking", "Thinning at crown", "Itchy scalp", "All of the above"]
      },
      {
        title: "Any <em>chemical</em> history we should know?",
        chips: ["Rebonded (\u2264 12 mo)", "Coloured (permanent)", "Coloured (semi)", "Bleached / highlighted", "Perm / wave", "Keratin smoothing", "None of these"]
      },
      {
        title: "Last one \u2014 what's your <em>goal</em>?",
        chips: ["Grow it longer", "Repair damage", "Keep colour vibrant", "Tame frizz", "Fight hair fall", "Add volume", "Define curls", "Just maintain"]
      }
    ]
  };
  Object.assign(window, { ScreenSplash, ScreenOnboarding, ONBOARDING_SLIDES });
})();
