"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/lib/site";
import { Wordmark } from "./ui";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector("a")?.focus();
    const close = () => {
      setOpen(false);
      toggle.current?.focus();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const links = [
          ...(menu.current?.querySelectorAll<HTMLElement>("a") ?? []),
          toggle.current,
        ].filter(Boolean) as HTMLElement[];
        const index = links.indexOf(document.activeElement as HTMLElement);
        event.preventDefault();
        links[
          (index + (event.shiftKey ? -1 : 1) + links.length) % links.length
        ]?.focus();
      }
    };
    const query = window.matchMedia("(min-width: 900px)");
    const onResize = () => {
      if (query.matches) close();
    };
    document.addEventListener("keydown", onKey);
    query.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      query.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <>
      <header
        className={`navigation ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
      >
        <div className="nav-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Link className="nav-cta" href="/#contact">
            Start a project <ArrowUpRight size={17} />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {open && (
        <div
          ref={menu}
          id="mobile-navigation"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <span className="eyebrow">A closer look</span>
          <nav>
            {[...navItems, { label: "Start a project", href: "/#contact" }].map(
              (item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <span className="mono">0{i + 1}</span>
                  {item.label}
                  <ArrowUpRight />
                </a>
              ),
            )}
          </nav>
          <p>
            Independent thinking.
            <br />
            End-to-end making.
          </p>
        </div>
      )}
    </>
  );
}
