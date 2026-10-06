import Image from "next/image";
import {
  ArrowUpRight,
  Plus,
  Search,
  LayoutGrid,
  Check,
  Circle,
  SlidersHorizontal,
} from "lucide-react";

export function ProjectPreview({
  kind,
  hero = false,
  featured = false,
}: {
  kind: string;
  hero?: boolean;
  featured?: boolean;
}) {
  if (kind === "forma")
    return (
      <div
        className={`preview forma-preview ${hero ? "hero-preview" : ""}`}
        aria-hidden="true"
      >
        <div className="preview-nav">
          <span className="forma-logo">
            forma<span>®</span>
          </span>
          <span className="preview-nav-links">
            Spaces &nbsp;&nbsp; Practice &nbsp;&nbsp; Contact{" "}
            <ArrowUpRight size={10} />
          </span>
        </div>
        <div className="forma-image">
          <Image
            src="/images/interior.jpg"
            alt=""
            fill
            sizes={
              hero
                ? "(max-width: 599px) 70vw, (max-width: 899px) 36vw, 480px"
                : "(max-width: 899px) 78vw, 1000px"
            }
            loading={hero || featured ? "eager" : "lazy"}
            fetchPriority={hero || featured ? "high" : "auto"}
            quality={75}
          />
          <div className="forma-image-copy">
            <span>ARCHITECTURE, WITH FEELING.</span>
            <p>
              Space to
              <br />
              <i>live well.</i>
            </p>
            <div className="forma-bottom">
              <span>
                Considered spaces.
                <br />
                Extraordinary everyday living.
              </span>
              <span className="preview-round">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
        <div className="forma-foot">
          <span>Thoughtfully designed. Intentionally built.</span>
          <span>EST. 2026 — CONCEPT</span>
        </div>
      </div>
    );
  if (kind === "elsewhere")
    return (
      <div className="preview elsewhere-preview" aria-hidden="true">
        <Image
          src="/images/mountain.jpg"
          loading={featured ? "eager" : "lazy"}
          fetchPriority={featured ? "high" : "auto"}
          alt=""
          fill
          sizes={
            featured
              ? "(max-width: 899px) 78vw, 950px"
              : "(max-width: 599px) 78vw, (max-width: 899px) 39vw, 600px"
          }
        />
        <div className="landscape-shade" />
        <div className="elsewhere-nav">
          <span>
            elsewhere<span className="mini-star">✳</span>
          </span>
          <span>TAKE THE SCENIC ROUTE ↗</span>
        </div>
        <div className="elsewhere-copy">
          <span>A DIFFERENT KIND OF AWAY</span>
          <p>
            Find your
            <br />
            <i>elsewhere.</i>
          </p>
          <span className="elsewhere-button">
            Explore the unfamiliar <ArrowUpRight size={12} />
          </span>
        </div>
        <div className="elsewhere-foot">
          <span>LESS ORDINARY. MORE OUT THERE.</span>
          <span>01 — 03</span>
        </div>
      </div>
    );
  return (
    <div className="preview index-preview" aria-hidden="true">
      <div className="index-sidebar">
        <span className="index-logo">▧ index</span>
        <div>
          <span>
            <Search size={12} /> Search
          </span>
          <span className="index-sidebar-active">
            <LayoutGrid size={12} /> Overview
          </span>
          <span>
            <Circle size={12} /> My work
          </span>
        </div>
        <small>WORKSPACE</small>
        <span>◦ &nbsp; Studio</span>
        <span>◦ &nbsp; Product</span>
        <span>◦ &nbsp; Engineering</span>
        <span className="index-avatar">
          S <span>Studio workspace</span>
        </span>
      </div>
      <div className="index-main">
        <div className="index-breadcrumb">
          Workspace <span>/ Overview</span>
          <span>⌘ K</span>
        </div>
        <div className="index-heading">
          <div>
            <span>MONDAY, OCTOBER 5</span>
            <h3>A little more clarity.</h3>
            <p>Your best work starts with a clear head.</p>
          </div>
          <span className="index-add">
            <Plus size={12} /> New project
          </span>
        </div>
        <div className="index-project-title">
          <span>
            Projects <small>3</small>
          </span>
          <SlidersHorizontal size={12} />
        </div>
        {[
          {
            name: "Brand & website",
            sub: "Design · 12 tasks",
            progress: "72%",
            color: "green",
          },
          {
            name: "Product launch",
            sub: "Product · 8 tasks",
            progress: "40%",
            color: "orange",
          },
          {
            name: "Design system",
            sub: "Engineering · 16 tasks",
            progress: "90%",
            color: "blue",
          },
        ].map((p, i) => (
          <div className="index-row" key={p.name}>
            <span className={`index-project-icon ${p.color}`}>
              {i === 0 ? "F" : i === 1 ? "↗" : "◈"}
            </span>
            <div>
              <strong>{p.name}</strong>
              <small>{p.sub}</small>
            </div>
            <span className="index-status">In progress</span>
            <div className="index-progress">
              <span style={{ width: p.progress }} />
            </div>
          </div>
        ))}
        <div className="index-today">
          <span>Up next</span>
          <div>
            <Check size={12} />
            <span>Good ideas, ready to move forward.</span>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}
