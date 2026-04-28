import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OperatorBoard — Human-governed control plane for AI agents",
  description: "Let your agents run. Keep yourself in the loop. Open-source governance infrastructure for AI agent fleets — approvals, constraints, trust scoring, database governance, and a full audit trail.",
  openGraph: {
    title: "OperatorBoard",
    description: "Human-governed control plane for AI agents.",
    url: "https://operatorboard.dev",
    siteName: "OperatorBoard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OperatorBoard",
    description: "Human-governed control plane for AI agents.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
