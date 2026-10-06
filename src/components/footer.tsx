import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Wordmark } from "./ui";
export function Footer() {
  return (
    <footer className="footer section-shell">
      <div className="footer-top">
        <Wordmark />
        <p>
          Independent thinking.
          <br />
          End-to-end making.
        </p>
        <div className="footer-links">
          <a href={`tel:${site.phone}`}>
            {site.phoneDisplay} <ArrowUpRight size={14} />
          </a>
          {site.email && (
            <a href={`mailto:${site.email}`}>
              {site.email} <ArrowUpRight size={14} />
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
          )}
          {site.github && (
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
          <Link href="/#contact">
            Start a conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Hudmeta</span>
        <span>Designed & engineered independently.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
