import { SectionLabel } from "./ui";
const stages = [
  [
    "Discover",
    "Start with the right questions.",
    "Your business, your audience, your ambitions. We establish what success looks like and what the project needs to do.",
  ],
  [
    "Define",
    "Make the direction clear.",
    "A shared plan for the architecture, creative direction, content, scope, and technical requirements.",
  ],
  [
    "Design",
    "Give the idea its own identity.",
    "Explore the visual language, then shape the layouts, interface, and interactions into one coherent experience.",
  ],
  [
    "Build",
    "Turn the details into a working product.",
    "Develop the frontend, connect the systems, and make every screen behave as thoughtfully as it looks.",
  ],
  [
    "Refine",
    "Sweat the small things.",
    "Test across devices. Check accessibility, performance, content, and the edge cases that are easy to miss.",
  ],
  [
    "Launch",
    "Put something good into the world.",
    "Deploy, verify, and hand over with clarity. Agree on the right level of support for what comes next.",
  ],
];
export function Process() {
  return (
    <section id="process" className="process">
      <div className="section-shell process-layout">
        <div className="process-intro">
          <SectionLabel number="04" light>
            The process
          </SectionLabel>
          <h2>
            A clear path.
            <br />
            <span>
              To a better
              <br />
              outcome.
            </span>
          </h2>
          <p>
            No mystery between the brief and the browser. You’re part of the
            conversation at every stage.
          </p>
          <div className="process-stamp" aria-hidden="true">
            <span>HM</span>
            <span>
              THINK IT THROUGH.
              <br />
              MAKE IT REAL.
            </span>
          </div>
        </div>
        <ol className="process-timeline">
          {stages.map(([name, title, description], i) => (
            <li key={name}>
              <span className="process-number">0{i + 1}</span>
              <div>
                <span className="eyebrow">{name}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="process-node" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
