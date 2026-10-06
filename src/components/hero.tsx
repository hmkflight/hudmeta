"use client";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Crosshair } from "lucide-react";
import { ProjectPreview } from "./project-preview";

export function Hero() {
  const [structure, setStructure] = useState(false);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="eyebrow">
          <span className="status-dot" /> Independent digital studio
        </p>
        <span className="hero-location mono">DESIGN + DEVELOPMENT</span>
      </div>
      <div className="hero-main">
        <div className="hero-content">
          <h1 id="hero-title">
            Distinct by
            <br />
            design. <span className="serif-word">Built</span>
            <br />
            to perform<span className="accent">.</span>
          </h1>
          <p className="hero-description">
            Considered design. Serious engineering.
            <br />
            Custom websites and digital products,
            <br className="desktop-break" /> made with intent from the first
            pixel to launch.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              <span>Start a project</span>
              <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#work">
              Explore the work <ArrowDown size={15} />
            </a>
          </div>
        </div>
        <div className={`hero-art ${structure ? "show-structure" : ""}`}>
          <div className="art-grid" />
          <span className="art-cross top-left">+</span>
          <span className="art-cross top-right">+</span>
          <span className="art-cross bottom-left">+</span>
          <span className="art-cross bottom-right">+</span>
          <div className="art-caption mono">
            <Crosshair size={12} /> FORM / FUNCTION / FINISH
          </div>
          <div className="composition">
            <div className="composition-plane plane-back">
              <span>03 / ENGINEERING</span>
              <div className="plane-code">
                <span>const experience = {"{"}</span>
                <span> &nbsp;design: &apos;considered&apos;,</span>
                <span> &nbsp;foundation: &apos;solid&apos;,</span>
                <span> &nbsp;details: &apos;everything&apos;</span>
                <span>{"}"};</span>
              </div>
            </div>
            <div className="composition-plane plane-middle">
              <span>02 / STRUCTURE</span>
              <div className="wireframe">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="composition-plane plane-front">
              <div className="browser-chrome">
                <span>
                  <i />
                  <i />
                  <i />
                </span>
                <span>forma — a studio concept</span>
                <span>↗</span>
              </div>
              <ProjectPreview kind="forma" hero />
            </div>
          </div>
          <div className="art-bottom">
            <span className="mono">
              ONE VISION.
              <br />
              EVERY LAYER.
            </span>
            <div
              className="view-toggle"
              role="group"
              aria-label="Hero preview mode"
            >
              <button
                aria-pressed={!structure}
                onClick={() => setStructure(false)}
              >
                Design
              </button>
              <button
                aria-pressed={structure}
                onClick={() => setStructure(true)}
              >
                Structure
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">GOOD DESIGN GOES DEEPER.</span>
        <a href="#work" className="scroll-cue">
          Scroll to explore <ArrowDown size={14} />
        </a>
        <span className="mono">IDEA → INTERFACE → IMPACT</span>
      </div>
    </section>
  );
}

export function CapabilityStrip() {
  return (
    <div className="capability-strip" aria-label="Studio disciplines">
      {[
        "Strategy",
        "Art direction",
        "UI/UX design",
        "Full-stack development",
        "AI integration",
        "Launch & beyond",
      ].map((item) => (
        <span key={item}>
          {item}
          <span aria-hidden="true">✳</span>
        </span>
      ))}
    </div>
  );
}
