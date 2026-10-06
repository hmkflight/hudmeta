import {
  ArrowUpRight,
  Braces,
  Layers3,
  Database,
  Cloud,
  PenTool,
} from "lucide-react";
import { SectionLabel } from "./ui";
const layers = [
  {
    title: "Design",
    tools: "Visual direction · Design systems",
    detail:
      "A consistent visual language, made for your brand and the people using it.",
    icon: PenTool,
  },
  {
    title: "Interface",
    tools: "React · Next.js · TypeScript",
    detail:
      "Responsive components, keyboard-accessible interactions, and considered motion.",
    icon: Layers3,
  },
  {
    title: "Application",
    tools: "APIs · Business logic · AI",
    detail:
      "Custom functionality and integrations that support the way your business works.",
    icon: Braces,
  },
  {
    title: "Data",
    tools: "PostgreSQL · Headless CMS",
    detail:
      "Structured content and dependable data models, with appropriate access controls.",
    icon: Database,
  },
  {
    title: "Infrastructure",
    tools: "Deployment · Monitoring · Delivery",
    detail:
      "Production environments, reliable releases, and a clear path for ongoing maintenance.",
    icon: Cloud,
  },
];
export function Technology() {
  return (
    <section className="technology section-shell">
      <div className="technology-copy">
        <SectionLabel number="03">Beyond the surface</SectionLabel>
        <h2>
          Design is only
          <br />
          <span className="muted">half the equation.</span>
        </h2>
        <p>
          The parts you don’t see deserve the same care as the parts you do.
          From the first interaction to the underlying architecture, every layer
          is built to work together.
        </p>
        <a className="text-link" href="#contact">
          Let’s talk about the possibilities <ArrowUpRight size={16} />
        </a>
        <div className="engineering-note">
          <span className="status-dot" />
          <span className="mono">THOUGHTFUL OUTSIDE. DEPENDABLE INSIDE.</span>
        </div>
      </div>
      <div className="technology-stack">
        <div className="stack-heading mono">
          <span>ANATOMY OF A DIGITAL EXPERIENCE</span>
          <span>01—05</span>
        </div>
        {layers.map((l, i) => (
          <details key={l.title} className="stack-layer">
            <summary>
              <span className="stack-number mono">0{i + 1}</span>
              <l.icon size={19} strokeWidth={1.3} />
              <span className="stack-layer-text">
                <strong>{l.title}</strong>
                <span>{l.tools}</span>
              </span>
              <PlusSign />
            </summary>
            <p>{l.detail}</p>
          </details>
        ))}
        <div className="stack-base mono">
          <span>ONE CONNECTED SYSTEM</span>
          <span>↓ READY FOR THE REAL WORLD</span>
        </div>
      </div>
    </section>
  );
}
function PlusSign() {
  return (
    <span className="stack-plus" aria-hidden="true">
      +
    </span>
  );
}
