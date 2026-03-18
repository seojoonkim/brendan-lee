"use client";

import { useEffect } from "react";

const GREEN = "#2DD4A0";
const NAVY = "#07111F";
const NAVY2 = "#0C1A2E";
const CARD_BG = "rgba(255,255,255,0.05)";
const CARD_BORDER = "rgba(255,255,255,0.1)";
const TEXT = "#F1F5F9";
const TEXT_MUTED = "#94A3B8";
const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "'Inter', -apple-system, sans-serif";

const experiences = [
  { company: "Crest & Partners", role: "Founding CEO", current: true, desc: "Leading a Seoul-based boutique investment advisory firm specializing in M&A advisory, fundraising, and cross-border transactions for Korean startups and growth-stage companies." },
  { company: "NAVER", role: "Strategic Investment", current: false, desc: "Drove strategic investment initiatives for one of Asia's leading internet companies, identifying and executing high-value investment opportunities." },
  { company: "Jefferies", role: "Equities", current: false, desc: "Executed equity transactions and provided institutional advisory at a premier global investment bank across Asia Pacific markets." },
  { company: "Citigroup", role: "Equities", current: false, desc: "Managed equity operations and client relationships within one of the world's largest financial institutions." },
  { company: "Macquarie", role: "Equity Research", current: false, desc: "Conducted in-depth equity research and analysis covering companies across Asia Pacific markets." },
  { company: "Nomura", role: "Investment Banking", current: false, desc: "Began career in investment banking at Japan's premier securities firm, developing foundational M&A and capital markets expertise." },
];

const expertise = [
  { title: "M&A Advisory", desc: "End-to-end advisory on mergers, acquisitions, and divestitures across diverse sectors and geographies." },
  { title: "Cross-border Transactions", desc: "Navigating complex multi-jurisdictional deals with deep Asia Pacific networks and market expertise." },
  { title: "Fundraising", desc: "Structuring and executing fundraising rounds from Series A through late-stage growth equity." },
  { title: "Equity Capital Markets", desc: "IPO advisory, secondary offerings, and strategic equity market solutions for growth companies." },
  { title: "Asia Pacific Markets", desc: "Deep networks and market intelligence spanning Korea, Japan, Southeast Asia, and Australia." },
  { title: "Strategic Advisory", desc: "High-level strategic counsel to founders, C-suites, and boards navigating complex decisions." },
];

const deals = [
  { name: "G-Enterprise", korean: "지엔터프라이즈", type: "Series C", sector: "Software" },
  { name: "The Maison", korean: "더메종", type: "Sell-side M&A", sector: "E-commerce" },
  { name: "Slaund", korean: "슬라운드", type: "Sell-side M&A", sector: "E-commerce" },
  { name: "Mate Mobility", korean: "메이트모빌리티", type: "Series B", sector: "Consumer Tech" },
];

export default function Home() {
  useEffect(() => {
    const show = () => {
      document.querySelectorAll(".sr").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add("sr-in");
        }
      });
    };
    show();
    window.addEventListener("scroll", show, { passive: true });
    return () => window.removeEventListener("scroll", show);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; font-size:16px; }
        body {
          background:${NAVY};
          color:${TEXT};
          font-family:${SANS};
          -webkit-font-smoothing:antialiased;
          line-height:1.6;
        }

        /* Scroll reveal */
        .sr { opacity:0; transform:translateY(20px); transition:opacity 0.65s ease, transform 0.65s ease; }
        .sr-in { opacity:1; transform:translateY(0); }

        /* Hero animations */
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glow { 0%,100%{opacity:0.15} 50%{opacity:0.3} }
        .a1 { animation:fadeUp 0.9s ease both; }
        .a2 { animation:fadeUp 0.9s 0.15s ease both; }
        .a3 { animation:fadeUp 0.9s 0.3s ease both; }
        .a4 { animation:fadeUp 0.9s 0.45s ease both; }

        /* Nav links */
        .nav-link { color:${TEXT_MUTED}; text-decoration:none; font-size:13px; font-weight:400; letter-spacing:0.06em; transition:color 0.2s; }
        .nav-link:hover { color:${TEXT}; }

        /* Cards */
        .card {
          background:${CARD_BG};
          border:1px solid ${CARD_BORDER};
          border-radius:10px;
          padding:28px 32px;
          transition:border-color 0.25s, box-shadow 0.25s;
        }
        .card:hover {
          border-color:rgba(45,212,160,0.25);
          box-shadow:0 8px 32px rgba(0,0,0,0.3);
        }

        /* Buttons */
        .btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 32px;
          font-family:${SANS};
          font-size:12px; font-weight:600; letter-spacing:0.12em;
          text-transform:uppercase; text-decoration:none;
          border-radius:4px;
          transition:all 0.2s;
          cursor:pointer;
        }
        .btn-primary { background:${GREEN}; color:#07111F; border:1.5px solid ${GREEN}; }
        .btn-primary:hover { background:#25BF90; border-color:#25BF90; }
        .btn-secondary { background:transparent; color:${GREEN}; border:1.5px solid ${GREEN}; }
        .btn-secondary:hover { background:rgba(45,212,160,0.08); }

        /* Green line */
        .g-line { width:40px; height:2px; background:${GREEN}; border-radius:2px; }
        .g-line-center { margin:0 auto; }

        /* Label */
        .label { font-family:${SANS}; font-size:11px; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; color:${GREEN}; }

        /* Scrollbar */
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:${NAVY}; }
        ::-webkit-scrollbar-thumb { background:rgba(45,212,160,0.3); border-radius:4px; }

        @media(max-width:768px) {
          .hide-mob { display:none !important; }
          .col-mob { flex-direction:column !important; }
          .grid-2 { grid-template-columns:1fr !important; }
          .grid-3 { grid-template-columns:1fr !important; }
          .hero-h1 { font-size:3rem !important; }
          .sec { padding:80px 24px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:50,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 48px", height:64,
        background:"rgba(7,17,31,0.92)", backdropFilter:"blur(20px)",
        borderBottom:"1px solid rgba(255,255,255,0.06)",
      }}>
        <span style={{ fontFamily:SERIF, fontSize:22, fontWeight:500, color:TEXT, letterSpacing:"0.05em" }}>
          Brendan Lee
        </span>
        <div className="hide-mob" style={{ display:"flex", gap:36 }}>
          {["About","Experience","Expertise","Deals","Contact"].map(n => (
            <a key={n} className="nav-link" href={`#${n.toLowerCase()}`}>{n}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
        position:"relative", overflow:"hidden",
        background:`radial-gradient(ellipse at 25% 55%, rgba(45,212,160,0.07) 0%, transparent 55%),
                    radial-gradient(ellipse at 75% 25%, rgba(45,212,160,0.04) 0%, transparent 45%),
                    ${NAVY}`,
        paddingTop:64,
      }}>
        <div style={{ position:"absolute", top:"30%", left:"50%", transform:"translateX(-50%)", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(45,212,160,0.06) 0%, transparent 70%)", animation:"glow 5s ease-in-out infinite", pointerEvents:"none" }} />

        <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:800, padding:"0 24px" }}>
          <p className="label a1" style={{ marginBottom:28 }}>Founding CEO · Crest &amp; Partners</p>

          <h1 className="hero-h1 a2" style={{
            fontFamily:SERIF, fontSize:"5rem", fontWeight:400,
            lineHeight:1.08, letterSpacing:"-0.02em", color:TEXT,
            marginBottom:12,
          }}>
            <em style={{ fontStyle:"italic", fontWeight:300 }}>Brendan</em> Lee
          </h1>

          <p className="a2" style={{ fontFamily:SANS, fontSize:13, color:TEXT_MUTED, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:40 }}>
            이민규 &nbsp;·&nbsp; CFA
          </p>

          <div className="g-line g-line-center a3" style={{ marginBottom:36 }} />

          <p className="a3" style={{ fontSize:18, fontWeight:300, color:"#CBD5E1", lineHeight:1.75, maxWidth:520, margin:"0 auto 48px" }}>
            Investment advisory and execution professional<br />across Asia Pacific
          </p>

          <div className="a4" style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#about" className="btn btn-secondary">Learn More</a>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
          <span style={{ fontFamily:SANS, fontSize:10, color:TEXT_MUTED, letterSpacing:"0.2em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:32, background:`linear-gradient(180deg, ${TEXT_MUTED}, transparent)` }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="sec" style={{ padding:"112px 48px", background:NAVY2 }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div className="sr" style={{ marginBottom:56 }}>
            <p className="label" style={{ marginBottom:14 }}>About</p>
            <h2 style={{ fontFamily:SERIF, fontSize:38, fontWeight:400, lineHeight:1.2, color:TEXT, marginBottom:20 }}>
              <em style={{ fontStyle:"italic", fontWeight:300 }}>Building Bridges</em> Across Markets
            </h2>
            <div className="g-line" />
          </div>

          <div className="grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56 }}>
            <div className="sr">
              <p style={{ fontSize:16, lineHeight:1.85, color:"#CBD5E1", marginBottom:20 }}>
                Brendan Lee is the Founding CEO of Crest &amp; Partners, a boutique investment advisory firm headquartered in Gangnam, Seoul. With over a decade of experience spanning global investment banks and leading technology companies, he brings a rare combination of deep financial expertise and strategic vision to every engagement.
              </p>
              <p style={{ fontSize:16, lineHeight:1.85, color:"#CBD5E1" }}>
                His career trajectory — from Nomura&apos;s investment banking division through equity research at Macquarie, equities at Citigroup and Jefferies, and strategic investments at NAVER — has equipped him with an unparalleled understanding of capital markets across Asia Pacific.
              </p>
            </div>
            <div className="sr">
              <p style={{ fontSize:16, lineHeight:1.85, color:"#CBD5E1", marginBottom:32 }}>
                At Crest &amp; Partners, Brendan leads a team dedicated to delivering bespoke advisory services — combining rigorous analytical frameworks with an extensive network across Seoul, Tokyo, Sydney, and key financial centers throughout Asia.
              </p>
              <div style={{ background:"rgba(45,212,160,0.04)", border:"1px solid rgba(45,212,160,0.15)", borderRadius:8, padding:"24px 28px" }}>
                <p className="label" style={{ marginBottom:16, fontSize:10 }}>Credentials</p>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  <div>
                    <span style={{ color:TEXT, fontWeight:600, fontSize:15 }}>CFA</span>
                    <span style={{ color:TEXT_MUTED, fontSize:14 }}> — Chartered Financial Analyst, CFA Institute</span>
                  </div>
                  <div>
                    <span style={{ color:TEXT, fontWeight:600, fontSize:15 }}>University of Sydney</span>
                    <span style={{ color:TEXT_MUTED, fontSize:14 }}> — B. Accounting &amp; Finance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="sec" style={{ padding:"112px 48px", background:NAVY }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div className="sr" style={{ textAlign:"center", marginBottom:64 }}>
            <p className="label" style={{ marginBottom:14 }}>Experience</p>
            <h2 style={{ fontFamily:SERIF, fontSize:38, fontWeight:400, lineHeight:1.2, color:TEXT, marginBottom:20 }}>
              <em style={{ fontStyle:"italic", fontWeight:300 }}>Professional</em> Journey
            </h2>
            <div className="g-line g-line-center" />
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {experiences.map((exp, i) => (
              <div key={i} className="sr card" style={{ display:"flex", gap:28, alignItems:"flex-start" }}>
                <div style={{
                  flexShrink:0, width:40, height:40, borderRadius:"50%",
                  background:"rgba(45,212,160,0.08)", border:"1px solid rgba(45,212,160,0.2)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:GREEN, fontFamily:SANS, fontSize:12, fontWeight:600,
                }}>
                  {String(i + 1).padStart(2,"0")}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:6, flexWrap:"wrap" }}>
                    <h3 style={{ fontFamily:SERIF, fontSize:19, fontWeight:500, color:TEXT }}>{exp.company}</h3>
                    <span style={{ fontFamily:SANS, fontSize:12, color:GREEN, letterSpacing:"0.08em", fontWeight:500 }}>{exp.role}</span>
                    {exp.current && (
                      <span style={{ fontFamily:SANS, fontSize:10, background:"rgba(45,212,160,0.12)", color:GREEN, padding:"2px 10px", borderRadius:20, fontWeight:600, letterSpacing:"0.08em" }}>
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize:14, color:TEXT_MUTED, lineHeight:1.75 }}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section id="expertise" className="sec" style={{ padding:"112px 48px", background:NAVY2 }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div className="sr" style={{ textAlign:"center", marginBottom:64 }}>
            <p className="label" style={{ marginBottom:14 }}>Expertise</p>
            <h2 style={{ fontFamily:SERIF, fontSize:38, fontWeight:400, lineHeight:1.2, color:TEXT, marginBottom:20 }}>
              Areas of <em style={{ fontStyle:"italic", fontWeight:300 }}>Focus</em>
            </h2>
            <div className="g-line g-line-center" />
          </div>

          <div className="grid-3" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20 }}>
            {expertise.map((item, i) => (
              <div key={i} className="sr card">
                <div style={{ width:32, height:2, background:GREEN, borderRadius:2, marginBottom:20 }} />
                <h3 style={{ fontFamily:SERIF, fontSize:17, fontWeight:500, color:TEXT, marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:TEXT_MUTED, lineHeight:1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEALS ── */}
      <section id="deals" className="sec" style={{ padding:"112px 48px", background:NAVY }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div className="sr" style={{ textAlign:"center", marginBottom:64 }}>
            <p className="label" style={{ marginBottom:14 }}>Track Record</p>
            <h2 style={{ fontFamily:SERIF, fontSize:38, fontWeight:400, lineHeight:1.2, color:TEXT, marginBottom:20 }}>
              <em style={{ fontStyle:"italic", fontWeight:300 }}>Selected</em> Deals
            </h2>
            <div className="g-line g-line-center" />
          </div>

          <div className="grid-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, maxWidth:900, margin:"0 auto" }}>
            {deals.map((deal, i) => (
              <div key={i} className="sr card" style={{ display:"flex", gap:20, alignItems:"flex-start" }}>
                <div style={{
                  flexShrink:0, width:44, height:44,
                  background:"rgba(45,212,160,0.06)", border:"1px solid rgba(45,212,160,0.18)",
                  borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
                  color:GREEN, fontFamily:SANS, fontSize:13, fontWeight:600,
                }}>
                  {String(i + 1).padStart(2,"0")}
                </div>
                <div>
                  <h3 style={{ fontFamily:SERIF, fontSize:17, fontWeight:500, color:TEXT, marginBottom:3 }}>{deal.name}</h3>
                  <p style={{ fontSize:12, color:TEXT_MUTED, marginBottom:12 }}>{deal.korean}</p>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
                    <span style={{ fontFamily:SANS, fontSize:11, background:"rgba(45,212,160,0.1)", color:GREEN, padding:"3px 11px", borderRadius:20, fontWeight:600, letterSpacing:"0.04em" }}>{deal.type}</span>
                    <span style={{ fontFamily:SANS, fontSize:11, color:TEXT_MUTED }}>{deal.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="sec" style={{ padding:"112px 48px", background:NAVY2, textAlign:"center" }}>
        <div className="sr" style={{ maxWidth:560, margin:"0 auto" }}>
          <p className="label" style={{ marginBottom:14 }}>Contact</p>
          <h2 style={{ fontFamily:SERIF, fontSize:38, fontWeight:400, lineHeight:1.2, color:TEXT, marginBottom:20 }}>
            Let&apos;s <em style={{ fontStyle:"italic", fontWeight:300 }}>Connect</em>
          </h2>
          <div className="g-line g-line-center" style={{ marginBottom:28 }} />
          <p style={{ fontSize:16, color:"#CBD5E1", lineHeight:1.8, marginBottom:44 }}>
            Interested in exploring strategic opportunities?<br />I&apos;d welcome the conversation.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="mailto:brendan@crestandpartners.com" className="btn btn-primary">Email</a>
            <a href="https://www.linkedin.com/in/brendan-lee-cfa-bb81ba61" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding:"28px 48px", background:NAVY, borderTop:"1px solid rgba(255,255,255,0.06)", textAlign:"center" }}>
        <p style={{ fontFamily:SANS, fontSize:12, color:TEXT_MUTED, letterSpacing:"0.08em" }}>
          © 2026 Brendan Lee &nbsp;·&nbsp; Crest &amp; Partners
        </p>
      </footer>
    </>
  );
}
