/* HairMNL mobile — shared UI components and icons.
   Thin-stroke Phosphor-adjacent icons; brand seals as <img>. */

// ———————— Icons (Phosphor-style thin stroke 1.25px, 24px base) ————————
const Icon = ({ d, size = 22, stroke = 1.4, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {typeof d === "string" ? <path d={d} /> : d}
  </svg>
);

const Icons = {
  Home: (p) => <Icon {...p} d={<>
    <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>
  </>}/>,
  Shop: (p) => <Icon {...p} d={<>
    <path d="M4 8h16l-1.2 11.2a1 1 0 0 1-1 .8H6.2a1 1 0 0 1-1-.8z"/>
    <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
  </>}/>,
  Award: (p) => <Icon {...p} d={<>
    <circle cx="12" cy="9" r="5"/>
    <path d="M9 13l-2 8 5-3 5 3-2-8"/>
  </>}/>,
  User: (p) => <Icon {...p} d={<>
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6"/>
  </>}/>,
  Chat: (p) => <Icon {...p} d={<>
    <path d="M4 5h16v11H9l-5 4V5z"/>
  </>}/>,
  Search: (p) => <Icon {...p} d={<>
    <circle cx="11" cy="11" r="6"/>
    <path d="M20 20l-4.5-4.5"/>
  </>}/>,
  Bell: (p) => <Icon {...p} d={<>
    <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/>
    <path d="M10 20a2 2 0 0 0 4 0"/>
  </>}/>,
  Heart: (p) => <Icon {...p} d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>,
  HeartFill: (p) => <Icon {...p} stroke={0} d={<>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" fill="currentColor"/>
  </>}/>,
  Bag: (p) => <Icon {...p} d={<>
    <path d="M5 8h14l-1 12H6z"/>
    <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
  </>}/>,
  ChevronLeft: (p) => <Icon {...p} d="M15 5l-7 7 7 7"/>,
  ChevronRight: (p) => <Icon {...p} d="M9 5l7 7-7 7"/>,
  ChevronDown: (p) => <Icon {...p} d="M5 9l7 7 7-7"/>,
  ChevronUp: (p) => <Icon {...p} d="M5 15l7-7 7 7"/>,
  Close: (p) => <Icon {...p} d="M6 6l12 12M18 6L6 18"/>,
  Plus: (p) => <Icon {...p} d="M12 5v14M5 12h14"/>,
  Minus: (p) => <Icon {...p} d="M5 12h14"/>,
  Check: (p) => <Icon {...p} d="M4 12l5 5L20 6"/>,
  Filter: (p) => <Icon {...p} d={<>
    <path d="M3 5h18l-7 8v6l-4-2v-4z"/>
  </>}/>,
  Sort: (p) => <Icon {...p} d={<>
    <path d="M4 7h10M4 12h7M4 17h4"/>
    <path d="M17 7v11M17 18l3-3M17 18l-3-3"/>
  </>}/>,
  Camera: (p) => <Icon {...p} d={<>
    <path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/>
    <circle cx="12" cy="13" r="3.5"/>
  </>}/>,
  Mic: (p) => <Icon {...p} d={<>
    <rect x="9" y="3" width="6" height="11" rx="3"/>
    <path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>
  </>}/>,
  Barcode: (p) => <Icon {...p} d={<>
    <path d="M4 6v12M7 6v12M10 6v12M13 6v12M16 6v12M20 6v12"/>
  </>}/>,
  Pin: (p) => <Icon {...p} d={<>
    <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </>}/>,
  Phone: (p) => <Icon {...p} d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>,
  Share: (p) => <Icon {...p} d={<>
    <circle cx="6" cy="12" r="2.5"/>
    <circle cx="18" cy="6" r="2.5"/>
    <circle cx="18" cy="18" r="2.5"/>
    <path d="M8 11l8-4M8 13l8 4"/>
  </>}/>,
  Box: (p) => <Icon {...p} d={<>
    <path d="M4 7l8-4 8 4v10l-8 4-8-4z"/>
    <path d="M4 7l8 4 8-4M12 11v10"/>
  </>}/>,
  Truck: (p) => <Icon {...p} d={<>
    <path d="M3 7h10v10H3zM13 10h4l3 3v4h-7z"/>
    <circle cx="7" cy="18" r="2"/>
    <circle cx="17" cy="18" r="2"/>
  </>}/>,
  Calendar: (p) => <Icon {...p} d={<>
    <rect x="4" y="5" width="16" height="15" rx="1"/>
    <path d="M4 10h16M9 3v4M15 3v4"/>
  </>}/>,
  Settings: (p) => <Icon {...p} d={<>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
  </>}/>,
  ArrowRight: (p) => <Icon {...p} d="M5 12h14M13 6l6 6-6 6"/>,
  ArrowLeft: (p) => <Icon {...p} d="M19 12H5M11 6l-6 6 6 6"/>,
  Info: (p) => <Icon {...p} d={<>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8h.01M11 12h1v5h1"/>
  </>}/>,
  Globe: (p) => <Icon {...p} d={<>
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18M12 3a13 13 0 0 1 0 18A13 13 0 0 1 12 3z"/>
  </>}/>,
};

// ———————— Bottom tab bar with style variants ————————
function TabBar({ active = "home", variant = "serifmark", onSelect = () => {} }) {
  const items = [
    { id: "home", label: "Home", Ic: Icons.Home },
    { id: "shop", label: "Shop", Ic: Icons.Shop },
    { id: "rewards", label: "Rewards", Ic: Icons.Award },
    { id: "me", label: "Me", Ic: Icons.User },
    { id: "chat", label: "Chat", Ic: Icons.Chat },
  ];
  return (
    <div className={`tabbar tabbar--${variant}`}>
      {items.map(({id, label, Ic}) => {
        const isA = id === active;
        return (
          <button key={id} className={`tabbar__item reset ${isA ? "tabbar__item--active" : ""}`} onClick={()=>onSelect(id)}>
            <Ic size={22} stroke={isA ? 1.6 : 1.3}/>
            <span className="tabbar__label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ———————— App header (big serif title with eyebrow) ————————
function AppHeader({ eyebrow, title, trailing, back, onBack }) {
  return (
    <div style={{padding: "6px 20px 14px", flex: "0 0 auto"}}>
      <div className="row row--sb" style={{minHeight:32}}>
        {back ? (
          <button className="reset" onClick={onBack} style={{display:"flex", alignItems:"center", gap:6}}>
            <Icons.ChevronLeft size={20}/>
            <span className="t-eyebrow-sans">Back</span>
          </button>
        ) : <div/>}
        {trailing}
      </div>
      {eyebrow && <div className="t-eyebrow" style={{marginTop:6}}>{eyebrow}</div>}
      {title && <h1 className="t-display" style={{fontSize:32, margin:"6px 0 0", lineHeight:1.04}}
         dangerouslySetInnerHTML={{__html: title}}/>}
    </div>
  );
}

// ———————— Tint block stand-in for photography ————————
function TintTile({ color = "var(--hm-sand)", caption, ratio = "4/3", children, style = {} }) {
  return (
    <div className="tint" style={{aspectRatio: ratio, background: color, ...style}}>
      {children || <span className="tint-caption">{caption}</span>}
    </div>
  );
}

// ———————— Brand seal (circular) ————————
function Seal({ src, size = 44, alt = "" }) {
  return <img src={src} alt={alt} style={{width:size, height:size, borderRadius:"50%", display:"block", objectFit:"cover"}}/>;
}

// ———————— Ribbon (product-tile corner stamp) ————————
function Ribbon({ kind = "best", children }) {
  return <span className={`ribbon ribbon--${kind}`}>{children}</span>;
}

// ———————— Mono section index ————————
function SectionIndex({ num, title, trailing }) {
  return (
    <div className="row row--sb" style={{padding:"22px 20px 12px"}}>
      <div className="row row--gap12">
        <span className="t-index">{num}</span>
        <span className="t-eyebrow-sans">{title}</span>
      </div>
      {trailing}
    </div>
  );
}

// ———————— Sticky bottom bar (ATC, checkout) ————————
function StickyBar({ children }) {
  return (
    <div style={{
      flex: "0 0 auto",
      background: "var(--hm-paper)",
      borderTop: "1px solid var(--hm-hairline-strong)",
      padding: "14px 20px 18px",
    }}>{children}</div>
  );
}

// ———————— Quantity stepper ————————
function QtyStepper({ value = 1, onChange = () => {}, min = 1, max = 10 }) {
  return (
    <div style={{display:"inline-flex", alignItems:"center", border:"1px solid var(--hm-ink)"}}>
      <button className="reset" onClick={()=>onChange(Math.max(min, value-1))} style={{width:38, height:38, display:"flex", alignItems:"center", justifyContent:"center"}}><Icons.Minus size={14}/></button>
      <div style={{width:30, textAlign:"center", fontFamily:"var(--font-mono)", fontSize:13}}>{value}</div>
      <button className="reset" onClick={()=>onChange(Math.min(max, value+1))} style={{width:38, height:38, display:"flex", alignItems:"center", justifyContent:"center"}}><Icons.Plus size={14}/></button>
    </div>
  );
}

// ———————— Price (peso with mono decoration) ————————
function Price({ amount, size = 16, strike, color }) {
  const fmt = (n) => "P " + n.toLocaleString('en-PH', {minimumFractionDigits:0});
  return (
    <span style={{fontFamily:"var(--font-mono)", fontSize: size, color: color || "var(--hm-ink)"}}>
      {strike && <span style={{textDecoration:"line-through", color:"var(--hm-ink-muted)", marginRight:6}}>{fmt(strike)}</span>}
      {fmt(amount)}
    </span>
  );
}

// ———————— Status bar — device frames already render one, so no-op here ————————
function MiniStatus() { return null; }

Object.assign(window, {
  Icon, Icons, TabBar, AppHeader, TintTile, Seal, Ribbon,
  SectionIndex, StickyBar, QtyStepper, Price, MiniStatus,
});
