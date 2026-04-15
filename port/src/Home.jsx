import React, { useEffect } from "react";
import "./App.css";

const Home = () => {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    let mx = 0,
      my = 0;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    });
    setInterval(() => {
      ring.style.left = mx + "px";
      ring.style.top = my + "px";
    }, 60);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%,-50%) scale(2)";
        ring.style.width = ring.style.height = "56px";
        ring.style.marginLeft = ring.style.marginTop = "-10px";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%,-50%) scale(1)";
        ring.style.width = ring.style.height = "36px";
        ring.style.marginLeft = ring.style.marginTop = "0";
      });
    });

    // Scrolled nav
    const navInner = document.getElementById("navInner");
    window.addEventListener("scroll", () => {
      navInner.classList.toggle("scrolled", window.scrollY > 60);
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => io.observe(el));
  }, []);

  return (
    <div>
      {/* Custom cursor */}
      <div id="cursor"></div>
      <div id="cursor-ring"></div>

      {/* ─── NAV ─────────────────────────────────────────── */}
      <nav>
        <div className="nav-inner" id="navInner">
          <span
            className="font-serif text-xl tracking-widest text-parch"
            style={{ letterSpacing: ".2em" }}
          >
            YN
          </span>
          <div className="flex gap-10">
            <a
              href="#work"
              className="font-mono text-xs tracking-widest text-muted hover:text-gold transition-colors uppercase"
            >
              Work
            </a>
            <a
              href="#tools"
              className="font-mono text-xs tracking-widest text-muted hover:text-gold transition-colors uppercase"
            >
              Tools
            </a>
            <a
              href="#about"
              className="font-mono text-xs tracking-widest text-muted hover:text-gold transition-colors uppercase"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest text-muted hover:text-gold transition-colors uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-28 pt-24 pb-16 relative overflow-hidden">
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(201,169,110,0.06) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        ></div>

        <div className="max-w-5xl">
          <p
            className="fade-up font-mono text-xs tracking-widest text-gold uppercase mb-6"
            style={{ letterSpacing: ".25em" }}
          >
            Graphic Designer & UI/UX
          </p>
          <h1
            className="fade-up delay-1 font-serif font-light leading-none mb-8"
            style={{ fontSize: "clamp(3.5rem,10vw,8rem)", lineHeight: ".95" }}
          >
            Tofik
            <br />
            <em style={{ color: "#c9a96e" }}> Chouhan</em>
            <br />
          </h1>
          <p
            className="fade-up delay-2 font-sans font-light text-muted max-w-md leading-relaxed mb-12"
            style={{ fontSize: "1.05rem" }}
          >
            I am a Graphic Designer & UI/UX Designer creating identities,
            interfaces, and experiences that are both visually appealing and
            purpose-driven.
          </p>
          <div className="fade-up delay-3 flex items-center gap-8">
            <a
              href="#work"
              className="font-mono text-xs tracking-widest uppercase text-parch border border-border px-7 py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 fade-in delay-5">
          <span
            className="font-mono text-xs text-muted tracking-widest"
            style={{ writingMode: "vertical-rl", letterSpacing: ".2em" }}
          >
            scroll
          </span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ─── MARQUEE ────────────────────────────────────────── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span
            className="font-serif italic text-muted text-2xl px-8"
            style={{ whiteSpace: "nowrap" }}
          >
            Graphic Design &nbsp;·&nbsp; UI/UX &nbsp;·&nbsp; &nbsp;·&nbsp; Print
            Design &nbsp;·&nbsp; Digital Art &nbsp;·&nbsp; Illustration
            &nbsp;·&nbsp; Motion &nbsp;·&nbsp;
          </span>
          <span
            className="font-serif italic text-muted text-2xl px-8"
            style={{ whiteSpace: "nowrap" }}
          >
            Graphic Design &nbsp;·&nbsp; UI/UX &nbsp;·&nbsp; Brand Identity
            &nbsp;·&nbsp; Visual Storytelling &nbsp;·&nbsp; Print Design
            &nbsp;·&nbsp; Digital Art &nbsp;·&nbsp; Illustration &nbsp;·&nbsp;
            Motion &nbsp;·&nbsp; Typography &nbsp;·&nbsp;
          </span>
        </div>
      </div>

      {/* ─── STATS ──────────────────────────────────────────── */}
      <section className="px-8 md:px-16 lg:px-28 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          <div className="reveal text-center">
            <div className="big-stat">
              20<span style={{ color: "#c9a96e" }}>+</span>
            </div>
            <p className="font-mono text-xs text-muted tracking-widest mt-3 uppercase">
              Projects Done
            </p>
          </div>
          <div
            className="reveal text-center"
            style={{ transitionDelay: ".1s" }}
          >
            <div className="big-stat">4</div>
            <p className="font-mono text-xs text-muted tracking-widest mt-3 uppercase">
              Tools Mastered
            </p>
          </div>
          <div
            className="reveal text-center"
            style={{ transitionDelay: ".2s" }}
          >
            <div className="big-stat">∞</div>
            <p className="font-mono text-xs text-muted tracking-widest mt-3 uppercase">
              Creative Ideas
            </p>
          </div>
        </div>
      </section>

      <hr className="fancy mx-8 md:mx-16 lg:mx-28" />

      {/* ─── TOOLS ──────────────────────────────────────────── */}
      <section id="tools" className="px-8 md:px-16 lg:px-28 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="section-rule reveal">
            <span
              className="font-mono text-xs tracking-widest text-gold uppercase"
              style={{ letterSpacing: ".2em" }}
            >
              Tools & Software
            </span>
          </div>
          <h2
            className="reveal font-serif font-light text-4xl md:text-5xl mb-16"
            style={{ lineHeight: "1.1" }}
          >
            The instruments
            <br />
            <em>of my craft.</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Photoshop */}
            <div
              className="tool-card reveal"
              style={{ transitionDelay: ".05s" }}
            >
              <div
                className="w-10 h-10 mb-5 flex items-center justify-center"
                style={{
                  background: "rgba(49,119,185,0.15)",
                  borderRadius: "4px",
                }}
              >
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "#3177b9" }}
                >
                  Ps
                </span>
              </div>
              <p className="font-serif text-lg text-parch mb-1">Photoshop</p>
              <p className="font-mono text-xs text-muted leading-relaxed">
                Photo editing, compositing, digital artwork & retouching
              </p>
            </div>
            {/* CorelDRAW */}
            <div
              className="tool-card reveal"
              style={{ transitionDelay: ".1s" }}
            >
              <div
                className="w-10 h-10 mb-5 flex items-center justify-center"
                style={{
                  background: "rgba(34,161,110,0.15)",
                  borderRadius: "4px",
                }}
              >
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "#22a16e" }}
                >
                  Cdr
                </span>
              </div>
              <p className="font-serif text-lg text-parch mb-1">CorelDRAW</p>
              <p className="font-mono text-xs text-muted leading-relaxed">
                Vector illustrations, logos, technical drawing & layout
              </p>
            </div>
            {/* Illustrator */}
            <div
              className="tool-card reveal"
              style={{ transitionDelay: ".15s" }}
            >
              <div
                className="w-10 h-10 mb-5 flex items-center justify-center"
                style={{
                  background: "rgba(255,122,0,0.15)",
                  borderRadius: "4px",
                }}
              >
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "#ff7a00" }}
                >
                  Ai
                </span>
              </div>
              <p className="font-serif text-lg text-parch mb-1">Illustrator</p>
              <p className="font-mono text-xs text-muted leading-relaxed">
                Brand identity, icon systems, scalable vector design
              </p>
            </div>
            {/* Figma */}
            <div
              className="tool-card reveal"
              style={{ transitionDelay: ".2s" }}
            >
              <div
                className="w-10 h-10 mb-5 flex items-center justify-center"
                style={{
                  background: "rgba(162,89,255,0.15)",
                  borderRadius: "4px",
                }}
              >
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "#a259ff" }}
                >
                  Fig
                </span>
              </div>
              <p className="font-serif text-lg text-parch mb-1">Figma</p>
              <p className="font-mono text-xs text-muted leading-relaxed">
                UI/UX design, wireframes, components & prototypes
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="fancy mx-8 md:mx-16 lg:mx-28" />

      {/* ─── WORK ───────────────────────────────────────────── */}
      <section id="work" className="px-8 md:px-16 lg:px-28 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="section-rule reveal">
            <span
              className="font-mono text-xs tracking-widest text-gold uppercase"
              style={{ letterSpacing: ".2em" }}
            >
              Selected Work
            </span>
          </div>
          <h2
            className="reveal font-serif font-light text-4xl md:text-5xl mb-16"
            style={{ lineHeight: "1.1" }}
          >
            Projects that
            <br />
            <em>speak for themselves.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="proj-card reveal">
              <div
                className="proj-thumb"
                style={{
                  background: "linear-gradient(135deg,#1a1030 0%,#2d1f60 100%)",
                }}
              >
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <rect
                    x="10"
                    y="10"
                    width="22"
                    height="30"
                    rx="3"
                    fill="#7F77DD"
                    opacity=".9"
                  />
                  <rect
                    x="38"
                    y="10"
                    width="24"
                    height="14"
                    rx="3"
                    fill="#AFA9EC"
                    opacity=".7"
                  />
                  <rect
                    x="38"
                    y="30"
                    width="24"
                    height="10"
                    rx="3"
                    fill="#7F77DD"
                    opacity=".5"
                  />
                  <rect
                    x="10"
                    y="48"
                    width="52"
                    height="14"
                    rx="3"
                    fill="#AFA9EC"
                    opacity=".3"
                  />
                </svg>
                <div
                  className="proj-thumb-overlay"
                  style={{ background: "rgba(26,16,48,0.7)" }}
                >
                  <span className="font-mono text-xs tracking-widest text-gold uppercase">
                    <a href="https://drive.google.com/drive/folders/1wzrsYATtnnT6neGmnBAi7w9Q4qAyhK7O">
                      View All Projects
                    </a>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="font-mono text-xs text-muted">
                  01 — Graphic Design
                </span>
                <h3 className="font-serif text-xl text-parch mt-1 mb-2">
                  Modern Poster Redesign Collection
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  A curated set of redesigned posters focusing on visual
                  hierarchy, typography, and modern aesthetics to enhance
                  audience engagement.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="proj-card reveal"
              style={{ transitionDelay: ".07s" }}
            >
              <div
                className="proj-thumb"
                style={{
                  background: "linear-gradient(135deg,#0d2218 0%,#103a28 100%)",
                }}
              >
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <circle cx="36" cy="36" r="26" fill="#1D9E75" opacity=".25" />
                  <circle cx="36" cy="36" r="18" fill="#1D9E75" opacity=".5" />
                  <circle cx="36" cy="36" r="10" fill="#5DCAA5" />
                  <text
                    x="36"
                    y="40"
                    textAnchor="middle"
                    fill="white"
                    fontSize="9"
                    fontFamily="serif"
                  >
                    MARK
                  </text>
                </svg>
                <div
                  className="proj-thumb-overlay"
                  style={{ background: "rgba(13,34,24,0.7)" }}
                >
                  <span className="font-mono text-xs tracking-widest text-gold uppercase">
                    <a href="https://drive.google.com/drive/folders/1eB5EffoUXrBbhE3a8KupWhckjF0OWzn4">
                      View All Projects
                    </a>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="font-mono text-xs text-muted">
                  02 — Figma / UI Design
                </span>
                <h3 className="font-serif text-xl text-parch mt-1 mb-2">
                  Complete Brand Identity System
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Designed cohesive brand identities including logos, color
                  systems, typography, and UI elements to create consistent
                  digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="fancy mx-8 md:mx-16 lg:mx-28" />

      {/* ─── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="px-8 md:px-16 lg:px-28 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-rule reveal">
              <span
                className="font-mono text-xs tracking-widest text-gold uppercase"
                style={{ letterSpacing: ".2em" }}
              >
                About Me
              </span>
            </div>
            <h2
              className="reveal font-serif font-light text-4xl md:text-5xl mb-8"
              style={{ lineHeight: "1.1" }}
            >
              Design is how
              <br />
              <em>I think.</em>
            </h2>
            <p
              className="reveal font-sans font-light text-muted leading-relaxed mb-5"
              style={{ fontSize: "1rem" }}
            >
              I'm a graphic designer and UI/UX practitioner based in Lelystad,
              Netherlands. I believe great design lives at the intersection of
              beauty and purpose — visuals that don't just look good, but
              communicate clearly.
            </p>
            <p
              className="reveal font-sans font-light text-muted leading-relaxed"
              style={{ fontSize: "1rem" }}
            >
              Whether it's a brand identity in CorelDRAW, a polished UI system
              in Figma, or a striking poster in Photoshop — I bring the same
              obsessive attention to craft to everything I touch.
            </p>
          </div>
          <div className="reveal">
            <div
              className="border border-border p-8"
              style={{ borderRadius: "2px" }}
            >
              <p
                className="font-mono text-xs text-gold uppercase tracking-widest mb-6"
                style={{ letterSpacing: ".2em" }}
              >
                Expertise
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-parch">
                      Brand Identity
                    </span>
                    <span className="font-mono text-xs text-muted">
                      Advanced
                    </span>
                  </div>
                  <div className="h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px bg-gold"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-parch">
                      UI/UX Design
                    </span>
                    <span className="font-mono text-xs text-muted">
                      Advanced
                    </span>
                  </div>
                  <div className="h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px bg-gold"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-parch">
                      Print Design
                    </span>
                    <span className="font-mono text-xs text-muted">
                      Proficient
                    </span>
                  </div>
                  <div className="h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px bg-gold"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-parch">
                      Digital Illustration
                    </span>
                    <span className="font-mono text-xs text-muted">
                      Proficient
                    </span>
                  </div>
                  <div className="h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px bg-gold"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-parch">
                      Typography
                    </span>
                    <span className="font-mono text-xs text-muted">
                      Advanced
                    </span>
                  </div>
                  <div className="h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px bg-gold"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="fancy mx-8 md:mx-16 lg:mx-28" />

      {/* ─── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="px-8 md:px-16 lg:px-28 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="reveal font-mono text-xs tracking-widest text-gold uppercase mb-6"
            style={{ letterSpacing: ".25em" }}
          >
            Let's Collaborate
          </p>
          <h2
            className="reveal font-serif font-light"
            style={{
              fontSize: "clamp(2.5rem,8vw,6rem)",
              lineHeight: ".95",
              marginBottom: "2rem",
            }}
          >
            Have a project
            <br />
            <em>in mind?</em>
          </h2>
          <p
            className="reveal font-sans font-light text-muted mb-12"
            style={{
              fontSize: "1.05rem",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3rem",
              lineHeight: "1.7",
            }}
          >
            I'm open to freelance projects, long-term collaborations, and
            exciting new challenges.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yourname@email.com"
              className="font-mono text-xs tracking-widest uppercase text-parch border border-border px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              style={{ borderRadius: "2px", letterSpacing: ".15em" }}
            >
              tofikmalik07860@gmail.com
            </a>
            <a
              href="#"
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors py-4"
              style={{ letterSpacing: ".15em" }}
            >
              Download CV →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────── */}
      <footer className="px-8 md:px-16 lg:px-28 py-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted">
          © 2024 Tofik, All rights reserved.
        </span>
        <div className="flex gap-8">
          <a
            href="mailto:tofikmalik07860@gmail.com"
            className="font-mono text-xs text-muted hover:text-gold transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tofik-malik-4a2414360?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            className="font-mono text-xs text-muted hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
