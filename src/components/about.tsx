import { ArrowUpRight, Check } from "lucide-react";
import { SectionLabel, Mark } from "./ui";
import { site } from "@/lib/site";
export function About() {
  return (
    <section id="studio" className="about section-shell">
      <SectionLabel number="05">Independent by design</SectionLabel>
      <div className="about-main">
        <h2>
          A small studio.
          <br />A direct line.
          <br />
          <span className="muted">A higher standard.</span>
        </h2>
        <div className="about-copy">
          <p className="about-lead">
            You work with the person
            <br />
            who actually makes the work.
          </p>
          <p>
            {site.founder
              ? `I’m ${site.founder}, the designer and developer behind Hudmeta.`
              : "Hudmeta is an independent design and development studio."}{" "}
            I bring visual thinking and technical depth to the same table,
            taking projects personally from the first conversation to
            production.
          </p>
          <p>
            That means clear communication, decisions made with the whole
            product in mind, and care that carries through every stage.
          </p>
          <a href="#contact" className="text-link">
            Meet your next creative partner <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="principles">
        <div>
          <span className="mono">01 / DIRECT</span>
          <h3>
            Fewer layers.
            <br />
            Better conversations.
          </h3>
          <p>
            A direct relationship with the person designing and building your
            project.
          </p>
        </div>
        <div>
          <span className="mono">02 / CONNECTED</span>
          <h3>
            Design thinking.
            <br />
            Engineering instincts.
          </h3>
          <p>
            Creative decisions informed by how the product will actually work.
          </p>
        </div>
        <div>
          <span className="mono">03 / CONSIDERED</span>
          <h3>
            Your business.
            <br />
            Its own expression.
          </h3>
          <p>
            A custom approach shaped around your brand, audience, and real
            needs.
          </p>
        </div>
      </div>
      <div className="trust-block">
        <div className="trust-title">
          <Mark />
          <span className="eyebrow">A standard you can inspect</span>
        </div>
        <p>
          Good work should hold up
          <br />
          when you look a little closer.
        </p>
        <ul>
          {[
            "Responsive by design",
            "Accessible interactions",
            "Maintainable code",
            "A considered handover",
          ].map((s) => (
            <li key={s}>
              <Check size={14} />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="client-note">
        <span className="mono">CLIENT PERSPECTIVES</span>
        <p>
          Space reserved for verified client feedback.
          <br />
          <span>Real names. Real projects. Published with permission.</span>
        </p>
        <span className="client-note-mark" aria-hidden="true">
          “
        </span>
      </div>
    </section>
  );
}
