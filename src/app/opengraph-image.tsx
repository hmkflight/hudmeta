import { ImageResponse } from "next/og";
export const alt = "Hudmeta — Distinct by design. Built to perform.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#171817",
        color: "#f0eee8",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "58px 70px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 30,
        }}
      >
        <span>hudmeta</span>
        <span style={{ fontSize: 15, color: "#aaa9a1", letterSpacing: 3 }}>
          INDEPENDENT DIGITAL STUDIO
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 94,
          letterSpacing: -5,
          lineHeight: 1.04,
          marginTop: 74,
        }}
      >
        <span>Distinct by design.</span>
        <span>
          Built to perform<span style={{ color: "#ee694c" }}>.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #40413b",
          paddingTop: 24,
          marginTop: "auto",
          fontSize: 18,
          color: "#b1b0a9",
          justifyContent: "space-between",
        }}
      >
        <span>DESIGN + DEVELOPMENT</span>
        <span>MADE WITH INTENT ↗</span>
      </div>
    </div>,
    size,
  );
}
