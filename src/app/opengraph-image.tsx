import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Claude Code - Free 3-Month Subscription";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const claudeIcon = await readFile(
    join(process.cwd(), "public", "claude-icon.png"),
  );
  const claudeIconBase64 = `data:image/png;base64,${claudeIcon.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#191918",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Top bar accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #D97706, #F59E0B, #D97706)",
          display: "flex",
        }}
      />

      {/* Limited Time badge */}
      <div
        style={{
          position: "absolute",
          top: 28,
          right: 40,
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(217, 119, 6, 0.15)",
          border: "1px solid rgba(217, 119, 6, 0.4)",
          borderRadius: 20,
          padding: "6px 16px",
          fontSize: 14,
          color: "#F59E0B",
          letterSpacing: 1,
          textTransform: "uppercase" as const,
        }}
      >
        Limited Time Offer
      </div>

      {/* Brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <img src={claudeIconBase64} alt="" width={40} height={40} />
        <span
          style={{
            fontSize: 22,
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: 2,
            textTransform: "uppercase" as const,
          }}
        >
          Anthropic
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          color: "#FFFFFF",
          marginBottom: 8,
          display: "flex",
        }}
      >
        Claude Code
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: "#D97706",
          marginBottom: 32,
          display: "flex",
        }}
      >
        Free 3-Month Subscription
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 20,
          color: "rgba(255, 255, 255, 0.5)",
          marginBottom: 40,
          display: "flex",
        }}
      >
        Exclusive developer promotion - activate your complimentary access today
      </div>

      {/* CTA Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D97706",
          color: "#FFFFFF",
          fontSize: 22,
          fontWeight: 600,
          padding: "14px 48px",
          borderRadius: 50,
          letterSpacing: 0.5,
        }}
      >
        Activate Now
      </div>

      {/* Bottom brand line */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          display: "flex",
          fontSize: 14,
          color: "rgba(255, 255, 255, 0.3)",
        }}
      >
        claude.ai/code - Powered by Anthropic
      </div>
    </div>,
    { ...size },
  );
}
