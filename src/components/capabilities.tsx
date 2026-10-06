"use client";
import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { SectionLabel } from "./ui";
const capabilities = [
  {
    name: "Strategy & direction",
    subtitle: "The right questions, before the first pixel.",
    items: [
      "Digital strategy",
      "Information architecture",
      "Creative direction",
      "Content planning",
    ],
    description:
      "Understand your business, your audience, and what the experience needs to achieve. Set a clear direction before design begins.",
    visual: "direction",
    word: "A clear\npoint of view.",
    meta: "UNDERSTAND → DEFINE",
  },
  {
    name: "Design & experience",
    subtitle: "A visual identity that works as well as it looks.",
    items: [
      "Custom web design",
      "UI/UX",
      "Design systems",
      "Responsive & interaction design",
    ],
    description:
      "Translate your positioning into a distinctive interface. Every layout, interaction, and screen size gets the same attention.",
    visual: "design",
    word: "Every pixel.\nA purpose.",
    meta: "EXPLORE → RESOLVE",
  },
  {
    name: "Development & systems",
    subtitle: "Solid foundations. Room to grow.",
    items: [
      "Full-stack development",
      "APIs & CMS",
      "Database architecture",
      "Custom functionality",
    ],
    description:
      "Build a responsive, maintainable product around your actual requirements, with dependable architecture and thoughtful integrations.",
    visual: "development",
    word: "Good on the\ninside, too.",
    meta: "ARCHITECT → ENGINEER",
  },
  {
    name: "AI & intelligent tools",
    subtitle: "Useful intelligence, built into the workflow.",
    items: [
      "AI-enhanced applications",
      "LLM interfaces",
      "Workflow automation",
      "Knowledge tools",
    ],
    description:
      "Connect capable models to practical business tasks, with clear controls, considered user experiences, and defined scope.",
    visual: "intelligence",
    word: "Less friction.\nMore possibility.",
    meta: "CONNECT → SIMPLIFY",
  },
  {
    name: "Launch & evolution",
    subtitle: "Ready for the real world. Built for what’s next.",
    items: [
      "Performance & accessibility",
      "SEO foundations",
      "Deployment & analytics",
      "Maintenance & support",
    ],
    description:
      "Test the details, prepare the production environment, and launch with care. Keep the experience healthy as your business evolves.",
    visual: "launch",
    word: "The beginning.\nNot the end.",
    meta: "REFINE → RELEASE",
  },
];
export function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section id="capabilities" className="capabilities section-shell">
      <SectionLabel number="02">Capabilities</SectionLabel>
      <div className="capabilities-heading">
        <h2>
          One considered vision.
          <br />
          <span className="muted">All the way through.</span>
        </h2>
        <p>
          From figuring out what to build
          <br />
          to getting every last detail right.
        </p>
      </div>
      <div className="capabilities-layout">
        <div
          className={`capability-art art-${capabilities[active].visual}`}
          aria-hidden="true"
        >
          <span className="mono">THE MAKING OF SOMETHING GOOD</span>
          <div className="capability-symbol">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="capability-art-bottom">
            <p>{capabilities[active].word}</p>
            <span className="mono">
              {capabilities[active].meta}
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
        <div className="capability-list">
          {capabilities.map((c, i) => (
            <div
              className={`capability-item ${active === i ? "is-active" : ""}`}
              key={c.name}
            >
              <h3>
                <button
                  id={`capability-trigger-${i}`}
                  aria-expanded={active === i}
                  aria-controls={`capability-panel-${i}`}
                  onClick={() => setActive(i)}
                >
                  <span className="mono">0{i + 1}</span>
                  <span>{c.name}</span>
                  {active === i ? <Minus size={19} /> : <Plus size={19} />}
                </button>
              </h3>
              <div
                id={`capability-panel-${i}`}
                role="region"
                aria-labelledby={`capability-trigger-${i}`}
                hidden={active !== i}
              >
                <p>{c.description}</p>
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
