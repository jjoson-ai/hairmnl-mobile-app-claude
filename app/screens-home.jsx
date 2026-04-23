// Home screen — 3 layout variants

function ScreenHome({ variant = "editorial", signedIn = true, cartCount = 2, onNav, tabVariant = "serifmark" }) {
  if (variant === "shopfirst") return <HomeShopFirst {...{signedIn, cartCount, onNav, tabVariant}}/>;
  if (variant === "concern") return <HomeConcernLed {...{signedIn, cartCount, onNav, tabVariant}}/>;
  return <HomeEditorial {...{signedIn, cartCount, onNav, tabVariant}}/>;
}

function HomeChrome({ children, trailing, signedIn }) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Magandang umaga" : hour < 18 ? "Magandang hapon" : "Magandang gabi";
  return (
    <>
      <MiniStatus/>
      <div style={{padding:"10px 20px 12px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <img src="assets/logo/horizontal_black.png" style={{height:14}}/>
        <div className="row row--gap16">
          <button className="reset"><Icons.Search size={20}/></button>
          <button className="reset" style={{position:"relative"}}>
            <Icons.Bell size={20}/>
            <span style={{position:"absolute", top:-2, right:-2, width:6, height:6, borderRadius:"50%", background:"var(--hm-terracotta)"}}/>
          </button>
          <button className="reset" style={{position:"relative"}} onClick={()=>onNavCart && onNavCart()}>
            <Icons.Bag size={20}/>
          </button>
        </div>
      </div>
      <div className="hairline"/>
      {children}
    </>
  );
}

function LoyaltyCard({ pts = 6840, tier = "GOLD", next = 10000, inline }) {
  const pct = Math.min(100, (pts/next)*100);
  return (
    <div style={{padding:"16px", background:"var(--hm-paper)", border:"1px solid var(--hm-hairline-strong)", display:"flex", alignItems:"center", gap:14, ...inline}}>
      <div style={{position:"relative", width:56, height:56, flexShrink:0}}>
        <svg viewBox="0 0 56 56" style={{position:"absolute", inset:0, transform:"rotate(-90deg)"}}>
          <circle cx="28" cy="28" r="26" stroke="rgba(26,26,26,0.12)" strokeWidth="2" fill="none"/>
          <circle cx="28" cy="28" r="26" stroke="var(--hm-espresso)" strokeWidth="2" fill="none"
            strokeDasharray={`${(pct/100)*163.3} 163.3`} strokeLinecap="round"/>
        </svg>
        <img src="assets/logo/seal_black.png" style={{position:"absolute", inset:8, width:40, height:40}}/>
      </div>
      <div style={{flex:1}}>
        <div className="t-eyebrow" style={{marginBottom:3}}>TOUSLED · {tier}</div>
        <div className="row row--gap8" style={{alignItems:"baseline"}}>
          <span style={{fontFamily:"var(--font-mono)", fontSize:22, letterSpacing:"0.02em"}}>{pts.toLocaleString()}</span>
          <span style={{fontSize:11, color:"var(--hm-ink-muted)"}}>pts</span>
        </div>
        <div style={{fontSize:11, color:"var(--hm-ink-muted)", marginTop:2}}>{next - pts} pts to Premium tier</div>
      </div>
      <Icons.ChevronRight size={16} color="var(--hm-ink-muted)"/>
    </div>
  );
}

function PaymentStrip() {
  const items = ["GCash", "Maya", "GrabPay", "BillEase", "COD", "BDO", "BPI"];
  return (
    <div className="no-scrollbar" style={{padding:"14px 20px", display:"flex", gap:8, overflowX:"auto", borderTop:"1px solid var(--hm-hairline)", borderBottom:"1px solid var(--hm-hairline)", background:"var(--hm-paper)"}}>
      <span className="t-eyebrow" style={{alignSelf:"center", flexShrink:0}}>Pays:</span>
      {items.map((p,i) => (
        <span key={i} className="chip chip--mono" style={{background:"var(--hm-paper)", fontSize:9, padding:"5px 10px", minHeight:24}}>{p}</span>
      ))}
    </div>
  );
}

function HomeEditorial({ signedIn, onNav, tabVariant }) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Magandang umaga" : hour < 18 ? "Magandang hapon" : "Magandang gabi";
  const concerns = [
    { label: "Damaged", img: "assets/icons/solutions/damaged.png" },
    { label: "Frizz", img: "assets/icons/solutions/frizz.png" },
    { label: "Coloured", img: "assets/icons/solutions/colored.png" },
    { label: "Hair fall", img: "assets/icons/solutions/hairfall.png" },
    { label: "Defined curls", img: "assets/icons/solutions/curls.png" },
    { label: "Dandruff", img: "assets/icons/solutions/dandruff.png" },
    { label: "Brassiness", img: "assets/icons/solutions/brassiness.png" },
  ];
  return (
    <div className="scr scr--paper">
      <HomeChrome/>
      <div className="scr-main">
        {/* Greeting */}
        <div style={{padding:"22px 20px 18px"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>TODAY · 23 APR 2026</div>
          {signedIn ? (
            <h1 className="t-display" style={{fontSize:36, lineHeight:1.02}}>
              {greet}, <em>Kay.</em>
            </h1>
          ) : (
            <h1 className="t-display" style={{fontSize:36, lineHeight:1.02}}>
              <em>Welcome.</em><br/>Your mane awaits.
            </h1>
          )}
          <p style={{fontSize:14, color:"var(--hm-ink-soft)", marginTop:10, maxWidth:"88%"}}>
            {signedIn ? "Your scalp scrub ships tomorrow. Let's see what else your hair is asking for."
                     : "Sign in to see your personalised routine, or browse curated collections below."}
          </p>
        </div>
        {/* Loyalty ring */}
        {signedIn && (
          <div style={{padding:"0 20px 22px"}}>
            <LoyaltyCard pts={6840} tier="GOLD" next={10000}/>
          </div>
        )}
        {!signedIn && (
          <div style={{padding:"0 20px 22px"}}>
            <div style={{padding:16, background:"var(--hm-sand)", display:"flex", alignItems:"center", gap:14}}>
              <img src="assets/logo/seal_black.png" style={{width:44, height:44, flexShrink:0}}/>
              <div style={{flex:1}}>
                <div className="t-eyebrow" style={{marginBottom:4}}>JOIN TOUSLED</div>
                <div style={{fontSize:13, color:"var(--hm-ink-soft)"}}>Sign up and we'll credit 10,000 welcome points.</div>
              </div>
              <button className="btn btn--sm">Sign in</button>
            </div>
          </div>
        )}
        <div className="hairline"/>

        {/* Your Routine */}
        {signedIn && (<>
          <SectionIndex num="01" title="YOUR ROUTINE" trailing={<span className="t-eyebrow" style={{color:"var(--hm-ink-muted)"}}>4 STEPS</span>}/>
          <div className="no-scrollbar" style={{display:"flex", gap:12, padding:"0 20px 24px", overflowX:"auto"}}>
            {[
              {brand:"KÉRASTASE", name:"Bain Hydra-Fondant", step:"Cleanse", color:"var(--hm-sky)", pts:128},
              {brand:"OLAPLEX", name:"No. 3 Hair Perfector", step:"Treat · every 2 wk", color:"var(--hm-sand)", pts:94},
              {brand:"DAVINES", name:"OI All in One Milk", step:"Leave-in", color:"var(--hm-lilac)", pts:72},
              {brand:"K18", name:"Leave-In Molecular Mask", step:"Repair · 4 min", color:"var(--hm-sage)", pts:156},
            ].map((p,i) => (
              <button key={i} className="reset" onClick={()=>onNav("pdp")} style={{flexShrink:0, width:152, textAlign:"left"}}>
                <TintTile color={p.color} ratio="1/1" caption={`[ ${p.brand} ]`}/>
                <div style={{padding:"10px 0 0"}}>
                  <div className="t-eyebrow" style={{fontSize:9, marginBottom:3}}>{p.step}</div>
                  <div style={{fontSize:13, lineHeight:1.2, fontWeight:500}}>{p.name}</div>
                  <div style={{fontFamily:"var(--font-mono)", fontSize:10, color:"var(--hm-ink-muted)", marginTop:4}}>+{p.pts} pts</div>
                </div>
              </button>
            ))}
          </div>
          <div className="hairline"/>
        </>)}

        {/* Shop by Concern */}
        <SectionIndex num="02" title="SHOP BY CONCERN"/>
        <div className="no-scrollbar" style={{padding:"0 20px", display:"flex", gap:10, overflowX:"auto"}}>
          {concerns.map((c,i) => (
            <button key={i} className="reset" onClick={()=>onNav("plp")} style={{flexShrink:0, width:88, textAlign:"center"}}>
              <img src={c.img} style={{width:88, height:88, borderRadius:"50%"}}/>
              <div style={{fontSize:11, marginTop:8}}>{c.label}</div>
            </button>
          ))}
        </div>

        <div style={{height:24}}/>
        <div className="hair-strand-divider"/>

        {/* Editorial hero */}
        <SectionIndex num="03" title="EDITORIAL"/>
        <button className="reset" onClick={()=>onNav("blog")} style={{width:"100%", textAlign:"left", padding:"0 20px"}}>
          <div style={{position:"relative", aspectRatio:"4/5", background:"var(--hm-espresso)", overflow:"hidden"}}>
            <div style={{position:"absolute", inset:0, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"cover", opacity:0.16, mixBlendMode:"screen"}}/>
            <div style={{position:"absolute", top:20, left:20, right:20}}>
              <div className="t-eyebrow" style={{color:"rgba(243,235,230,0.7)"}}>ISSUE 07 · 2026 BEST IN BEAUTY</div>
            </div>
            <div style={{position:"absolute", bottom:20, left:20, right:20, color:"var(--hm-blush)"}}>
              <h2 className="t-display" style={{fontSize:36, color:"inherit", lineHeight:1.02}}>
                The <em>nine</em> bottles<br/>we reached for<br/>this <em>wet</em> season.
              </h2>
              <div style={{display:"flex", alignItems:"center", gap:10, marginTop:18}}>
                <span className="t-eyebrow" style={{color:"rgba(243,235,230,0.7)"}}>READ →</span>
                <span className="t-eyebrow" style={{color:"rgba(243,235,230,0.5)"}}>6 MIN</span>
              </div>
            </div>
          </div>
        </button>

        <div style={{height:24}}/>

        {/* Bestsellers */}
        <SectionIndex num="04" title="BEST SELLERS · THIS WEEK" trailing={<button className="reset t-eyebrow-sans">See all</button>}/>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, padding:"0 20px"}}>
          {[
            {brand:"OLAPLEX", name:"No. 3 Hair Perfector", price:1850, strike:2100, color:"var(--hm-sand)", ribbon:"sale", rcopy:"20% OFF"},
            {brand:"K18", name:"Leave-In Molecular Mask", price:4200, color:"var(--hm-peach)", ribbon:"best", rcopy:"BEST SELLER"},
            {brand:"KÉRASTASE", name:"Bain Extentioniste", price:2400, color:"var(--hm-blush)", ribbon:"new", rcopy:"NEW"},
            {brand:"DAVINES", name:"Minu Shampoo", price:2200, color:"var(--hm-sage)"},
          ].map((p,i) => (
            <button key={i} className="reset" onClick={()=>onNav("pdp")} style={{textAlign:"left"}}>
              <div style={{position:"relative"}}>
                <TintTile color={p.color} ratio="1/1" caption={`[ ${p.brand} ]`}/>
                {p.ribbon && <div style={{position:"absolute", top:8, left:8}}><Ribbon kind={p.ribbon}>{p.rcopy}</Ribbon></div>}
                <div role="button" aria-label="Add to wishlist" onClick={(e)=>e.stopPropagation()} style={{position:"absolute", top:8, right:8, width:32, height:32, borderRadius:"50%", background:"rgba(250,246,242,0.94)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}>
                  <Icons.Heart size={14}/>
                </div>
              </div>
              <div style={{padding:"10px 0 0"}}>
                <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>{p.brand}</div>
                <div style={{fontSize:13, lineHeight:1.22, fontWeight:400}}>{p.name}</div>
                <div style={{marginTop:6}}><Price amount={p.price} strike={p.strike} size={12}/></div>
              </div>
            </button>
          ))}
        </div>

        <div style={{height:32}}/>

        {/* Studios card */}
        <div style={{padding:"0 20px"}}>
          <button className="reset" onClick={()=>onNav("studio")} style={{width:"100%", padding:20, background:"var(--hm-stone)", textAlign:"left", display:"flex", gap:14, alignItems:"center"}}>
            <img src="assets/logo/studio_vertical_black.png" style={{height:64, flexShrink:0}}/>
            <div style={{flex:1}}>
              <div className="t-eyebrow" style={{marginBottom:6}}>HAIRMNL STUDIO</div>
              <div style={{fontSize:15, lineHeight:1.3}}>Book a cut, colour, or treatment. Pasig or BGC.</div>
              <div style={{fontFamily:"var(--font-mono)", fontSize:10, color:"var(--hm-ink-muted)", marginTop:8, letterSpacing:"0.1em"}}>MON–SAT 0930–1900</div>
            </div>
            <Icons.ArrowRight size={18}/>
          </button>
        </div>

        <PaymentStrip/>

        {/* Footer */}
        <div style={{padding:"36px 20px 48px", textAlign:"center"}}>
          <img src="assets/logo/seal_black.png" style={{width:56, height:56, opacity:0.6, margin:"0 auto 14px"}}/>
          <div className="t-eyebrow" style={{color:"var(--hm-ink-muted)"}}>YOUR MANE AUTHORITY</div>
          <div className="t-eyebrow" style={{color:"var(--hm-ink-subtle)", marginTop:6, fontSize:9}}>EST. METRO MANILA · 2017</div>
        </div>

      </div>
      <TabBar active="home" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

// Variant B — Shop-first (utility-forward, grid-heavy)
function HomeShopFirst({ signedIn, onNav, tabVariant }) {
  const brands = ["KÉRASTASE","L'ORÉAL PRO","DAVINES","OLAPLEX","K18","REDKEN","SCHWARZKOPF","TIGI","BIOLAGE","DYSON"];
  return (
    <div className="scr scr--paper">
      <HomeChrome/>
      <div className="scr-main">
        <div style={{padding:"18px 20px"}}>
          <div className="row row--sb">
            <div>
              <div className="t-eyebrow" style={{marginBottom:4}}>WED · 23 APR</div>
              <div style={{fontSize:20, fontFamily:"var(--font-display)"}}>Hi, <em>Kay.</em></div>
            </div>
            {signedIn && <LoyaltyCardMini pts={6840} tier="GOLD"/>}
          </div>
        </div>
        <div style={{padding:"0 20px 16px"}}>
          <div style={{background:"var(--hm-paper)", border:"1px solid var(--hm-hairline-strong)", padding:"12px 14px", display:"flex", alignItems:"center", gap:10}}
               onClick={()=>onNav("search")}>
            <Icons.Search size={16}/>
            <span style={{fontSize:13, color:"var(--hm-ink-muted)", flex:1}}>Search brands, products, concerns</span>
            <Icons.Barcode size={16}/>
          </div>
        </div>

        <SectionIndex num="01" title="SHOP BY BRAND"/>
        <div style={{padding:"0 20px 18px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:1, background:"var(--hm-hairline-strong)", border:"1px solid var(--hm-hairline-strong)"}}>
          {brands.map((b,i) => (
            <div key={i} onClick={()=>onNav("plp")} style={{padding:"18px 8px", background:"var(--hm-paper)", textAlign:"center", fontFamily:"var(--font-sans)", fontSize:10, fontWeight:500, letterSpacing:"0.1em"}}>{b}</div>
          ))}
        </div>

        <SectionIndex num="02" title="CURATED COLLECTIONS"/>
        <div style={{padding:"0 20px", display:"grid", gap:12}}>
          {[
            {idx:"01", name:"For the over-lightened", color:"var(--hm-peach)"},
            {idx:"02", name:"Humidity warriors", color:"var(--hm-teal)"},
            {idx:"03", name:"Thinning at the crown", color:"var(--hm-lilac)"},
            {idx:"04", name:"Just got out of lockdown", color:"var(--hm-sand)"},
          ].map((c,i) => (
            <button key={i} className="reset" onClick={()=>onNav("plp")} style={{textAlign:"left", padding:"18px 18px", background:c.color, display:"flex", alignItems:"center", gap:14}}>
              <span className="t-index" style={{flexShrink:0}}>{c.idx}</span>
              <span style={{fontFamily:"var(--font-display)", fontSize:22, letterSpacing:"-0.02em", flex:1}}>{c.name}</span>
              <Icons.ArrowRight size={16}/>
            </button>
          ))}
        </div>

        <SectionIndex num="03" title="BEST SELLERS"/>
        <div style={{padding:"0 20px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
          {[
            {brand:"OLAPLEX", name:"No. 3 Hair Perfector", price:1850, color:"var(--hm-sand)"},
            {brand:"K18", name:"Leave-In Mask", price:4200, color:"var(--hm-peach)"},
          ].map((p,i) => (
            <button key={i} className="reset" onClick={()=>onNav("pdp")} style={{textAlign:"left"}}>
              <TintTile color={p.color} ratio="1/1" caption={`[ ${p.brand} ]`}/>
              <div className="t-eyebrow" style={{fontSize:9, marginTop:8}}>{p.brand}</div>
              <div style={{fontSize:13, marginTop:2}}>{p.name}</div>
              <div style={{marginTop:6}}><Price amount={p.price} size={12}/></div>
            </button>
          ))}
        </div>
        <PaymentStrip/>
        <div style={{height:60}}/>
      </div>
      <TabBar active="home" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

// Variant C — Concern-led (emotional, editorial, minimal commerce up top)
function HomeConcernLed({ signedIn, onNav, tabVariant }) {
  return (
    <div className="scr scr--blush">
      <HomeChrome/>
      <div className="scr-main">
        <div style={{padding:"30px 24px 24px", position:"relative"}}>
          <div style={{position:"absolute", inset:0, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"cover", opacity:0.1, pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
            <div className="t-eyebrow" style={{marginBottom:14}}>AT THE ROOT · 03</div>
            <h1 className="t-display" style={{fontSize:38, lineHeight:1.02, marginBottom:18}}>
              We <em>get</em> it.<br/>What's<br/>on your <em>mind</em><br/>today?
            </h1>
            <p style={{fontSize:14, color:"var(--hm-ink-soft)", maxWidth:"88%"}}>Tell us how your hair feels. We'll walk you to the aisle that's right for you.</p>
          </div>
        </div>
        <div style={{padding:"0 20px 24px", display:"grid", gap:1, background:"rgba(26,26,26,0.2)"}}>
          {[
            {seal:"assets/icons/solutions/damaged.png", label:"My hair feels damaged"},
            {seal:"assets/icons/solutions/frizz.png", label:"It's frizzy and can't be tamed"},
            {seal:"assets/icons/solutions/colored.png", label:"My colour is fading fast"},
            {seal:"assets/icons/solutions/hairfall.png", label:"I'm seeing a lot of fall"},
            {seal:"assets/icons/solutions/curls.png", label:"I want my curls to behave"},
            {seal:"assets/icons/solutions/dandruff.png", label:"Flakes on my shoulders"},
            {seal:"assets/icons/solutions/brassiness.png", label:"My blonde has gone orange"},
          ].map((c,i) => (
            <button key={i} className="reset" onClick={()=>onNav("plp")} style={{background:"var(--hm-blush)", padding:"16px 18px", display:"flex", alignItems:"center", gap:16, textAlign:"left"}}>
              <img src={c.seal} style={{width:44, height:44, flexShrink:0}}/>
              <span style={{flex:1, fontSize:15, fontFamily:"var(--font-display)", letterSpacing:"-0.01em"}}>{c.label}</span>
              <Icons.ArrowRight size={16}/>
            </button>
          ))}
        </div>
        <div style={{padding:"24px", background:"var(--hm-paper)", borderTop:"1px solid var(--hm-hairline-strong)", borderBottom:"1px solid var(--hm-hairline-strong)"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>NOT SURE?</div>
          <h3 className="t-display" style={{fontSize:26, marginBottom:12}}>Take the <em>Hair Quiz.</em></h3>
          <p style={{fontSize:13, color:"var(--hm-ink-soft)", marginBottom:16}}>Six questions. A diagnosis and routine in under 90 seconds.</p>
          <button className="btn" onClick={()=>onNav("quiz")}>Begin the quiz →</button>
        </div>
        <PaymentStrip/>
        <div style={{height:60}}/>
      </div>
      <TabBar active="home" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

function LoyaltyCardMini({pts, tier}) {
  return (
    <div style={{display:"flex", gap:10, alignItems:"center"}}>
      <img src="assets/logo/seal_black.png" style={{width:32, height:32}}/>
      <div>
        <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>{tier}</div>
        <div style={{fontFamily:"var(--font-mono)", fontSize:13}}>{pts.toLocaleString()}</div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenHome, LoyaltyCard, PaymentStrip, LoyaltyCardMini });
