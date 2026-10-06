import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <span className="eyebrow">404 / A wrong turn</span>
      <h1>
        This page hasn’t
        <br />
        been built.
      </h1>
      <p>Let’s get you back to the work.</p>
      <Link className="button" href="/">
        Back to Hudmeta ↗
      </Link>
    </main>
  );
}
