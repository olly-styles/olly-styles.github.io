import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const letterStyle = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ff5c1c",
  fontSize: 76,
  fontWeight: 600,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
};

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        display: "flex",
        position: "relative",
      }}
    >
      <div style={letterStyle}>o</div>
      <div style={letterStyle}>s</div>
    </div>,
    { ...size },
  );
}
