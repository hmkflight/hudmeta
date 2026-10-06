import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectPreview } from "@/components/project-preview";
import { SectionLabel } from "@/components/ui";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `${p.name} — Concept study` : "Project not found",
    description: p?.summary,
    ...(site.url ? { alternates: { canonical: `/work/${slug}` } } : {}),
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div id="top">
      <Navigation />
      <main id="main" className="case-study section-shell">
        <Link href="/#work" className="text-link case-back">
          <ArrowLeft size={16} /> All explorations
        </Link>
        <div className="case-header">
          <div>
            <SectionLabel number={project.number}>
              Independent concept study / 2026
            </SectionLabel>
            <h1>
              {project.name}
              <span className="accent">.</span>
            </h1>
          </div>
          <p>{project.summary}</p>
        </div>
        <div className={`case-visual project-${project.className}`}>
          <ProjectPreview kind={project.className} featured />
        </div>
        <div className="case-context">
          <div>
            <span className="eyebrow">The brief</span>
            <h2>{project.challenge}</h2>
          </div>
          <div>
            <span className="eyebrow">The approach</span>
            <p>{project.approach}</p>
            <dl>
              <div>
                <dt>Discipline</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>{project.services.join(" · ")}</dd>
              </div>
              <div>
                <dt>Preview technology</dt>
                <dd>{project.technology.join(" · ")}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Self-initiated concept · Not a client commission</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="case-details">
          {project.details.map((d, i) => (
            <div key={d.title}>
              <span className="mono">0{i + 1}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
        <p className="case-disclosure">
          This study demonstrates a visual and interface direction. It is not a
          live client website, and no commercial results are claimed.
        </p>
        <div className="case-next">
          <span className="eyebrow">Next exploration</span>
          <Link href={`/work/${next.slug}`}>
            {next.name}
            <ArrowUpRight />
          </Link>
        </div>
        <div className="case-contact">
          <p>
            Something like this.
            <br />
            Entirely your own.
          </p>
          <Link href="/#contact" className="button">
            Start a project <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
