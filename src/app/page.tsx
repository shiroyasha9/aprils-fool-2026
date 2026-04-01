import type { Metadata } from "next";
import RickrollContent from "./rickroll-content";

export const metadata: Metadata = {
  title: "Claude Code - Free 3-Month Subscription",
  description:
    "Claim your complimentary 3-month Claude Code subscription. Limited-time offer for developers. Activate your free access to Claude Code Pro features today.",
  icons: {
    icon: "/claude-icon.png",
    apple: "/claude-icon.png",
  },
  openGraph: {
    title: "Claude Code - Free 3-Month Subscription",
    description:
      "Claim your complimentary 3-month Claude Code subscription. Limited-time offer for developers.",
    siteName: "Anthropic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code - Free 3-Month Subscription",
    description:
      "Claim your complimentary 3-month Claude Code subscription. Limited-time offer for developers.",
  },
};

export default function Home() {
  return <RickrollContent />;
}
