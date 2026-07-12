import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";
import { profile } from "@/data/profile";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b1120",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#3b82f6",
            marginBottom: 24,
          }}
        >
          Portfólio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          {profile.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
