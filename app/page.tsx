"use client";

import { useEffect } from "react";

const GOLD = "#2DD4A0";      // Emerald green accent
const NAVY = "#0A1628";      // Deep navy background
const NAVY2 = "#0D1F3C";     // Slightly lighter navy

const experiences = [
  { company: "Crest & Partners", role: "Founding CEO", period: "Current", desc: "Leading a Seoul-based boutique investment advisory firm specializing in M&A, fundraising, and cross-border transactions for Korean startups and growth-stage companies." },
  { company: "NAVER", role: "Strategic Investment", period: "Prior", desc: "Drove strategic investment initiatives for one of Asia's leading internet companies, identifying and executing high-value investment opportunities." },
  { company: "Jefferies", role: "Equities", period: "Prior", desc: "Executed equity transactions and provided institutional advisory at a premier global investment bank across Asia Pacific markets." },
  { company: "Citigroup", role: "Equities", period: "Prior", desc: "Managed equity operations and client relationships within one of the world's largest financial institutions." },
  { company: "Macquarie", role: "Equity Research", period: "Prior", desc: "Conducted in-depth equity research and analysis covering companies across Asia Pacific markets." },
  { company: "Nomura", role: "Investment Banking", period: "Prior", desc: "Began career in investment banking at Japan's premier securities firm, developing foundational M&A and capital markets expertise." },
];

const expertise = [
  { title: "M&A Advisory", desc: "End-to-end advisory on mergers, acquisitions, and divestitures across diverse sectors and geographies.", icon: "◈" },
  { title: "Cross-border Transactions", desc: "Navigating complex multi-jurisdictional deals with deep Asia Pacific networks and market expertise.", icon: "◉" },
  { title: "Fundraising", desc: "Structuring and executing fundraising rounds from Series A through late-stage growth equity.", icon: "◎" },
  { title: "Equity Capital Markets", desc: "IPO advisory, secondary offerings, and strategic equity market solutions for growth companies.", icon: "◆" },
  { title: "Asia Pacific Markets", desc: "Deep networks and market intelligence spanning Korea, Japan, Southeast Asia, and Australia.", icon: "◐" },
  { title: "Strategic Advisory", desc: "High-level strategic counsel to founders, C-suites, and boards navigating complex decisions.", icon: "◇" },
];

const deals = [
  { name: "G-Enterprise", korean: "지엔터프라이즈", type: "Series C", role: "Financial Advisor", sector: "Software" },
  { name: "The Maison", korean: "더메종", type: "Sell-side M&A", role: "Sell-side Advisor", sector: "E-commerce" },
  { name: "Slaund", korean: "슬라운드", type: "Sell-side M&A", role: "Sell-side Advisor", sector: "E-commerce" },
  { name: "Mate Mobility", korean: "메이트모빌리티", type: "Series B", role: "Financial Advisor", sector: "Consumer Tech" },
];

export default function Home() {
  useEffect(() => {
    // Simple scroll reveal
    const handleScroll = () => {
      document.querySelectorAll(".sr").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("sr-visible");
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${NAVY}; color: #fff; font-family: 'Cormorant Garamond', 'Inter', Georgia, serif; -webkit-font-smoothing: antialiased; }
        h1, h2, h3 { font-family: 'Playfair Display', 'Georgia', serif; }
        nav, .nav-font, .label-font, .btn-outline, .btn-filled, .tag { font-family: 'Inter', -apple-system, sans-serif; }
        
        .sr { opacity: 1; transform: translateY(0); transition: opacity 0.7s ease, transform 0.7s ease; }
        .sr-visible { opacity: 1; transform: translateY(0); }
        
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        
        .hero-title { animation: fadeUp 1s ease forwards; }
        .hero-sub { animation: fadeUp 1s 0.2s ease both; }
        .hero-desc { animation: fadeUp 1s 0.4s ease both; }
        .hero-btns { animation: fadeUp 1s 0.6s ease both; }
        
        .gold-line { width: 48px; height: 2px; background: linear-gradient(90deg, ${GOLD}, transparent); }
        
        nav a:hover { color: ${GOLD} !important; }
        
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 32px; transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(201,168,76,0.12); border-color: rgba(201,168,76,0.2); }
        
        .btn-outline { border: 1px solid ${GOLD}; color: ${GOLD}; padding: 14px 36px; font-size: 13px; font-weight: 500; letter-spacing: 0.15em; text-decoration: none; transition: all 0.3s; display: inline-block; }
        .btn-outline:hover { background: ${GOLD}; color: ${NAVY}; }
        .btn-filled { background: ${GOLD}; color: ${NAVY}; padding: 14px 36px; font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-decoration: none; transition: all 0.3s; display: inline-block; }
        .btn-filled:hover { background: #25BF90; }
        
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${NAVY}; }
        ::-webkit-scrollbar-thumb { background: ${GOLD}; border-radius: 4px; }
        
        @media (max-width: 768px) {
          .hero-name { font-size: 3rem !important; }
          .mobile-col { flex-direction: column !important; }
          .mobile-hide { display: none !important; }
          .mobile-full { width: 100% !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "20px 48px", background: "rgba(10,22,40,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: GOLD, fontSize: 20, fontWeight: 700, letterSpacing: "0.15em" }}>BL</span>
        <div className="mobile-hide" style={{ display: "flex", gap: 40 }}>
          {["About", "Experience", "Expertise", "Deals", "Contact"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, fontWeight: 400, letterSpacing: "0.08em", transition: "color 0.2s" }}>{n}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 40%), ${NAVY}` }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(201,168,76,0.05) 0%, transparent 60%)", animation: "pulse 6s ease-in-out infinite" }} />
        
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 900, padding: "0 24px" }}>
          <p className="hero-sub" style={{ color: GOLD, fontSize: 12, fontWeight: 500, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 32 }}>
            Founding CEO · Crest & Partners
          </p>
          
          <h1 className="hero-name hero-title" style={{ fontSize: "5.5rem", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 16, fontFamily: "'Playfair Display', serif" }}>
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>Brendan</span>{" "}Lee
          </h1>
          <p className="hero-title label-font" style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.45)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 40 }}>
            이민규 &nbsp;·&nbsp; CFA
          </p>
          
          <div style={{ width: 48, height: 1, background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, margin: "0 auto 32px" }} />
          
          <p className="hero-desc" style={{ fontSize: 20, fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 48px" }}>
            Investment advisory and execution professional<br />across Asia Pacific
          </p>
          
          <div className="hero-btns mobile-col" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#about" className="btn-outline">LEARN MORE</a>
            <a href="#contact" className="btn-filled">GET IN TOUCH</a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 1, height: 48, background: `linear-gradient(180deg, transparent, ${GOLD})`, animation: "pulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 48px", background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 64 }}>
            <p style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>About</p>
            <h2 style={{ fontSize: 44, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 20, fontFamily: "'Playfair Display', serif" }}><em style={{ fontStyle: "italic", fontWeight: 300 }}>Building Bridges</em> Across Markets</h2>
            <div className="gold-line" />
          </div>

          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div className="sr">
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
                Brendan Lee is the Founding CEO of Crest & Partners, a boutique investment advisory firm headquartered in Gangnam, Seoul. With over a decade of experience spanning global investment banks and leading technology companies, he brings a rare combination of deep financial expertise and strategic vision to every engagement.
              </p>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                His career trajectory — from Nomura&apos;s investment banking division through equity research at Macquarie, equities at Citigroup and Jefferies, and strategic investments at NAVER — has equipped him with an unparalleled understanding of capital markets across Asia Pacific.
              </p>
            </div>
            <div className="sr">
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>
                At Crest &amp; Partners, Brendan leads a team of seasoned professionals dedicated to delivering bespoke advisory services in M&amp;A, fundraising, and cross-border transactions — combining rigorous analytical frameworks with an extensive network across Seoul, Tokyo, Sydney, and key financial centers throughout Asia.
              </p>
              <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 8, padding: "28px 32px" }}>
                <p style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>Credentials</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>CFA</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 300 }}> — Chartered Financial Analyst, CFA Institute</span>
                  </div>
                  <div>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>University of Sydney</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 300 }}> — B. Accounting &amp; Finance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "120px 48px", background: NAVY2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Experience</p>
            <h2 style={{ fontSize: 44, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 20, fontFamily: "'Playfair Display', serif" }}><em style={{ fontStyle: "italic", fontWeight: 300 }}>Professional</em> Journey</h2>
            <div className="gold-line" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {experiences.map((exp, i) => (
              <div key={i} className="sr card" style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: `1px solid rgba(201,168,76,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontSize: 14, fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>{exp.company}</h3>
                    <span style={{ fontSize: 13, fontWeight: 400, color: GOLD, letterSpacing: "0.1em" }}>{exp.role}</span>
                    {exp.period === "Current" && <span style={{ fontSize: 11, background: "rgba(201,168,76,0.15)", color: GOLD, padding: "3px 10px", borderRadius: 20, fontWeight: 500, letterSpacing: "0.05em" }}>CURRENT</span>}
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" style={{ padding: "120px 48px", background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Expertise</p>
            <h2 style={{ fontSize: 44, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 20, fontFamily: "'Playfair Display', serif" }}>Areas of <em style={{ fontStyle: "italic", fontWeight: 300 }}>Focus</em></h2>
            <div className="gold-line" style={{ margin: "0 auto" }} />
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {expertise.map((item, i) => (
              <div key={i} className="sr card">
                <div style={{ fontSize: 28, marginBottom: 20, color: GOLD }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section id="deals" style={{ padding: "120px 48px", background: NAVY2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Track Record</p>
            <h2 style={{ fontSize: 44, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 20, fontFamily: "'Playfair Display', serif" }}><em style={{ fontStyle: "italic", fontWeight: 300 }}>Selected</em> Deals</h2>
            <div className="gold-line" style={{ margin: "0 auto" }} />
          </div>

          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            {deals.map((deal, i) => (
              <div key={i} className="sr card" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, background: "rgba(201,168,76,0.08)", border: `1px solid rgba(201,168,76,0.25)`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontSize: 16, fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{deal.name}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>{deal.korean}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, background: "rgba(201,168,76,0.1)", color: GOLD, padding: "4px 12px", borderRadius: 20, fontWeight: 500 }}>{deal.type}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", padding: "4px 0" }}>{deal.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "120px 48px", background: NAVY, textAlign: "center" }}>
        <div className="sr" style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
          <h2 style={{ fontSize: 44, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 20, fontFamily: "'Playfair Display', serif" }}>Let&apos;s <em style={{ fontStyle: "italic", fontWeight: 300 }}>Connect</em></h2>
          <div className="gold-line" style={{ margin: "0 auto 32px" }} />
          <p style={{ fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: 48 }}>
            Interested in exploring strategic opportunities?<br />I&apos;d welcome the conversation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:brendan@crestandpartners.com" className="btn-filled">EMAIL</a>
            <a href="https://www.linkedin.com/in/brendan-lee-cfa-bb81ba61" target="_blank" rel="noopener noreferrer" className="btn-outline">LINKEDIN</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", background: "#050D1A", borderTop: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, fontWeight: 300, letterSpacing: "0.1em" }}>© 2026 Brendan Lee · Crest & Partners</p>
      </footer>
    </>
  );
}
