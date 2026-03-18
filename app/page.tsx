"use client";

import { useEffect, useRef } from "react";

/* ──────────────────────── Data ──────────────────────── */

const experiences = [
  {
    company: "Crest & Partners",
    role: "Founding CEO",
    period: "Present",
    desc: "Leading a boutique investment advisory firm based in Gangnam, Seoul, providing strategic M&A, fundraising, and cross-border transaction services.",
  },
  {
    company: "NAVER",
    role: "Strategic Investment",
    period: "",
    desc: "Drove strategic investment initiatives for one of Asia's leading internet companies.",
  },
  {
    company: "Jefferies",
    role: "Equities",
    period: "",
    desc: "Executed equity transactions and provided institutional advisory at a premier global investment bank.",
  },
  {
    company: "Citigroup",
    role: "Equities",
    period: "",
    desc: "Managed equity operations within one of the world's largest financial institutions.",
  },
  {
    company: "Macquarie",
    role: "Equity Research",
    period: "",
    desc: "Conducted in-depth equity research and analysis across Asia Pacific markets.",
  },
  {
    company: "Nomura",
    role: "Investment Banking",
    period: "",
    desc: "Began career in investment banking at Japan's premier securities firm.",
  },
];

const expertise = [
  {
    title: "M&A Advisory",
    desc: "End-to-end advisory on mergers, acquisitions, and divestitures across diverse sectors.",
    icon: "⚡",
  },
  {
    title: "Cross-border Transactions",
    desc: "Navigating complex multi-jurisdictional deals with deep Asia Pacific expertise.",
    icon: "🌏",
  },
  {
    title: "Fundraising",
    desc: "Structuring and executing fundraising rounds from Series A through late-stage growth equity.",
    icon: "📈",
  },
  {
    title: "Equity Capital Markets",
    desc: "IPO advisory, secondary offerings, and strategic equity market solutions.",
    icon: "💎",
  },
  {
    title: "Asia Pacific Markets",
    desc: "Deep networks and market intelligence spanning Korea, Japan, Southeast Asia, and Australia.",
    icon: "🗺️",
  },
  {
    title: "Strategic Advisory",
    desc: "Providing high-level strategic counsel to founders, C-suites, and boards of directors.",
    icon: "🎯",
  },
];

const deals = [
  {
    name: "G-Enterprise (지엔터프라이즈)",
    type: "Series C",
    role: "Financial Advisor",
  },
  {
    name: "The Maison (더메종)",
    type: "Sell-side M&A",
    role: "Sell-side Advisor",
  },
  {
    name: "Slaund (슬라운드)",
    type: "Sell-side M&A",
    role: "Sell-side Advisor",
  },
  {
    name: "Mate Mobility (메이트모빌리티)",
    type: "Series B",
    role: "Financial Advisor",
  },
];

/* ──────────────────────── Component ──────────────────────── */

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* ─── Navigation ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          background: "rgba(10, 22, 40, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <span
            className="text-lg font-semibold tracking-wide"
            style={{ color: "#C9A84C" }}
          >
            BL
          </span>
          <div className="hidden md:flex gap-8 text-sm font-light tracking-wider">
            {["About", "Experience", "Expertise", "Deals", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-300 hover:text-[#C9A84C]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="hero-gradient relative flex items-center justify-center min-h-screen px-6 overflow-hidden">
        {/* Subtle animated gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            animation: "pulse 10s ease-in-out infinite reverse",
          }}
        />

        <div className="relative z-10 text-center max-w-[800px]">
          <div className="animate-fade-in-up">
            <p
              className="text-sm md:text-base font-light tracking-[0.3em] uppercase mb-6"
              style={{ color: "#C9A84C" }}
            >
              Founding CEO · Crest & Partners
            </p>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-5xl md:text-7xl font-light tracking-tight mb-6">
            Brendan Lee
            <span
              className="block text-lg md:text-xl font-light mt-3 tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              이민규, CFA
            </span>
          </h1>

          <div className="animate-fade-in-up animation-delay-400">
            <div className="gold-line mx-auto mb-8" />
            <p
              className="text-lg md:text-xl font-light leading-relaxed max-w-[600px] mx-auto"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Experienced investment advisory and execution professional
              <br className="hidden md:block" /> across Asia Pacific
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 border rounded-none"
              style={{
                borderColor: "#C9A84C",
                color: "#C9A84C",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A84C";
                e.currentTarget.style.color = "#0A1628";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C9A84C";
              }}
            >
              LEARN MORE
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300"
              style={{
                background: "#C9A84C",
                color: "#0A1628",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D4B85E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A84C";
              }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div
            className="w-[1px] h-8"
            style={{ background: "rgba(201,168,76,0.4)" }}
          />
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Building Bridges Across Markets
            </h2>
            <div className="gold-line mb-12" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="reveal">
              <p
                className="text-base md:text-lg font-light leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Brendan Lee is the Founding CEO of Crest & Partners, a boutique
                investment advisory firm headquartered in Gangnam, Seoul. With
                over a decade of experience spanning global investment banks and
                leading technology companies, he brings a rare combination of
                deep financial expertise and strategic vision to every
                engagement.
              </p>
              <p
                className="text-base md:text-lg font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                His career trajectory — from Nomura&apos;s investment banking
                division through equity research at Macquarie, equities at
                Citigroup and Jefferies, and strategic investments at NAVER —
                has equipped him with an unparalleled understanding of capital
                markets and corporate strategy across the Asia Pacific region.
              </p>
            </div>

            <div className="reveal">
              <p
                className="text-base md:text-lg font-light leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                At Crest & Partners, Brendan leads a team of seasoned
                professionals dedicated to delivering bespoke advisory services
                in M&A, fundraising, and cross-border transactions. His
                approach combines rigorous analytical frameworks with an
                extensive network cultivated across Seoul, Tokyo, Sydney, and
                key financial centers throughout Asia.
              </p>

              <div
                className="p-6 mt-6"
                style={{
                  background: "rgba(201, 168, 76, 0.05)",
                  border: "1px solid rgba(201, 168, 76, 0.15)",
                }}
              >
                <p
                  className="text-sm tracking-wider mb-2"
                  style={{ color: "#C9A84C" }}
                >
                  CREDENTIALS
                </p>
                <p
                  className="font-light text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <strong className="text-white font-medium">CFA</strong> —
                  Chartered Financial Analyst
                  <br />
                  <strong className="text-white font-medium">
                    University of Sydney
                  </strong>{" "}
                  — B. Accounting & Finance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience Section ─── */}
      <section
        id="experience"
        className="py-24 md:py-32 px-6"
        style={{ background: "rgba(15, 29, 50, 0.5)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Professional Journey
            </h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line - desktop only */}
            <div className="timeline-line hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`reveal relative md:flex md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${i > 0 ? "md:mt-16" : ""}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
                    style={{
                      background: "#C9A84C",
                      boxShadow: "0 0 12px rgba(201, 168, 76, 0.4)",
                    }}
                  />

                  {/* Content card */}
                  <div
                    className={`md:w-[45%] ${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className="p-6 card-hover"
                      style={{
                        background: "rgba(22, 37, 66, 0.6)",
                        border: "1px solid rgba(201, 168, 76, 0.1)",
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3
                          className="text-xl font-medium"
                          style={{ color: "#C9A84C" }}
                        >
                          {exp.company}
                        </h3>
                        {exp.period && (
                          <span
                            className="text-xs tracking-wider px-2 py-1"
                            style={{
                              background: "rgba(201, 168, 76, 0.15)",
                              color: "#C9A84C",
                            }}
                          >
                            {exp.period}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm font-light tracking-wider mb-3"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {exp.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Section ─── */}
      <section id="expertise" className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Areas of Focus
            </h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="reveal card-hover p-8"
                style={{
                  background: "rgba(22, 37, 66, 0.4)",
                  border: "1px solid rgba(201, 168, 76, 0.08)",
                }}
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-medium mb-3 text-white">
                  {item.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Selected Deals Section ─── */}
      <section
        id="deals"
        className="py-24 md:py-32 px-6"
        style={{ background: "rgba(15, 29, 50, 0.5)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              Track Record
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Selected Deals
            </h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {deals.map((deal, i) => (
              <div
                key={i}
                className="reveal card-hover p-8 flex items-start gap-6"
                style={{
                  background: "rgba(22, 37, 66, 0.4)",
                  border: "1px solid rgba(201, 168, 76, 0.08)",
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-lg font-light"
                  style={{
                    background: "rgba(201, 168, 76, 0.1)",
                    color: "#C9A84C",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {deal.name}
                  </h3>
                  <p
                    className="text-sm font-light mb-1"
                    style={{ color: "#C9A84C" }}
                  >
                    {deal.type}
                  </p>
                  <p
                    className="text-xs font-light tracking-wider"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {deal.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="reveal">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Let&apos;s Connect
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p
              className="text-lg font-light max-w-[500px] mx-auto mb-12"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Interested in exploring strategic opportunities? I&apos;d welcome
              the conversation.
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:brendan@crestandpartners.com"
              className="px-10 py-4 text-sm font-medium tracking-wider transition-all duration-300 inline-flex items-center gap-3"
              style={{
                background: "#C9A84C",
                color: "#0A1628",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D4B85E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C9A84C";
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/brendan-lee-cfa/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm font-medium tracking-wider transition-all duration-300 inline-flex items-center gap-3 border"
              style={{
                borderColor: "#C9A84C",
                color: "#C9A84C",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A84C";
                e.currentTarget.style.color = "#0A1628";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C9A84C";
              }}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: "1px solid rgba(201, 168, 76, 0.1)" }}
      >
        <p
          className="text-xs font-light tracking-wider"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          © {new Date().getFullYear()} Brendan Lee. All rights reserved.
        </p>
      </footer>

      {/* Pulse animation keyframe */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
      `}</style>
    </main>
  );
}
