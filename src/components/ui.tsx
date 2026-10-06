import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 3h7v9h8V3h7v22h-7v-9h-8v9H3V3Z" fill="currentColor" />
      <path d="m10 12 8 4v-4h-8Z" fill="var(--accent)" />
    </svg>
  );
}
export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Hudmeta home">
      <Mark />
      <span>hudmeta</span>
    </Link>
  );
}
export function SectionLabel({
  number,
  children,
  light = false,
}: {
  number?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`section-label ${light ? "on-light" : ""}`}>
      {number && <span>{number} /</span>}
      {children}
    </p>
  );
}
export function ProjectLink({
  href = "#contact",
  children = "Start a project",
  secondary = false,
}: {
  href?: string;
  children?: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a href={href} className={`button ${secondary ? "button-secondary" : ""}`}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.6} />
    </a>
  );
}
