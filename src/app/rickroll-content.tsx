"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const CONFETTI = [
  { id: "party", emoji: "🎉", index: 0 },
  { id: "confetti", emoji: "🎊", index: 1 },
  { id: "celebrate", emoji: "🥳", index: 2 },
  { id: "clown", emoji: "🤡", index: 3 },
  { id: "fish", emoji: "🐟", index: 4 },
  { id: "skull", emoji: "💀", index: 5 },
  { id: "laugh", emoji: "😂", index: 6 },
  { id: "music", emoji: "🎵", index: 7 },
  { id: "dancer-m", emoji: "🕺", index: 8 },
  { id: "dancer-f", emoji: "💃", index: 9 },
];

function FloatingEmoji({ emoji, index }: { emoji: string; index: number }) {
  const left = (index * 17 + 7) % 100;
  const delay = index * 0.3;
  const duration = 2 + (index % 3);

  return (
    <span
      className="pointer-events-none fixed text-4xl"
      style={{
        left: `${left}%`,
        top: "-50px",
        animation: `fall ${duration}s linear ${delay}s infinite`,
      }}
    >
      {emoji}
    </span>
  );
}

function AnthropicOverlay({ onActivate }: { onActivate: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "#191918",
        fontFamily:
          "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 right-0 left-0 h-1"
        style={{
          background: "linear-gradient(90deg, #D97706, #F59E0B, #D97706)",
        }}
      />

      <div className="mx-auto flex max-w-lg flex-col items-center px-6 text-center">
        {/* Brand mark */}
        <div className="mb-8 flex items-center gap-3">
          <Image src="/claude-icon.png" alt="Claude" width={36} height={36} />
          <span
            className="text-sm tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Anthropic
          </span>
        </div>

        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide uppercase"
          style={{
            backgroundColor: "rgba(217,119,6,0.12)",
            border: "1px solid rgba(217,119,6,0.3)",
            color: "#F59E0B",
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#22C55E" }}
          />
          Limited-time developer promotion
        </div>

        {/* Heading */}
        <h1
          className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl"
          style={{ color: "#FAFAFA" }}
        >
          Claude Code
        </h1>
        <p
          className="mb-2 text-xl font-medium md:text-2xl"
          style={{ color: "#D97706" }}
        >
          Free 3-Month Subscription
        </p>

        {/* Description */}
        <p
          className="mb-10 max-w-sm text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Your complimentary access to Claude Code Pro has been approved.
          Activate below to unlock unlimited usage, priority support, and
          advanced features for 90 days.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onActivate}
          className="cursor-pointer rounded-full px-10 py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "#D97706",
            boxShadow: "0 0 24px rgba(217,119,6,0.3)",
          }}
        >
          Activate Free Subscription
        </button>

        {/* Fine print */}
        <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          No credit card required. Offer valid through April 30, 2026.
        </p>

        {/* Footer */}
        <div
          className="mt-16 text-xs"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          claude.ai/code &mdash; Powered by Anthropic
        </div>
      </div>
    </div>
  );
}

export default function RickrollContent() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [revealed, setRevealed] = useState(false);

  const handleActivate = () => {
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo" }),
        "*",
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute" }),
        "*",
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
        "*",
      );
    }
    setRevealed(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden">
      {/* Fake Anthropic overlay - the bait (z-50 covers everything below) */}
      {!revealed && <AnthropicOverlay onActivate={handleActivate} />}

      {/* Falling emoji layer */}
      {CONFETTI.map((item) => (
        <FloatingEmoji key={item.id} emoji={item.emoji} index={item.index} />
      ))}

      {/* Rainbow cycling background */}
      <div className="animate-rainbow pointer-events-none fixed inset-0 opacity-30" />

      {/* Starfield dots */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, #ff0 1px, transparent 0), radial-gradient(2px 2px at 60% 70%, #0ff 1px, transparent 0), radial-gradient(2px 2px at 80% 20%, #f0f 1px, transparent 0), radial-gradient(3px 3px at 40% 80%, #0f0 1px, transparent 0), radial-gradient(2px 2px at 90% 50%, #ff0 1px, transparent 0)",
          backgroundSize: "200px 200px",
          animation: "spin 20s linear infinite",
        }}
      />

      {/* Scrolling marquee banner */}
      <div
        className="relative z-10 w-full overflow-hidden py-3"
        style={{ backgroundColor: "#ff0044" }}
      >
        <div className="animate-marquee whitespace-nowrap text-2xl font-bold text-yellow-300">
          {"🚨 YOU JUST GOT RICKROLLED 🚨 APRIL FOOLS 2026 🐟 NEVER GONNA GIVE YOU UP 🎵 ".repeat(
            4,
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-4 py-12">
        {/* Title */}
        <h1
          className="animate-bounce-wild text-center font-bold leading-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            color: "#ff0044",
            textShadow:
              "3px 3px 0 #ffee00, -3px -3px 0 #00ff66, 6px 6px 0 #0088ff, -2px 4px 0 #aa00ff",
            WebkitTextStroke: "2px #000",
          }}
        >
          CONGRATULATIONS!!!
          <br />
          <span
            style={{
              color: "#00ff66",
              WebkitTextStroke: "2px #ff0044",
            }}
          >
            {"You've Been"}
          </span>
          <br />
          <span
            className="animate-pulse-scale inline-block"
            style={{
              color: "#ffee00",
              fontSize: "1.3em",
              WebkitTextStroke: "3px #ff0044",
            }}
          >
            RICKROLLED!!!
          </span>
        </h1>

        {/* Video embed */}
        <div
          className="animate-pulse-scale relative w-full overflow-hidden rounded-2xl"
          style={{
            maxWidth: 720,
            border: "6px dashed #ff0044",
            boxShadow:
              "0 0 30px #ff0044, 0 0 60px #ffee00, 0 0 90px #00ff66, inset 0 0 30px rgba(255, 0, 68, 0.3)",
          }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              ref={iframeRef}
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&loop=1&playlist=dQw4w9WgXcQ&rel=0&enablejsapi=1&mute=1"
              title="You just got rickrolled"
              allow="autoplay; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="animate-bounce-wild text-center text-3xl font-bold md:text-5xl"
          style={{
            color: "#0ff",
            textShadow: "2px 2px 0 #f0f, -2px -2px 0 #ff0, 4px 4px 8px #000",
            animationDelay: "0.2s",
          }}
        >
          Happy April Fools&apos; Day 2026!
        </p>

        {/* Spinning fish */}
        <div className="flex gap-6">
          {[
            { id: "tropical", emoji: "🐟", delay: "0s" },
            { id: "angel", emoji: "🐠", delay: "0.2s" },
            { id: "blowfish", emoji: "🐡", delay: "0.4s" },
            { id: "rod", emoji: "🎣", delay: "0.6s" },
            { id: "fishy", emoji: "🐟", delay: "0.8s" },
          ].map((fish) => (
            <span
              key={fish.id}
              className="animate-spin-slow inline-block text-5xl"
              style={{ animationDelay: fish.delay }}
            >
              {fish.emoji}
            </span>
          ))}
        </div>

        {/* Garish "disclaimer" */}
        <div
          className="mx-auto max-w-md rounded-lg p-4 text-center text-lg"
          style={{
            backgroundColor: "rgba(255, 0, 68, 0.2)",
            border: "3px dotted #0f0",
            color: "#ffee00",
            transform: "rotate(-2deg)",
          }}
        >
          <p className="font-bold">
            There is no free Claude Code subscription.
          </p>
          <p className="mt-1 text-sm" style={{ color: "#0ff" }}>
            But Rick Astley will never give you up, never let you down.
          </p>
        </div>
      </div>

      {/* Bottom marquee */}
      <div
        className="relative z-10 w-full overflow-hidden py-3"
        style={{ backgroundColor: "#aa00ff" }}
      >
        <div
          className="animate-marquee whitespace-nowrap text-2xl font-bold"
          style={{
            color: "#0f0",
            animationDirection: "reverse",
          }}
        >
          {"🎵 NEVER GONNA LET YOU DOWN 🎵 NEVER GONNA RUN AROUND AND DESERT YOU 🎵 ".repeat(
            4,
          )}
        </div>
      </div>

      {/* GitHub badge */}
      <a
        href="https://github.com/shiroyasha9/aprils-fool-2026"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 my-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <svg
          viewBox="0 0 16 16"
          width="18"
          height="18"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        View Source on GitHub
      </a>

      {/* Falling emoji keyframe */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
