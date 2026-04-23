// Account, Loyalty, Chat, Studio, Editorial, Notifications, Empty

function ScreenMe({ onNav, tabVariant, signedIn }) {
  if (!signedIn) return (
    <div className="scr scr--blush">
      <MiniStatus/>
      <div className="scr-main" style={{padding:"40px 28px", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <img src="assets/logo/seal_black.png" style={{width:72, height:72, marginBottom:24}}/>
        <div className="t-eyebrow" style={{marginBottom:10}}>YOUR MANE AUTHORITY</div>
        <h2 className="t-display" style={{fontSize:32, marginBottom:14, lineHeight:1.04}}>Sign in, <em>Kay.</em></h2>
        <p style={{fontSize:14, color:"var(--hm-ink-soft)", marginBottom:24, maxWidth:"80%"}}>Your routine, points, orders and consultations — all in one place.</p>
        <button className="btn btn--block" style={{maxWidth:260}}>Sign in</button>
        <button className="reset t-eyebrow-sans" style={{marginTop:16}}>Create an account →</button>
      </div>
      <TabBar active="me" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div className="scr-main">
        <div style={{padding:"24px 20px 18px"}}>
          <div className="row row--gap16">
            <div style={{width:64, height:64, borderRadius:"50%", background:"var(--hm-sand)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontSize:28, fontStyle:"italic"}}>K</div>
            <div style={{flex:1}}>
              <div className="t-eyebrow" style={{fontSize:9, marginBottom:3}}>MEMBER SINCE 2021</div>
              <div style={{fontSize:22, fontFamily:"var(--font-display)"}}>Kay <em>Mendoza</em></div>
              <div style={{fontSize:11, color:"var(--hm-ink-muted)", marginTop:2}}>kay.mendoza@hairmnl.com</div>
            </div>
            <Icons.Settings size={18}/>
          </div>
        </div>
        <div style={{padding:"0 20px 20px"}}><LoyaltyCard pts={6840} tier="GOLD" next={10000}/></div>
        <div className="hairline"/>

        {[
          {n:"01", t:"Orders", d:"3 active", Ic: Icons.Box},
          {n:"02", t:"Wishlist", d:"12 items", Ic: Icons.Heart},
          {n:"03", t:"Tousled rewards", d:"6,840 pts · Gold", Ic: Icons.Award},
          {n:"04", t:"Addresses", d:"2 saved", Ic: Icons.Pin},
          {n:"05", t:"Payment methods", d:"GCash · BDO ••4412", Ic: Icons.Box},
          {n:"06", t:"Consultations", d:"2 past · 1 ongoing", Ic: Icons.Chat},
          {n:"07", t:"Studio appointments", d:"None scheduled", Ic: Icons.Calendar},
          {n:"08", t:"Notifications", d:null, Ic: Icons.Bell},
          {n:"09", t:"Help & support", d:null, Ic: Icons.Info},
          {n:"10", t:"Sign out", d:null, Ic: null},
        ].map((r,i) => (
          <button key={i} className="reset" style={{width:"100%", padding:"16px 20px", display:"flex", alignItems:"center", gap:14, borderBottom:"1px solid var(--hm-hairline)", textAlign:"left"}}>
            <span className="t-index" style={{flexShrink:0, width:20}}>{r.n}</span>
            <span style={{flex:1, fontSize:15, fontFamily:"var(--font-display)"}}>{r.t}</span>
            {r.d && <span className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)", letterSpacing:"0.08em"}}>{r.d.toUpperCase()}</span>}
            <Icons.ChevronRight size={14} color="var(--hm-ink-muted)"/>
          </button>
        ))}
        <div style={{padding:"28px 20px 40px", textAlign:"center"}}>
          <img src="assets/logo/seal_black.png" style={{width:44, height:44, opacity:0.35, margin:"0 auto 10px"}}/>
          <div className="t-mono" style={{fontSize:9, color:"var(--hm-ink-subtle)", letterSpacing:"0.15em"}}>HAIRMNL v6.1.3 · BUILD 2026.04</div>
        </div>
      </div>
      <TabBar active="me" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

function ScreenLoyalty({ onNav, tabVariant }) {
  return (
    <div className="scr scr--blush">
      <MiniStatus/>
      <div className="scr-main">
        <div style={{padding:"32px 20px 24px", textAlign:"center", position:"relative"}}>
          <div style={{position:"absolute", inset:0, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"cover", opacity:0.1}}/>
          <div style={{position:"relative"}}>
            <div className="t-eyebrow" style={{marginBottom:14}}>TOUSLED · GOLD TIER</div>
            <div style={{position:"relative", width:140, height:140, margin:"0 auto 18px"}}>
              <svg viewBox="0 0 140 140" style={{position:"absolute", inset:0, transform:"rotate(-90deg)"}}>
                <circle cx="70" cy="70" r="66" stroke="rgba(26,26,26,0.12)" strokeWidth="2" fill="none"/>
                <circle cx="70" cy="70" r="66" stroke="var(--hm-espresso)" strokeWidth="2.5" fill="none" strokeDasharray="284 414" strokeLinecap="round"/>
              </svg>
              <img src="assets/logo/seal_black.png" style={{position:"absolute", inset:24, width:92, height:92}}/>
            </div>
            <div style={{fontFamily:"var(--font-mono)", fontSize:52, letterSpacing:"-0.02em", lineHeight:1}}>6,840</div>
            <div className="t-eyebrow" style={{marginTop:6}}>POINTS</div>
            <div style={{fontSize:12, color:"var(--hm-ink-muted)", marginTop:10, fontFamily:"var(--font-display)", fontStyle:"italic"}}>3,160 to Premium — unlock free salon services.</div>
          </div>
        </div>
        <div style={{padding:"14px 20px", background:"var(--hm-terracotta)", color:"var(--hm-paper)"}}>
          <div className="row row--sb">
            <div>
              <div className="t-eyebrow" style={{fontSize:9, color:"rgba(243,235,230,0.8)"}}>1,200 POINTS EXPIRING 30 APR</div>
              <div style={{fontSize:13, marginTop:2, fontFamily:"var(--font-display)"}}>Use them this week.</div>
            </div>
            <Icons.ChevronRight size={16}/>
          </div>
        </div>

        <SectionIndex num="01" title="WAYS TO EARN"/>
        {[
          {n:"Place an order", p:"1 PT / P 10"},
          {n:"Write a product review", p:"+150 PTS"},
          {n:"Refer a friend", p:"+500 PTS"},
          {n:"Complete the Hair Quiz", p:"+200 PTS"},
          {n:"Follow on Instagram", p:"+100 PTS"},
          {n:"Celebrate your birthday", p:"+1,000 PTS"},
        ].map((r,i) => (
          <div key={i} style={{padding:"14px 20px", display:"flex", gap:14, borderBottom:"1px solid var(--hm-hairline)", alignItems:"center"}}>
            <span className="t-index" style={{width:20}}>{String(i+1).padStart(2,"0")}</span>
            <div style={{flex:1, fontSize:14}}>{r.n}</div>
            <span className="t-mono" style={{fontSize:11}}>{r.p}</span>
          </div>
        ))}

        <SectionIndex num="02" title="REDEEM"/>
        <div style={{padding:"0 20px 20px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
          {[
            {p:"2,000", r:"P 200 off", c:"var(--hm-sand)"},
            {p:"5,000", r:"Full-size Olaplex Nº 3", c:"var(--hm-peach)"},
            {p:"10,000", r:"K18 Leave-in Mask", c:"var(--hm-lilac)"},
            {p:"15,000", r:"Studio blowout (BGC)", c:"var(--hm-sky)"},
          ].map((r,i) => (
            <div key={i} style={{padding:14, background:r.c, aspectRatio:"1/1", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
              <img src="assets/logo/seal_black.png" style={{width:32, height:32}}/>
              <div>
                <div className="t-mono" style={{fontSize:11, marginBottom:3}}>{r.p} PTS</div>
                <div style={{fontSize:13, fontFamily:"var(--font-display)", lineHeight:1.15}}>{r.r}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{height:40}}/>
      </div>
      <TabBar active="rewards" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

function ScreenChat({ onNav, tabVariant }) {
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div style={{padding:"14px 20px 10px", borderBottom:"1px solid var(--hm-hairline-strong)"}}>
        <div className="row row--sb">
          <div>
            <div className="t-eyebrow" style={{fontSize:9, marginBottom:3}}>ASK THE EXPERT · RICA M.</div>
            <div style={{fontSize:16, fontFamily:"var(--font-display)"}}>Usually replies in <em>an hour.</em></div>
          </div>
          <div style={{width:40, height:40, borderRadius:"50%", background:"var(--hm-peach)", position:"relative"}}>
            <div style={{position:"absolute", right:-2, bottom:-2, width:10, height:10, borderRadius:"50%", background:"#5F7A5B", border:"2px solid var(--hm-paper)"}}/>
          </div>
        </div>
        <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)", marginTop:8, letterSpacing:"0.08em"}}>OFFICE HOURS · MON–SAT 0930–1900</div>
      </div>
      <div className="scr-main" style={{padding:"16px 20px", background:"#F7F4F0"}}>
        <div style={{textAlign:"center", marginBottom:14, fontSize:10, fontFamily:"var(--font-mono)", color:"var(--hm-ink-muted)", letterSpacing:"0.1em"}}>TODAY · 10:42 AM</div>
        <Bubble side="in" name="Rica">Hi po! Ano po ang hair concern ninyo today? 💆‍♀️</Bubble>
        <Bubble side="out">Hi Rica, bleached my hair last month and it's been feeling straw-like</Bubble>
        <Bubble side="in" name="Rica">I get it — bleach really strips the bonds. Can you send me a quick photo of mid-lengths to ends?</Bubble>
        <div style={{alignSelf:"flex-end", maxWidth:"60%", marginLeft:"auto", marginBottom:10}}>
          <div style={{aspectRatio:"3/4", background:"var(--hm-honey)"}} className="tint"><span className="tint-caption">[ PHOTO · HAIR ENDS ]</span></div>
        </div>
        <Bubble side="in" name="Rica">Thanks po. Diagnosis: Stage 2 bond damage with dryness. I'd start a 4-week Olaplex + K18 cycle. Here's what I'd grab 👇</Bubble>
        <div style={{alignSelf:"flex-start", maxWidth:"78%", padding:12, background:"var(--hm-paper)", border:"1px solid var(--hm-hairline-strong)", marginBottom:10}}>
          <div className="t-eyebrow" style={{fontSize:9, marginBottom:8}}>PRESCRIPTION · 3 ITEMS</div>
          {[{b:"OLAPLEX", n:"Nº 3 Hair Perfector", p:1850},{b:"K18", n:"Leave-In Mask 50ml", p:4200},{b:"OLAPLEX", n:"Nº 4 Bond Shampoo", p:1650}].map((p,i) => (
            <div key={i} className="row row--gap8" style={{padding:"8px 0", borderTop: i?"1px solid var(--hm-hairline)":"none"}}>
              <div style={{width:36, height:36, background:"var(--hm-sand)"}}/>
              <div style={{flex:1}}>
                <div className="t-eyebrow" style={{fontSize:9}}>{p.b}</div>
                <div style={{fontSize:12}}>{p.n}</div>
              </div>
              <Price amount={p.p} size={11}/>
            </div>
          ))}
          <button className="btn btn--sm btn--block" style={{marginTop:10}}>Add all to bag · P 7,700</button>
        </div>
      </div>
      <StickyBar>
        <div className="row row--gap8" style={{padding:"2px 4px", border:"1px solid var(--hm-hairline-strong)"}}>
          <button className="reset" style={{padding:10}}><Icons.Camera size={18}/></button>
          <input placeholder="Type a message…" style={{flex:1, border:0, background:"transparent", fontFamily:"var(--font-sans)", fontSize:14, padding:"10px 0", outline:"none"}}/>
          <button className="reset" style={{padding:10}}><Icons.ArrowRight size={18}/></button>
        </div>
      </StickyBar>
    </div>
  );
}

function Bubble({ side, name, children }) {
  const isIn = side === "in";
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: isIn?"flex-start":"flex-end", marginBottom:10, maxWidth:"82%", marginLeft: isIn?0:"auto"}}>
      {name && <div className="t-eyebrow" style={{fontSize:9, marginBottom:4, color:"var(--hm-ink-muted)"}}>{name.toUpperCase()}</div>}
      <div style={{padding:"10px 14px", background: isIn? "var(--hm-paper)" : "var(--hm-ink)", color: isIn? "var(--hm-ink)": "var(--hm-paper)", border: isIn? "1px solid var(--hm-hairline-strong)" : "none", fontSize:13, lineHeight:1.45}}>{children}</div>
    </div>
  );
}

function ScreenStudio({ onNav, tabVariant }) {
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div className="scr-main">
        <div style={{padding:"22px 20px 14px"}}>
          <img src="assets/logo/studio_horizontal_black.png" style={{height:22, marginBottom:14}}/>
          <h1 className="t-display" style={{fontSize:34, lineHeight:1.02}}>
            Two <em>studios,</em><br/>one standard of care.
          </h1>
        </div>
        <div className="hair-strand-divider"/>
        {[
          {n:"01", city:"KAPITOLYO · PASIG", addr:"122 Brixton St., Kapitolyo\nPasig City 1603", hrs:"MON–SAT 0930–1900", phone:"(+63) 908 897 7364", color:"var(--hm-sand)"},
          {n:"02", city:"SERENDRA · BGC", addr:"Unit G-4 Serendra, BGC\nTaguig City 1634", hrs:"TUE–SUN 1000–2000", phone:"(+63) 917 555 8120", color:"var(--hm-lilac)"},
        ].map((s,i) => (
          <div key={i} style={{padding:"24px 20px", borderBottom:"1px solid var(--hm-hairline-strong)"}}>
            <div className="t-index" style={{marginBottom:8}}>{s.n}</div>
            <div className="t-eyebrow" style={{marginBottom:6}}>{s.city}</div>
            <div style={{fontSize:22, fontFamily:"var(--font-display)", marginBottom:14, lineHeight:1.15, whiteSpace:"pre-line"}}>{s.addr}</div>
            <div style={{aspectRatio:"16/9", background:s.color, marginBottom:14, position:"relative"}} className="tint">
              <span className="tint-caption">[ MAP · {s.city.split(" · ")[0]} ]</span>
              <div style={{position:"absolute", top:14, right:14}}>
                <img src="assets/logo/seal_black.png" style={{width:36, height:36}}/>
              </div>
            </div>
            <div className="t-mono" style={{fontSize:11, letterSpacing:"0.08em", marginBottom:4}}>{s.hrs}</div>
            <div className="t-mono" style={{fontSize:11, letterSpacing:"0.08em", color:"var(--hm-ink-muted)", marginBottom:14}}>{s.phone}</div>
            <div className="row row--gap8">
              <button className="btn btn--sm btn--ghost" style={{flex:1, gap:6}}><Icons.Phone size={14}/>Call</button>
              <button className="btn btn--sm btn--ghost" style={{flex:1, gap:6}}><Icons.Pin size={14}/>Directions</button>
              <button className="btn btn--sm" style={{flex:1}}>Book</button>
            </div>
          </div>
        ))}
        <div style={{padding:"20px", background:"var(--hm-blush)"}}>
          <div className="t-eyebrow" style={{marginBottom:6}}>SERVICE MENU</div>
          <div style={{fontSize:18, fontFamily:"var(--font-display)", marginBottom:12}}>Cuts, colour, bonding treatments, keratin smoothing, scalp facials.</div>
          <div className="t-mono" style={{fontSize:11, color:"var(--hm-ink-muted)"}}>FROM P 1,200</div>
        </div>
        <div style={{height:40}}/>
      </div>
      <TabBar active="shop" variant={tabVariant} onSelect={onNav}/>
    </div>
  );
}

function ScreenEditorial({ onNav, onBack, tabVariant }) {
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div className="scr-main">
        <div style={{padding:"20px 20px 0", display:"flex", justifyContent:"space-between"}}>
          <button className="reset" onClick={onBack}><Icons.ChevronLeft size={20}/></button>
          <Icons.Share size={18}/>
        </div>
        <div style={{padding:"18px 20px 0"}}>
          <div className="t-eyebrow" style={{marginBottom:8}}>ISSUE 07 · 23 APR 2026 · 6 MIN READ</div>
          <h1 className="t-display" style={{fontSize:42, lineHeight:1.0, marginBottom:18}}>
            The <em>nine</em><br/>bottles we<br/>reached for<br/>this <em>wet</em> season.
          </h1>
          <div className="row row--gap12" style={{marginBottom:20}}>
            <div style={{width:32, height:32, borderRadius:"50%", background:"var(--hm-peach)"}}/>
            <div>
              <div style={{fontSize:12, fontWeight:500}}>By Camille A., Editor-in-Chief</div>
              <div className="t-mono" style={{fontSize:9, color:"var(--hm-ink-muted)", letterSpacing:"0.08em"}}>PHOTOGRAPHY · MIKA V.</div>
            </div>
          </div>
        </div>
        <div style={{position:"relative", aspectRatio:"4/5", background:"var(--hm-espresso)"}}>
          <div style={{position:"absolute", inset:0, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"cover", opacity:0.14, mixBlendMode:"screen"}}/>
          <div style={{position:"absolute", bottom:14, left:14}} className="t-mono" style={{fontSize:9, color:"rgba(243,235,230,0.6)", letterSpacing:"0.1em"}}>[ HERO · 9 BOTTLES ON TRAVERTINE ]</div>
        </div>
        <div style={{padding:"24px 20px"}}>
          <p style={{fontSize:17, lineHeight:1.55, color:"var(--hm-ink-soft)", marginBottom:20, fontFamily:"var(--font-display)", fontStyle:"italic"}}>Manila humidity is a particular thing. It frizzes the ends, puffs the crown, and steals the memory from a blow-dry by lunch.</p>
          <p style={{fontSize:15, lineHeight:1.65, color:"var(--hm-ink-soft)", marginBottom:16}}>Our editors tested forty-one bottles across two months of Ber-month rain. Nine survived. Here they are, in the order we'd ask you to apply them.</p>
        </div>
        <div className="hair-strand-divider"/>
        {[
          {n:"01", b:"DAVINES", p:"OI Shampoo", note:"A sulfate-free cleanse that doesn't strip.", c:"var(--hm-sand)"},
          {n:"02", b:"K18", p:"Leave-In Molecular Mask", note:"The four-minute bond repair that actually works.", c:"var(--hm-peach)"},
          {n:"03", b:"KÉRASTASE", p:"Sérum Extentioniste", note:"A weightless pre-dry serum for humidity.", c:"var(--hm-lilac)"},
        ].map((it,i) => (
          <button key={i} className="reset" onClick={()=>onNav("pdp")} style={{width:"100%", padding:"20px", borderBottom:"1px solid var(--hm-hairline)", textAlign:"left", display:"flex", gap:16, alignItems:"flex-start"}}>
            <span className="t-index" style={{flexShrink:0, width:20}}>{it.n}</span>
            <div style={{flex:1}}>
              <div className="t-eyebrow" style={{fontSize:9, marginBottom:3}}>{it.b}</div>
              <div style={{fontSize:18, fontFamily:"var(--font-display)", marginBottom:6}}>{it.p}</div>
              <div style={{fontSize:13, color:"var(--hm-ink-soft)"}}>{it.note}</div>
            </div>
            <div style={{width:64, height:80, background:it.c, flexShrink:0}}/>
          </button>
        ))}
        <div style={{padding:"32px 20px 40px", textAlign:"center"}}>
          <div className="t-eyebrow" style={{marginBottom:10}}>SHARE THIS CHAPTER</div>
          <div className="row row--gap12" style={{justifyContent:"center"}}>
            {["COPY","IG","FB","VB"].map((c,i) => <div key={i} className="t-mono" style={{width:40, height:40, border:"1px solid var(--hm-ink)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11}}>{c}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenNotifications({ onNav, tabVariant, onBack }) {
  return (
    <div className="scr scr--paper">
      <MiniStatus/>
      <div style={{padding:"14px 20px", display:"flex", alignItems:"center", gap:12, borderBottom:"1px solid var(--hm-hairline-strong)"}}>
        <button className="reset" onClick={onBack}><Icons.ChevronLeft size={20}/></button>
        <div style={{flex:1}}>
          <div className="t-eyebrow" style={{fontSize:9}}>INBOX · 4 NEW</div>
          <div style={{fontSize:15, fontFamily:"var(--font-display)"}}>Notifications</div>
        </div>
        <button className="reset t-eyebrow-sans">Mark read</button>
      </div>
      <div className="scr-main">
        <div className="t-eyebrow" style={{padding:"14px 20px 8px", color:"var(--hm-ink-muted)"}}>TODAY</div>
        {[
          {p:"02", pk:"NO STRESS TRESSES", title:"Your K18 mask is back in stock 💫", body:"We refilled the shelf — tap to grab yours before it's gone again.", time:"10 M", unread:true},
          {p:"03", pk:"AT THE ROOT", title:"Rica replied to your consultation", body:"\"Try the 4-week cycle I sent — check back with a photo in 14 days.\"", time:"1 H", unread:true},
          {p:"01", pk:"THE REAL DEAL", title:"Order #HM-8842 is out for delivery", body:"Lalamove courier Juanito — ETA 1:40 PM.", time:"2 H", unread:true},
          {p:"02", pk:"NO STRESS TRESSES", title:"Grabe, 20% off na Kérastase today! 🔥", body:"One-day flash on all Hydra-Fondant sizes. Ends 11:59 PM.", time:"5 H", unread:true},
        ].map((n,i) => (
          <div key={i} style={{padding:"14px 20px", borderBottom:"1px solid var(--hm-hairline)", background: n.unread?"var(--hm-blush)":"transparent"}}>
            <div className="row row--sb" style={{marginBottom:4}}>
              <div className="row row--gap8">
                <span className="t-index">{n.p}</span>
                <span className="t-eyebrow" style={{fontSize:9}}>{n.pk}</span>
              </div>
              <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)", letterSpacing:"0.08em"}}>{n.time} AGO</div>
            </div>
            <div style={{fontSize:15, fontFamily:"var(--font-display)", marginBottom:3, lineHeight:1.2}}>{n.title}</div>
            <div style={{fontSize:12, color:"var(--hm-ink-soft)", lineHeight:1.5}}>{n.body}</div>
          </div>
        ))}
        <div className="t-eyebrow" style={{padding:"16px 20px 8px", color:"var(--hm-ink-muted)"}}>EARLIER</div>
        {[
          {p:"01", pk:"THE REAL DEAL", title:"Your 1,200 points expire 30 Apr", body:"Use them on any full-size treatment before they're gone.", time:"2 D"},
          {p:"02", pk:"NO STRESS TRESSES", title:"New chapter: Wet-season care", body:"Nine bottles our editors reached for this Ber-month.", time:"3 D"},
          {p:"03", pk:"AT THE ROOT", title:"Your cart is thinking of you", body:"You left Olaplex Nº 3 behind. It'll still fit in 10 minutes.", time:"5 D"},
        ].map((n,i) => (
          <div key={i} style={{padding:"14px 20px", borderBottom:"1px solid var(--hm-hairline)"}}>
            <div className="row row--sb" style={{marginBottom:4}}>
              <div className="row row--gap8">
                <span className="t-index" style={{color:"var(--hm-ink-subtle)"}}>{n.p}</span>
                <span className="t-eyebrow" style={{fontSize:9, color:"var(--hm-ink-muted)"}}>{n.pk}</span>
              </div>
              <div className="t-mono" style={{fontSize:10, color:"var(--hm-ink-muted)"}}>{n.time} AGO</div>
            </div>
            <div style={{fontSize:14, fontFamily:"var(--font-display)", color:"var(--hm-ink-soft)", lineHeight:1.2}}>{n.title}</div>
            <div style={{fontSize:11, color:"var(--hm-ink-muted)", marginTop:2}}>{n.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Standalone empty-states gallery
function ScreenEmpty({ kind = "wishlist", onNav }) {
  const sets = {
    wishlist: { ey:"YOUR WISHLIST", t:"Nothing saved, <em>yet.</em>", b:"Tap the heart on anything you love. We'll tuck it here for you." },
    orders:   { ey:"YOUR ORDERS", t:"No orders to <em>track.</em>", b:"When you place your first order, you'll see its journey here." },
    search:   { ey:"SEARCH", t:"We didn't find <em>that.</em>", b:"Try a brand name, a concern, or the Hair Quiz." },
    notifs:   { ey:"ALL CAUGHT UP", t:"No new <em>alerts.</em>", b:"We only send what's useful — shipping, replies, and the odd sale." },
    cart:     { ey:"YOUR BAG", t:"Empty, <em>and that's okay.</em>", b:"Everything starts somewhere. Your hair's story, too." },
  };
  const s = sets[kind];
  return (
    <div className="scr scr--blush">
      <MiniStatus/>
      <div className="scr-main" style={{padding:"40px 32px", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <div style={{width:200, height:220, backgroundImage:"url(assets/patterns/hair_strands.png)", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center", opacity:0.25, marginBottom:24}}/>
        <div className="t-eyebrow" style={{marginBottom:10}}>{s.ey}</div>
        <h2 className="t-display" style={{fontSize:32, marginBottom:14, lineHeight:1.05}} dangerouslySetInnerHTML={{__html:s.t}}/>
        <p style={{fontSize:14, color:"var(--hm-ink-soft)", marginBottom:24, maxWidth:"80%"}}>{s.b}</p>
        <button className="btn" onClick={()=>onNav && onNav("home")}>Back to home</button>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenMe, ScreenLoyalty, ScreenChat, ScreenStudio, ScreenEditorial, ScreenNotifications, ScreenEmpty });
