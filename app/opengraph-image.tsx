import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Olly Styles — AI engineer specialising in agent and LLM evaluation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
      }}
    >
      <div style={{ display: "flex", fontSize: 76, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
        Olly Styles
      </div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#6b6b6b" }}>
        <span>ai-engineer</span>
        <span style={{ color: "#ff5c1c" }}>.</span>
        <span>evals</span>
        <span style={{ color: "#ff5c1c" }}>.</span>
        <span>founder</span>
      </div>
      <div style={{ display: "flex", marginTop: 44, fontSize: 26, color: "#8a8a8a" }}>
        Author of WorkBench — evaluating tool-using agents in realistic workplace settings
      </div>
    </div>,
    size,
  );
}
