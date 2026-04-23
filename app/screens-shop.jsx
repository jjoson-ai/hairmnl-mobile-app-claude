// PDP — 3 variants (image-led, editorial, spec-dense); Shop/PLP; Search; Cart; Checkout; Confirmation.

function PDPChrome({ onBack }) {
  return (
    <div style={{position:"absolute", top:0, left:0, right:0, zIndex:5, padding:"14px 16px", display:"flex", justifyContent:"space-between", background:"linear-gradient(to bottom, rgba(250,246,242,0.94), rgba(250,246,242,0))"}}>
      <button className="reset" onClick={onBack} style={{width:38, height:38, borderRadius:"50%", background:"var(--hm-paper)", border:"1px solid var(--hm-hairline-strong)", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Icons.ChevronLeft size={18}/>
      </button>
      <div className="row row--gap8">
        <button className="reset" style={{width:38, height:38, borderRadius:"50%", background:"var(--hm-paper)", border:"1px solid var(--hm-hairline-strong)", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <Icons.Heart size={16}/>
        </button>
        <button className="reset" style={{width:38, height:38, borderRadius:"50%", background:"var(--hm-paper)", border:"1px solid var(--hm-hairline-strong)", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <Icons.Share size={14}/>
        </button>
      </div>
    </div>
  );
}

const PRODUCT = {
  brand: "OLAPLEX",
  name: "No. 3 Hair Perfector",
  subtitle: "At-home bond-building treatment",
  price: 1850, strike: 2100,
  variants: ["100 ml","250 ml"],
  concerns: ["damaged","colored","frizz"],
  labels: ["vegan","paraben_free","sulfate_free"],
  rating: 4.7, reviews: 1284,
  desc: "A weekly pre-shampoo that rebuilds disulphide bonds inside the strand — the kind that bleach, colour and straightening treatments leave behind. Sit for ten minutes; shower as usual.",
};

function ScreenPDP({ variant = "imageled", onBack, onATC }) {
  if (variant === "editorial") return <PDPEditorial onBack={onBack} onATC={onATC}/>;
  if (variant === "specdense") return <PDPSpecDense onBack={onBack} onATC={onATC}/>;
  return <PDPImageLed onBack={onBack} onATC={onATC}/>;
}

function PDPImageLed({ onBack, onATC }) {
  const [qty, setQty] = React.useState(1);
  const [v, setV] = React.useState(0);
  const [expanded, setExpanded] = React.useState("overview");
  const [img, setImg] = React.useState(0);
  return (
    <div className="scr scr--paper" style={{position:"relative"}}>
      <MiniStatus/>
      <PDPChrome onBack={onBack}/>
      <div className="scr-main" style={{paddingTop:0}}>
        {/* Image carousel */}
        <div style={{position:"relative", aspectRatio:"1/1.12", background:"var(--hm-sand)"}}>
          <div className="tint" style={{position:"absolute", inset:0, background:"var(--hm-sand)"}}>
            <div style={{position:"relative", textAlign:"center"}}>
              <div style={{fontFamily:"var(--font-display)", fontSize:64, color:"rgba(26,26,26,0.18)"}}>Nº 03</div>
              <div className="t-eyebrow" style={{color:"rgba(26,26,26,0.4)"}}>[ PRODUCT SHOT — BOTTLE, FRONT ]</div>
            </div>
          </div>
          <div style={{position:"absolute", top:68, right:14, display:"flex", flexDirection:"column", gap:6}}>
            {["01","02","360","UGC"].map((t,i) => (
              <div key={i} onClick={()=>setImg(i)} style={{width:28, height:28, borderRadius:"50%", background: img===i?"var(--hm-ink)":"var(--hm-paper)", color: img===i?"var(--hm-paper):":"var(--hm-ink)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-mono)", fontSize:9, border:"1px solid var(--hm-ink)"}}>{t}</div>
            ))}
          </div>
          <div style={{position:"absolute", bottom:14, left:14, display:"flex", gap:4}}>
            {PRODUCT.concerns.map((c,i) => <img key={i} src={`assets/icons/solutions/${c === "damaged" ? "damaged" : c === "colored" ? "colored" : "frizz"}.png`} style={{width:44, height:44}}/>)}
          </div>
          <div style={{position:"absolute", bottom:14, right:14}}>
            <div style={{padding:"6px 10px", background:"var(--hm-paper)", border:"1px solid var(--hm-ink)", display:"flex", alignItems:"center", gap:6}}>
              <img src="assets/icons/ecom/best_seller.png" style={{width:20, height:20}}/>
              <span className="t-eyebrow" style={{fontSize:9}}>BEST SELLER</span>
            </div>
          </div>
        </div>

        {/* Header block */}
        <div style={{padding:"22px 20px 12px"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>{PRODUCT.brand}</div>
          <h1 className="t-display" style={{fontSize:32, lineHeight:1.02}}>
            {PRODUCT.name.split(" ").slice(0,2).join(" ")} <em>{PRODUCT.name.split(" ").slice(2).join(" ")}</em>
          </h1>
          <p style={{fontSize:14, color:"var(--hm-ink-soft)", marginTop:10}}>{PRODUCT.subtitle}</p>
          <div className="row row--sb" style={{marginTop:16}}>
            <div className="row row--gap8">
              <Price amount={PRODUCT.price} strike={PRODUCT.strike} size={18}/>
              <Ribbon kind="sale">12% OFF</Ribbon>
            </div>
            <div className="t-mono" style={{fontSize:11, color:"var(--hm-ink-muted)"}}>★ {PRODUCT.rating} · {PRODUCT.reviews.toLocaleString()}</div>
          </div>
        </div>

        <div style={{padding:"0 20px 16px", background:"var(--hm-lilac)", margin:"8px 20px 18px", border:"1px solid rgba(0,0,0,0.08)"}}>
          <div style={{padding:"14px 14px", display:"flex", gap:12, alignItems:"center"}}>
            <img src="assets/logo/seal_black.png" style={{width:36, height:36}}/>
            <div style={{flex:1}}>
              <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>MATCHES YOUR PROFILE</div>
              <div style={{fontSize:12}}>Based on your quiz: coloured + damaged + frizz.</div>
            </div>
          </div>
        </div>

        {/* Variant + labels */}
        <div style={{padding:"0 20px 18px"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>SIZE</div>
          <div className="seg">
            {PRODUCT.variants.map((vt,i) => (
              <div key={i} className={v===i?"is-active":""} onClick={()=>setV(i)}>{vt}</div>
            ))}
          </div>
          <div className="row row--gap8" style={{marginTop:14, flexWrap:"wrap"}}>
            {PRODUCT.labels.map((l,i) => (
              <div key={i} className="chip chip--mono" style={{gap:6, minHeight:30}}>
                <img src={`assets/icons/product/${l}.png`} style={{width:20, height:20}}/>
                {l.replace("_"," ")}
              </div>
            ))}
          </div>
        </div>

        {/* Accordion tabs */}
        <div style={{borderTop:"1px solid var(--hm-hairline-strong)", borderBottom:"1px solid var(--hm-hairline-strong)"}}>
          {[
            {k:"overview", n:"01", t:"Overview", body: PRODUCT.desc},
            {k:"how", n:"02", t:"How to use", body:"Apply to damp hair after shampoo. Comb through. Leave for at least 10 minutes; longer is better. Rinse, shampoo and condition as usual."},
            {k:"ing", n:"03", t:"Ingredients", body:"Aqua (Water), Bis-Aminopropyl Diglycol Dimaleate, Cetearyl Alcohol, Behentrimonium Methosulfate, Cetyl Alcohol, Quaternium-91…"},
            {k:"awards", n:"04", t:"Awards"},
            {k:"faq", n:"05", t:"FAQ"},
            {k:"rev", n:"06", t:"Reviews (1,284)"},
            {k:"ship", n:"07", t:"Shipping & returns"},
          ].map((t,i) => (
            <div key={i} style={{borderBottom:"1px solid var(--hm-hairline)"}}>
              <button className="reset" onClick={()=>setExpanded(expanded===t.k?"":t.k)} style={{width:"100%", padding:"16px 20px", display:"flex", alignItems:"center", gap:12, textAlign:"left"}}>
                <span className="t-index" style={{flexShrink:0}}>{t.n}</span>
                <span style={{flex:1, fontSize:15, fontFamily:"var(--font-display)"}}>{t.t}</span>
                {expanded===t.k ? <Icons.ChevronUp size={14}/> : <Icons.ChevronDown size={14}/>}
              </button>
              {expanded===t.k && t.body && (
                <div style={{padding:"0 20px 16px 48px", fontSize:13, color:"var(--hm-ink-soft)", lineHeight:1.55}}>{t.body}</div>
              )}
              {expanded===t.k && t.k==="rev" && <ReviewsBlock/>}
            </div>
          ))}
        </div>

        {/* Cross-sell */}
        <div style={{padding:"22px 20px 8px"}}>
          <div className="t-eyebrow" style={{marginBottom:12}}>08 — PAIRS WELL WITH</div>
          <div style={{display:"flex", gap:12, overflowX:"auto", marginLeft:-20, paddingLeft:20, paddingRight:20}}>
            {[{b:"OLAPLEX", n:"No. 4 Shampoo", p:1650, c:"var(--hm-peach)"}, {b:"OLAPLEX", n:"No. 5 Conditioner", p:1650, c:"var(--hm-sage)"}, {b:"K18", n:"Leave-in Mask", p:4200, c:"var(--hm-sky)"}].map((p,i) => (
              <div key={i} style={{flexShrink:0, width:130}}>
                <TintTile color={p.c} ratio="1/1" caption={`[ ${p.b} ]`}/>
                <div style={{padding:"8px 0 0"}}>
                  <div className="t-eyebrow" style={{fontSize:9}}>{p.b}</div>
                  <div style={{fontSize:12}}>{p.n}</div>
                  <Price amount={p.p} size={11}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{height:20}}/>
      </div>

      {/* Sticky ATC */}
      <StickyBar>
        <div className="row row--sb" style={{marginBottom:12}}>
          <QtyStepper value={qty} onChange={setQty}/>
          <div style={{textAlign:"right"}}>
            <Price amount={PRODUCT.price * qty} size={18}/>
            <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)", marginTop:2}}>EARN +{PRODUCT.price * qty / 10 | 0} PTS</div>
          </div>
        </div>
        <button className="btn btn--block" onClick={onATC}>Add to bag · Bain-matched</button>
      </StickyBar>
    </div>
  );
}

function ReviewsBlock() {
  return (
    <div style={{padding:"0 20px 16px"}}>
      <div style={{display:"grid", gridTemplateColumns:"auto 1fr", gap:16, alignItems:"center", marginBottom:14}}>
        <div style={{fontFamily:"var(--font-display)", fontSize:44, lineHeight:1}}>4.7</div>
        <div>
          <div style={{fontSize:11, color:"var(--hm-ink-muted)"}}>Based on 1,284 reviews on Judge.me</div>
          {[5,4,3,2,1].map(s => (
            <div key={s} className="row" style={{gap:6, fontSize:10, fontFamily:"var(--font-mono)"}}>
              <span>{s}★</span>
              <div style={{flex:1, height:3, background:"rgba(0,0,0,0.1)"}}>
                <div style={{height:"100%", background:"var(--hm-ink)", width: s===5?"72%":s===4?"18%":s===3?"6%":"2%"}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      {[
        {name:"Maria L.", city:"Quezon City, PH", days:"3 days ago", stars:5, body:"Finally something that saved my post-balayage hair. Breakage noticeably gone after three uses."},
        {name:"Angelo R.", city:"Makati, PH", days:"1 week ago", stars:4, body:"Smells clean. Leaves hair soft. I still use OG Kérastase mask on top once a month."},
      ].map((r,i) => (
        <div key={i} style={{padding:"12px 0", borderTop:"1px solid var(--hm-hairline)"}}>
          <div className="row row--sb" style={{marginBottom:4}}>
            <div style={{fontSize:12, fontWeight:500}}>{r.name}</div>
            <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)"}}>{r.days.toUpperCase()}</div>
          </div>
          <div className="t-mono" style={{fontSize:9, color:"var(--hm-ink-muted)", marginBottom:4}}>{r.city.toUpperCase()} · {"★".repeat(r.stars)}</div>
          <div style={{fontSize:13, color:"var(--hm-ink-soft)"}}>{r.body}</div>
        </div>
      ))}
    </div>
  );
}

// Variant: Editorial PDP — hero-led, story-driven
function PDPEditorial({ onBack, onATC }) {
  const [qty, setQty] = React.useState(1);
  return (
    <div className="scr scr--paper" style={{position:"relative"}}>
      <MiniStatus/>
      <PDPChrome onBack={onBack}/>
      <div className="scr-main">
        <div style={{position:"relative", aspectRatio:"4/5", background:"var(--hm-espresso)", overflow:"hidden"}}>
          <div style={{position:"absolute", inset:0, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"cover", opacity:0.14, mixBlendMode:"screen"}}/>
          <div style={{position:"absolute", bottom:24, left:24, right:24, color:"var(--hm-blush)"}}>
            <div className="t-eyebrow" style={{color:"rgba(243,235,230,0.6)", marginBottom:12}}>01 — NO. 3 HAIR PERFECTOR</div>
            <h1 className="t-display" style={{fontSize:46, lineHeight:0.98, color:"inherit"}}>
              The <em>bond</em><br/>you've been<br/>waiting to <em>rebuild.</em>
            </h1>
          </div>
        </div>
        <div style={{padding:"28px 24px"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>OLAPLEX · ITEM 03</div>
          <div className="row row--sb" style={{alignItems:"flex-end"}}>
            <Price amount={1850} strike={2100} size={18}/>
            <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)"}}>★ 4.7 · 1,284</div>
          </div>
          <div className="hairline" style={{margin:"20px 0"}}/>
          <div className="t-index" style={{marginBottom:10}}>02 — THE STORY</div>
          <p style={{fontSize:16, lineHeight:1.55, color:"var(--hm-ink-soft)", marginBottom:14, fontFamily:"var(--font-display)", fontStyle:"italic"}}>"A weekly ten-minute ritual, before the shower, that undoes a year of damage."</p>
          <p style={{fontSize:14, color:"var(--hm-ink-soft)", lineHeight:1.6}}>Bleach, colour, heat and chemical straightening leave disulphide bonds broken inside the cortex. Olaplex's patented bis-aminopropyl diglycol dimaleate relinks them. It's a treatment you can feel.</p>
        </div>
        <div className="hair-strand-divider"/>
        <div style={{padding:"28px 24px"}}>
          <div className="t-index" style={{marginBottom:10}}>03 — THE RITUAL</div>
          <h3 className="t-display" style={{fontSize:28, marginBottom:16}}>Three steps, <em>once a week.</em></h3>
          {[
            {n:"01", t:"Apply to damp hair", b:"Generous coat from mid-lengths to ends."},
            {n:"02", t:"Let it sit", b:"Ten minutes minimum. Longer if you'd like."},
            {n:"03", t:"Shower as usual", b:"Shampoo with Nº 4. Condition with Nº 5."},
          ].map((s,i) => (
            <div key={i} style={{display:"flex", gap:14, padding:"14px 0", borderBottom:"1px solid var(--hm-hairline)"}}>
              <span className="t-index" style={{flexShrink:0}}>{s.n}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:15, fontFamily:"var(--font-display)", marginBottom:3}}>{s.t}</div>
                <div style={{fontSize:13, color:"var(--hm-ink-muted)"}}>{s.b}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{padding:"20px 24px 40px", background:"var(--hm-sand)"}}>
          <div className="t-index" style={{marginBottom:8}}>04 — THE EXPERTS SAY</div>
          <blockquote style={{fontSize:20, fontFamily:"var(--font-display)", fontStyle:"italic", letterSpacing:"-0.02em", lineHeight:1.18, marginBottom:12}}>"We ask every new colour client whether they've run a Nº 3 cycle at home. It extends our salon work by weeks."</blockquote>
          <div className="t-eyebrow" style={{fontSize:9}}>— RICA M. · HEAD COLOURIST · HAIRMNL STUDIO BGC</div>
        </div>
        <div style={{height:20}}/>
      </div>
      <StickyBar>
        <div className="row row--sb" style={{marginBottom:12}}>
          <QtyStepper value={qty} onChange={setQty}/>
          <Price amount={1850*qty} size={18}/>
        </div>
        <button className="btn btn--block" onClick={onATC}>Add to bag</button>
      </StickyBar>
    </div>
  );
}

// Variant: Spec-dense — clinical, data-forward
function PDPSpecDense({ onBack, onATC }) {
  const [qty, setQty] = React.useState(1);
  return (
    <div className="scr scr--paper" style={{position:"relative"}}>
      <MiniStatus/>
      <PDPChrome onBack={onBack}/>
      <div className="scr-main">
        <div style={{display:"grid", gridTemplateColumns:"3fr 2fr", gap:0}}>
          <div style={{position:"relative", aspectRatio:"3/4", background:"var(--hm-sand)"}}>
            <div className="tint" style={{position:"absolute", inset:0, background:"var(--hm-sand)"}}>
              <div className="tint-caption">[ BOTTLE ]</div>
            </div>
          </div>
          <div style={{background:"var(--hm-paper)", padding:"54px 14px 14px", borderLeft:"1px solid var(--hm-hairline-strong)"}}>
            <div className="t-eyebrow" style={{fontSize:9, marginBottom:6}}>ITEM · OLX-003</div>
            <div className="t-mono" style={{fontSize:11, lineHeight:1.7}}>
              <div>SKU: OLX-003-100</div>
              <div>EAN: 896364002565</div>
              <div>NET WT: 100 ML</div>
              <div>SHELF: 24 MO</div>
              <div>LOT: 2026-04-A</div>
              <div>PH: 5.5–6.0</div>
            </div>
          </div>
        </div>
        <div style={{padding:"20px"}}>
          <div className="t-eyebrow" style={{marginBottom:6}}>OLAPLEX</div>
          <h1 className="t-display" style={{fontSize:26}}>No. 3 Hair Perfector</h1>
          <div className="row row--sb" style={{marginTop:14, alignItems:"center"}}>
            <Price amount={1850} strike={2100} size={20}/>
            <Ribbon kind="sale">12% OFF</Ribbon>
          </div>
        </div>

        <table style={{width:"100%", borderCollapse:"collapse", fontSize:12}}>
          <tbody>
            {[
              ["Hair types", "All · damaged · coloured · bleached"],
              ["Hero claim", "Rebuilds disulphide bonds"],
              ["Active", "Bis-Aminopropyl Diglycol Dimaleate"],
              ["Use", "Pre-shampoo, 10 min, weekly"],
              ["Vegan", "Yes"],
              ["Sulfate free", "Yes"],
              ["Paraben free", "Yes"],
              ["Fragrance", "Light · floral-woody"],
              ["Origin", "USA"],
              ["Ship weight", "132 g"],
            ].map(([k,v],i) => (
              <tr key={i} style={{borderTop:"1px solid var(--hm-hairline)"}}>
                <td style={{padding:"10px 20px", width:"40%", color:"var(--hm-ink-muted)", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase"}}>{k}</td>
                <td style={{padding:"10px 20px"}}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{padding:"20px", background:"var(--hm-stone)"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>INGREDIENTS (FULL)</div>
          <div className="t-mono" style={{fontSize:10, lineHeight:1.7, color:"var(--hm-ink-soft)"}}>
            Aqua (Water), Bis-Aminopropyl Diglycol Dimaleate, Cetearyl Alcohol, Behentrimonium Methosulfate, Cetyl Alcohol, Quaternium-91, Cetrimonium Methosulfate, Phenoxyethanol, Polyquaternium-37, Glycerin, Propylene Glycol Dicaprylate/Dicaprate, PPG-1 Trideceth-6, Sodium Benzoate, Citric Acid, Disodium EDTA, Parfum (Fragrance).
          </div>
        </div>
        <div style={{height:20}}/>
      </div>
      <StickyBar>
        <div className="row row--sb" style={{marginBottom:12}}>
          <QtyStepper value={qty} onChange={setQty}/>
          <Price amount={1850*qty} size={18}/>
        </div>
        <button className="btn btn--block" onClick={onATC}>Add to bag</button>
      </StickyBar>
    </div>
  );
}

// ———————— Shop / PLP ————————
function ScreenShop({ onBack, onProduct, tabVariant = "serifmark", onNav }) {
  const [sort, setSort] = React.useState(false);
  const [chips, setChips] = React.useState(["CONCERN · DAMAGED"]);
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div style={{padding:"10px 16px", display:"flex", alignItems:"center", gap:8}}>
        <button className="reset" onClick={onBack}><Icons.ChevronLeft size={20}/></button>
        <div style={{flex:1, textAlign:"center"}}>
          <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>SHOP · DAMAGED</div>
          <div style={{fontSize:14, fontFamily:"var(--font-display)"}}>228 products</div>
        </div>
        <button className="reset"><Icons.Search size={20}/></button>
      </div>

      <div style={{padding:"0 16px 12px", display:"flex", gap:6, overflowX:"auto"}}>
        <button className="chip" style={{gap:6}}><Icons.Filter size={14}/>Filters</button>
        {["Brand","Hair type","Price","Sulfate-free","Vegan","In-stock","Has freebie"].map((c,i) => (
          <button key={i} className="chip" style={{display:"flex", alignItems:"center", gap:4}}>
            {c} <Icons.ChevronDown size={12}/>
          </button>
        ))}
      </div>

      {chips.length>0 && (
        <div style={{padding:"0 16px 12px", display:"flex", gap:6, flexWrap:"wrap"}}>
          {chips.map((c,i) => (
            <span key={i} className="chip chip--active" style={{gap:6}}>{c} <Icons.Close size={12}/></span>
          ))}
        </div>
      )}

      <div className="hairline"/>

      <div className="scr-main">
        <div className="row row--sb" style={{padding:"10px 20px"}}>
          <div className="t-eyebrow">08 — PRODUCTS</div>
          <button className="reset row row--gap8" onClick={()=>setSort(!sort)}>
            <Icons.Sort size={14}/>
            <span className="t-eyebrow-sans">Sort · Best selling</span>
          </button>
        </div>

        <div style={{padding:"0 14px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
          {[
            {brand:"OLAPLEX", name:"No. 3 Hair Perfector", price:1850, strike:2100, color:"var(--hm-sand)", ribbon:"sale", rcopy:"12% OFF"},
            {brand:"K18", name:"Leave-In Molecular Mask", price:4200, color:"var(--hm-peach)", ribbon:"best", rcopy:"BEST SELLER"},
            {brand:"KÉRASTASE", name:"Bain Extentioniste", price:2400, color:"var(--hm-blush)", ribbon:"new", rcopy:"NEW"},
            {brand:"DAVINES", name:"Alchemic Shampoo Tobacco", price:2200, color:"var(--hm-sage)"},
            {brand:"REDKEN", name:"Acidic Bonding Concentrate", price:1980, color:"var(--hm-sky)"},
            {brand:"L'ORÉAL PRO", name:"Absolut Repair Molecular", price:2580, strike:2800, color:"var(--hm-lilac)", ribbon:"sale", rcopy:"SALE"},
          ].map((p,i) => (
            <button key={i} className="reset" onClick={onProduct} style={{textAlign:"left"}}>
              <div style={{position:"relative"}}>
                <TintTile color={p.color} ratio="1/1.1" caption={`[ ${p.brand} ]`}/>
                {p.ribbon && <div style={{position:"absolute", top:8, left:8}}><Ribbon kind={p.ribbon}>{p.rcopy}</Ribbon></div>}
                <button className="reset" style={{position:"absolute", top:8, right:8, width:30, height:30, borderRadius:"50%", background:"rgba(250,246,242,0.92)", display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <Icons.Heart size={14}/>
                </button>
              </div>
              <div style={{padding:"10px 0 0"}}>
                <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>{p.brand}</div>
                <div style={{fontSize:13, lineHeight:1.22, marginBottom:6}}>{p.name}</div>
                <Price amount={p.price} strike={p.strike} size={12}/>
              </div>
            </button>
          ))}
        </div>
        <div style={{height:40}}/>
      </div>
      <TabBar active="shop" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

// ———————— Search (full-screen modal) ————————
function ScreenSearch({ onClose }) {
  const [q, setQ] = React.useState("");
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div style={{padding:"14px 20px", display:"flex", gap:12, alignItems:"center", borderBottom:"1px solid var(--hm-hairline-strong)"}}>
        <Icons.Search size={18}/>
        <input autoFocus value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search 2,400+ products" style={{flex:1, border:0, background:"transparent", fontFamily:"var(--font-sans)", fontSize:15, outline:"none"}}/>
        <Icons.Barcode size={18}/>
        <Icons.Mic size={18}/>
        <button className="reset t-eyebrow-sans" onClick={onClose}>Cancel</button>
      </div>
      <div className="scr-main">
        {q ? (
          <div style={{padding:"16px 20px"}}>
            <div className="t-eyebrow" style={{marginBottom:10}}>BRANDS</div>
            <div style={{padding:"10px 0", borderBottom:"1px solid var(--hm-hairline)"}}>KÉRASTASE <span style={{color:"var(--hm-ink-muted)", fontSize:12}}>· 142 products</span></div>
            <div className="t-eyebrow" style={{marginTop:20, marginBottom:10}}>PRODUCTS</div>
            {[{b:"OLAPLEX", n:"No. 3 Hair Perfector"},{b:"K18", n:"Leave-In Mask"}].map((r,i) => (
              <div key={i} style={{padding:"10px 0", borderBottom:"1px solid var(--hm-hairline)", display:"flex", gap:12, alignItems:"center"}}>
                <div style={{width:40, height:40, background:"var(--hm-sand)"}}/>
                <div><div className="t-eyebrow" style={{fontSize:9}}>{r.b}</div><div style={{fontSize:13}}>{r.n}</div></div>
              </div>
            ))}
            <div style={{marginTop:24, padding:20, background:"var(--hm-lilac)"}}>
              <div className="t-eyebrow" style={{marginBottom:6}}>CAN'T FIND IT?</div>
              <div style={{fontSize:14, fontFamily:"var(--font-display)", marginBottom:10}}>Ask our expert.</div>
              <button className="btn btn--sm">Open chat →</button>
            </div>
          </div>
        ) : (
          <div style={{padding:"20px"}}>
            <div className="t-eyebrow" style={{marginBottom:12}}>RECENT</div>
            <div className="row row--gap8" style={{flexWrap:"wrap"}}>
              {["olaplex 3","k18","kérastase bain","davines milk"].map((c,i)=> <span key={i} className="chip">{c}</span>)}
            </div>
            <div className="t-eyebrow" style={{marginTop:24, marginBottom:12}}>TRENDING</div>
            <div className="row row--gap8" style={{flexWrap:"wrap"}}>
              {["rebonding aftercare","frizz in humidity","postpartum hair fall","anti-brassiness"].map((c,i)=> <span key={i} className="chip">{c}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ScreenPDP, ScreenShop, ScreenSearch, PRODUCT });
