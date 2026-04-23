// Cart, checkout, confirmation

function ScreenCart({ state = "loaded", onClose, onCheckout, onNav, tabVariant }) {
  const [redeem, setRedeem] = React.useState(50);
  if (state === "empty") return <CartEmpty onClose={onClose} onNav={onNav}/>;
  const subtotal = 6050;
  const freeShipAt = 3000;
  const shipProgress = Math.min(100, (subtotal/freeShipAt)*100);
  const discount = (redeem/100)*500;
  const total = subtotal - discount;
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div style={{padding:"14px 20px", display:"flex", alignItems:"center", gap:12, borderBottom:"1px solid var(--hm-hairline-strong)"}}>
        <button className="reset" onClick={onClose}><Icons.ChevronLeft size={20}/></button>
        <div style={{flex:1}}>
          <div className="t-eyebrow" style={{fontSize:9}}>YOUR BAG</div>
          <div style={{fontSize:15, fontFamily:"var(--font-display)"}}>3 items · <Price amount={subtotal} size={14}/></div>
        </div>
        <button className="reset"><Icons.Share size={16}/></button>
      </div>
      <div className="scr-main">
        {/* Free shipping progress */}
        <div style={{padding:"14px 20px", background:"var(--hm-sand)"}}>
          <div className="row row--sb" style={{marginBottom:8}}>
            <span className="t-eyebrow" style={{fontSize:9}}>✓ FREE SHIPPING UNLOCKED</span>
            <span className="t-mono" style={{fontSize:10}}>PHILIPPINES-WIDE</span>
          </div>
          <div style={{height:3, background:"rgba(0,0,0,0.12)"}}>
            <div style={{height:"100%", width:`${shipProgress}%`, background:"var(--hm-ink)"}}/>
          </div>
        </div>

        {/* Line items */}
        <div>
          {[
            {b:"OLAPLEX", n:"No. 3 Hair Perfector", v:"100 ml", p:1850, strike:2100, q:1, c:"var(--hm-sand)"},
            {b:"K18", n:"Leave-In Molecular Mask", v:"50 ml", p:4200, q:1, c:"var(--hm-peach)"},
          ].map((it,i) => <CartRow key={i} {...it}/>)}
        </div>

        {/* Freebie */}
        <div style={{padding:"14px 20px", display:"flex", gap:14, alignItems:"center", background:"var(--hm-blush)", border:"1px dashed var(--hm-ink)", margin:"4px 20px 20px"}}>
          <img src="assets/icons/ecom/special_offer.png" style={{width:42, height:42}}/>
          <div style={{flex:1}}>
            <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>FREEBIE APPLIED</div>
            <div style={{fontSize:12}}>Davines OI Oil sample (12 ml) — with any K18 purchase.</div>
          </div>
        </div>

        {/* Loyalty redemption */}
        <div style={{padding:"16px 20px", borderTop:"1px solid var(--hm-hairline-strong)", borderBottom:"1px solid var(--hm-hairline-strong)"}}>
          <div className="row row--sb" style={{marginBottom:8}}>
            <div>
              <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>TOUSLED POINTS</div>
              <div style={{fontSize:13}}>Redeem <span className="t-mono">{redeem*100}</span> pts · save <Price amount={discount} size={12}/></div>
            </div>
            <span className="t-mono" style={{fontSize:11, color:"var(--hm-ink-muted)"}}>6,840 pts avail</span>
          </div>
          <input type="range" min="0" max="100" value={redeem} onChange={(e)=>setRedeem(+e.target.value)} style={{width:"100%", accentColor:"var(--hm-ink)"}}/>
        </div>

        {/* BillEase */}
        <div style={{padding:"16px 20px", display:"flex", gap:14, alignItems:"center"}}>
          <div style={{width:40, height:40, background:"var(--hm-sky)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontSize:18, fontStyle:"italic"}}>Be</div>
          <div style={{flex:1}}>
            <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>BILLEASE · 0% EMI</div>
            <div style={{fontSize:12}}>or 3 × <span className="t-mono">P {(total/3).toLocaleString('en-PH', {maximumFractionDigits:0})}</span> interest-free</div>
          </div>
          <Icons.ChevronRight size={14}/>
        </div>
        <div className="hairline"/>

        {/* COD notice */}
        <div style={{padding:"14px 20px", display:"flex", gap:12, alignItems:"center"}}>
          <Icons.Info size={16}/>
          <div style={{fontSize:12, color:"var(--hm-ink-soft)"}}>COD available for 1100 Quezon City. <span style={{textDecoration:"underline"}}>Change address</span></div>
        </div>

        {/* Summary */}
        <div style={{padding:"20px", borderTop:"1px solid var(--hm-hairline-strong)"}}>
          {[
            ["Subtotal", subtotal], ["Points redeemed", -discount], ["Shipping", 0],
          ].map(([k,v],i) => (
            <div key={i} className="row row--sb" style={{marginBottom:8, fontSize:13}}>
              <span style={{color:"var(--hm-ink-muted)"}}>{k}</span>
              <Price amount={v} size={12}/>
            </div>
          ))}
          <div className="hairline" style={{margin:"10px 0"}}/>
          <div className="row row--sb">
            <span style={{fontSize:14, fontFamily:"var(--font-display)"}}>Total</span>
            <Price amount={total} size={20}/>
          </div>
          <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)", marginTop:6}}>EARN +{(total/10)|0} PTS ON THIS ORDER</div>
        </div>

        <div style={{height:8}}/>
      </div>
      <StickyBar>
        <button className="btn btn--block" onClick={onCheckout}>Checkout · <Price amount={total} size={12} color="var(--hm-paper)"/></button>
      </StickyBar>
    </div>
  );
}

function CartRow({ b, n, v, p, strike, q, c }) {
  const [qty, setQty] = React.useState(q);
  return (
    <div style={{padding:"16px 20px", display:"flex", gap:14, borderBottom:"1px solid var(--hm-hairline)"}}>
      <div style={{width:80, aspectRatio:"1/1", background:c, flexShrink:0}} className="tint">
        <span className="tint-caption">{b}</span>
      </div>
      <div style={{flex:1}}>
        <div className="t-eyebrow" style={{fontSize:9, marginBottom:2}}>{b}</div>
        <div style={{fontSize:13, lineHeight:1.25, marginBottom:4}}>{n}</div>
        <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)"}}>{v}</div>
        <div className="row row--sb" style={{marginTop:10}}>
          <QtyStepper value={qty} onChange={setQty}/>
          <Price amount={p*qty} strike={strike?strike*qty:null} size={13}/>
        </div>
      </div>
    </div>
  );
}

function CartEmpty({ onClose, onNav }) {
  return (
    <div className="scr scr--blush">
      <MiniStatus/>
      <div style={{padding:"14px 20px", display:"flex", alignItems:"center"}}>
        <button className="reset" onClick={onClose}><Icons.ChevronLeft size={20}/></button>
      </div>
      <div className="scr-main" style={{padding:"40px 32px", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{position:"relative", width:220, height:260, marginBottom:28}}>
          <div style={{position:"absolute", inset:0, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center", opacity:0.28}}/>
        </div>
        <div className="t-eyebrow" style={{marginBottom:10}}>03 — AT THE ROOT</div>
        <h2 className="t-display" style={{fontSize:30, marginBottom:14, lineHeight:1.05}}>Your bag is <em>empty,</em><br/>and that's okay.</h2>
        <p style={{fontSize:14, color:"var(--hm-ink-soft)", marginBottom:22}}>Everything starts somewhere. Your hair's story, too.</p>
        <button className="btn" onClick={()=>onNav("home")}>Browse the shelf</button>
      </div>
    </div>
  );
}

function ScreenCheckout({ onBack, onSuccess }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => { const t = setTimeout(()=>setLoading(false), 900); return () => clearTimeout(t); }, []);
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div style={{padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"var(--hm-ink)", color:"var(--hm-paper)"}}>
        <div className="row row--gap12">
          <img src="assets/logo/seal_white.png" style={{width:24, height:24}}/>
          <div>
            <div className="t-eyebrow" style={{fontSize:9, color:"rgba(243,235,230,0.6)"}}>SECURE CHECKOUT · SSL</div>
            <div style={{fontSize:13, fontFamily:"var(--font-display)"}}>hairmnl.com</div>
          </div>
        </div>
        <button className="reset" onClick={onBack}><Icons.Close size={18} color="var(--hm-paper)"/></button>
      </div>
      <div className="scr-main" style={{background:"#F7F4F0"}}>
        {loading ? (
          <div style={{padding:"60px 20px", textAlign:"center"}}>
            <img src="assets/logo/seal_black.png" style={{width:56, height:56, marginBottom:18}} className="seal-pulse"/>
            <div className="t-eyebrow" style={{color:"var(--hm-ink-muted)"}}>LOADING CHECKOUT</div>
          </div>
        ) : (
          <div style={{padding:"20px"}}>
            <div className="t-eyebrow" style={{marginBottom:10}}>01 — CONTACT</div>
            <input defaultValue="kay.mendoza@hairmnl.com" style={{width:"100%", padding:"14px", border:"1px solid var(--hm-hairline-strong)", fontSize:14, background:"var(--hm-paper)", fontFamily:"var(--font-sans)", boxSizing:"border-box"}}/>
            <div className="t-eyebrow" style={{marginTop:20, marginBottom:10}}>02 — DELIVER TO</div>
            <div style={{padding:"14px", border:"1px solid var(--hm-hairline-strong)", background:"var(--hm-paper)", fontSize:13}}>
              <div style={{fontWeight:500}}>Kay Mendoza · +63 917 555 0188</div>
              <div style={{color:"var(--hm-ink-soft)", marginTop:4}}>14 Scout Borromeo, Diliman<br/>Quezon City, Metro Manila 1100</div>
              <div className="t-eyebrow" style={{fontSize:9, color:"var(--hm-ink-muted)", marginTop:10}}>CHANGE ADDRESS</div>
            </div>
            <div className="t-eyebrow" style={{marginTop:20, marginBottom:10}}>03 — SHIP METHOD</div>
            <div style={{border:"1px solid var(--hm-hairline-strong)", background:"var(--hm-paper)"}}>
              {[{n:"Metro Manila · Same-day (before 2 PM)", p:199, c:true}, {n:"Standard · 2-3 days", p:0, c:false, sub:"Free"}].map((s,i) => (
                <label key={i} style={{display:"flex", padding:"14px", gap:12, borderBottom: i===0?"1px solid var(--hm-hairline)":"none", cursor:"pointer"}}>
                  <div style={{width:16, height:16, borderRadius:"50%", border:"1.5px solid var(--hm-ink)", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {s.c && <div style={{width:8, height:8, borderRadius:"50%", background:"var(--hm-ink)"}}/>}
                  </div>
                  <div style={{flex:1, fontSize:13}}>{s.n}</div>
                  <span className="t-mono" style={{fontSize:12}}>{s.p? `P ${s.p}`: "Free"}</span>
                </label>
              ))}
            </div>
            <div className="t-eyebrow" style={{marginTop:20, marginBottom:10}}>04 — PAY WITH</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
              {[
                ["GCash", true], ["Maya", false], ["GrabPay", false], ["BillEase", false], ["BDO", false], ["COD", false],
              ].map(([n,sel],i) => (
                <div key={i} style={{padding:"14px", border: sel?"1.5px solid var(--hm-ink)":"1px solid var(--hm-hairline-strong)", background:"var(--hm-paper)", fontSize:12, textAlign:"center", fontFamily:"var(--font-sans)", fontWeight: sel?500:400}}>{n}</div>
              ))}
            </div>
            <button className="btn btn--block" style={{marginTop:24}} onClick={onSuccess}>Place order · <Price amount={5550} size={12} color="var(--hm-paper)"/></button>
            <div className="t-eyebrow" style={{fontSize:9, textAlign:"center", marginTop:12, color:"var(--hm-ink-muted)"}}>PAYMENTS SECURED BY SHOPIFY</div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScreenConfirmation({ onDone, onNav }) {
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div className="scr-main">
        <div style={{padding:"32px 24px 20px", textAlign:"center", background:"var(--hm-sand)"}}>
          <div style={{width:80, height:80, borderRadius:"50%", background:"var(--hm-ink)", color:"var(--hm-blush)", margin:"0 auto 18px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Icons.Check size={36} stroke={1.8} color="var(--hm-blush)"/>
          </div>
          <div className="t-eyebrow" style={{marginBottom:8}}>ORDER #HM-2026-04-8842</div>
          <h2 className="t-display" style={{fontSize:30, lineHeight:1.04, marginBottom:10}}>Your order is <em>on the way.</em></h2>
          <p style={{fontSize:13, color:"var(--hm-ink-soft)"}}>We've sent a confirmation to kay.mendoza@hairmnl.com.</p>
        </div>

        {/* Tracking timeline */}
        <div style={{padding:"28px 24px"}}>
          <div className="t-eyebrow" style={{marginBottom:14}}>01 — DELIVERY TIMELINE</div>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute", left:9, top:8, bottom:8, width:1, background:"var(--hm-hairline-strong)"}}/>
            {[
              {t:"Order placed", d:"Today · 10:42 AM", done:true},
              {t:"Packed at Pasig warehouse", d:"Today · by 5 PM", done:true},
              {t:"Picked up by courier (Lalamove)", d:"Tomorrow · 9 AM", done:false, active:true},
              {t:"Out for delivery", d:"Tomorrow · by 2 PM", done:false},
              {t:"Delivered", d:"Est. Thu 24 Apr", done:false},
            ].map((s,i) => (
              <div key={i} style={{display:"flex", gap:14, padding:"10px 0"}}>
                <div style={{width:18, height:18, borderRadius:"50%", background: s.done? "var(--hm-ink)" : s.active? "var(--hm-paper)" : "var(--hm-paper)", border: s.done? "1px solid var(--hm-ink)" : s.active? "1.5px solid var(--hm-ink)" : "1px solid var(--hm-hairline-strong)", flexShrink:0, position:"relative", zIndex:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                  {s.done && <Icons.Check size={12} stroke={2} color="var(--hm-paper)"/>}
                  {s.active && <div style={{width:8, height:8, borderRadius:"50%", background:"var(--hm-ink)"}}/>}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14, fontWeight: s.active?500:400}}>{s.t}</div>
                  <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)", marginTop:2, letterSpacing:"0.08em"}}>{s.d.toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline"/>
        <div style={{padding:"20px 24px"}}>
          <div className="t-eyebrow" style={{marginBottom:12}}>02 — POINTS EARNED</div>
          <div className="row row--sb">
            <div className="row row--gap12">
              <img src="assets/logo/seal_black.png" style={{width:36, height:36}}/>
              <div>
                <div style={{fontSize:14, fontFamily:"var(--font-display)"}}>+605 Tousled points</div>
                <div style={{fontSize:11, color:"var(--hm-ink-muted)"}}>Settles in 24 hours</div>
              </div>
            </div>
            <div className="t-mono" style={{fontSize:14}}>7,445</div>
          </div>
        </div>
        <div className="hairline"/>
        <div style={{padding:"20px 24px"}}>
          <div className="t-eyebrow" style={{marginBottom:12}}>03 — ORDER</div>
          {[{n:"Olaplex No. 3", q:1, p:1850}, {n:"K18 Leave-In Mask", q:1, p:4200}].map((it,i) => (
            <div key={i} className="row row--sb" style={{padding:"8px 0", fontSize:13}}>
              <span>{it.n} <span style={{color:"var(--hm-ink-muted)"}}>× {it.q}</span></span>
              <Price amount={it.p} size={12}/>
            </div>
          ))}
          <div className="hairline" style={{margin:"10px 0"}}/>
          <div className="row row--sb">
            <span style={{fontSize:13, fontFamily:"var(--font-display)"}}>Total paid (GCash)</span>
            <Price amount={5550} size={16}/>
          </div>
        </div>
        <div style={{height:20}}/>
      </div>
      <StickyBar>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
          <button className="btn btn--ghost" onClick={()=>onNav("home")}>Keep shopping</button>
          <button className="btn">Track order</button>
        </div>
      </StickyBar>
    </div>
  );
}

Object.assign(window, { ScreenCart, ScreenCheckout, ScreenConfirmation });
