import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectPreview } from "./project-preview";
import { SectionLabel } from "./ui";

export function Work() {
  return (
    <section id="work" className="work section-shell">
      <div className="section-heading">
        <div>
          <SectionLabel number="01">Selected explorations</SectionLabel>
          <h2>
            Proof in the
            <br />
            <span className="muted">details.</span>
          </h2>
        </div>
        <div className="section-heading-note">
          <p>
            Different businesses. Different challenges.
            <br />
            The same care in every decision.
          </p>
          <span className="concept-note">
            <span /> Independent concept studies · 2026
          </span>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card project-${p.className}`}
            key={p.slug}
          >
            <Link href={`/work/${p.slug}`} className="project-visual">
              <div className="project-visual-top">
                <span>HM—0{i + 1}</span>
                <span>CONCEPT STUDY</span>
              </div>
              <span className="sr-only">
                Explore {p.name}, {p.category} concept study
              </span>
              <div className="project-preview-wrap">
                <ProjectPreview kind={p.className} />
              </div>
              <span className="project-open">
                <ArrowUpRight size={22} />
              </span>
            </Link>
            <div className="project-information">
              <div>
                <span className="project-category">{p.category}</span>
                <h3>
                  <Link href={`/work/${p.slug}`}>
                    {p.name}
                    <ArrowUpRight size={22} />
                  </Link>
                </h3>
                <p>{p.summary}</p>
              </div>
              <span className="project-year">2026</span>
            </div>
            <div className="project-tags">
              {p.services.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="work-disclosure">
        These self-initiated studies demonstrate visual direction and interface
        craft. They are not commissioned client projects.
      </p>
    </section>
  );
}
