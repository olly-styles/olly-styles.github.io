import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fafafa",
        color: "#ff5c1c",
        fontSize: 44,
        fontWeight: 600,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        letterSpacing: "-0.04em",
      }}
    >
      o
    </div>,
    { ...size },
  );
}
