"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowDown, Download, Check, Copy } from "lucide-react";
import { site } from "@/lib/site";
import { SectionLabel } from "./ui";

export function Contact() {
  const [expanded, setExpanded] = useState(false);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `PROJECT ENQUIRY — HUDMETA\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("type")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}\n`;
    setBrief(text);
    setCopied(false);
    setCopyError(false);
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "hudmeta-project-brief.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <section id="contact" className="contact">
      <div className="section-shell">
        <div className="contact-top">
          <SectionLabel number="06">Let’s make something good</SectionLabel>
          <span className="mono">YOUR NEXT CHAPTER STARTS HERE</span>
        </div>
        <div className="contact-main">
          <h2>
            Have something
            <br />
            worth <span className="serif-word">building?</span>
          </h2>
          <button
            className="contact-circle"
            aria-label="Start your project brief"
            aria-expanded={expanded}
            aria-controls="project-enquiry"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <ArrowUpRight strokeWidth={1} />
          </button>
        </div>
        <div className="contact-bottom">
          <p>
            A distinctive website. A better product. A new idea.
            <br />
            Let’s make something your business is proud to put out there.
          </p>
          <button
            className="text-link"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="project-enquiry"
          >
            Tell me about your project{" "}
            {expanded ? <ArrowDown size={18} /> : <ArrowUpRight size={18} />}
          </button>
        </div>
        <div id="project-enquiry" hidden={!expanded} className="enquiry">
          <div className="enquiry-intro">
            <h3>
              Good things start
              <br />
              with a conversation.
            </h3>
            <p>
              A little context goes a long way. Outline your project and prepare
              a brief to share.
            </p>
            {site.email ? (
              <div className="contact-direct">
                <a href={`mailto:${site.email}`}>
                  {site.email} <ArrowUpRight size={16} />
                </a>
                <a href={`tel:${site.phone}`}>
                  {site.phoneDisplay} <ArrowUpRight size={16} />
                </a>
              </div>
            ) : (
              <p className="contact-setup-note">
                Enquiries are not yet connected. You can prepare and download
                your brief here; nothing is sent or stored.
              </p>
            )}
          </div>
          <form
            onSubmit={submit}
            onChange={() => {
              if (brief) setBrief("");
            }}
            className="contact-form"
          >
            <div className="form-grid">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  required
                  maxLength={200}
                />
              </label>
              <label>
                What are you building?
                <select name="type" defaultValue="" required>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>Brand or company website</option>
                  <option>Website redesign</option>
                  <option>Web application</option>
                  <option>AI-enhanced product</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                Investment range
                <select name="budget" defaultValue="" required>
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>$5,000–$10,000</option>
                  <option>$10,000–$25,000</option>
                  <option>$25,000+</option>
                  <option>Let’s discuss</option>
                </select>
              </label>
            </div>
            <label>
              A little about your project
              <textarea
                name="message"
                placeholder="What are you working on, and what would a great outcome look like?"
                required
                minLength={20}
                maxLength={5000}
                rows={4}
              />
            </label>
            <div className="form-submit">
              <span>No mailing lists. Just your project.</span>
              <button type="submit" className="button">
                Prepare project brief <ArrowUpRight size={18} />
              </button>
            </div>
            {brief && (
              <div className="brief-result" role="status">
                <h4>
                  <Check size={17} /> Your brief is ready.
                </h4>
                <p>
                  {site.email
                    ? "Open your email app to review and send it, or keep a copy."
                    : "Download or copy your brief. It has not been sent."}
                </p>
                <div>
                  {site.email && (
                    <a
                      className="button"
                      href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry — Hudmeta")}&body=${encodeURIComponent(brief)}`}
                    >
                      Open email app <ArrowUpRight size={16} />
                    </a>
                  )}
                  <button
                    className="text-link"
                    type="button"
                    onClick={download}
                  >
                    Download brief <Download size={16} />
                  </button>
                  <button className="text-link" type="button" onClick={copy}>
                    {copied ? "Copied" : "Copy brief"}
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copyError && (
                  <p>
                    Clipboard access is unavailable. Use Download brief to save
                    a copy.
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
