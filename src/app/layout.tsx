import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://operatorboard.dev";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OperatorBoard — Human-governed control plane for AI agents",
    template: "%s — OperatorBoard",
  },
  description:
    "Open-source governance infrastructure for AI agent fleets. Approval queues, constraint enforcement, database governance, earned trust scoring, and a full audit trail — in one control plane. MIT licensed.",
  keywords: [
    "AI agent governance",
    "human-in-the-loop AI",
    "agentic AI control plane",
    "AI agent approval workflow",
    "AI agent oversight",
    "agent safety",
    "AI agent audit trail",
    "database governance AI",
    "agent constraint enforcement",
    "open source agent platform",
    "paperclip alternative",
    "openclaw alternative",
    "agentic framework governance",
    "multi-agent orchestration",
    "AI agent trust scoring",
    "Project Black Box LLC",
    "OperatorBoard",
  ],
  authors: [{ name: "Project Black Box LLC", url: SITE_URL }],
  creator: "Project Black Box LLC",
  publisher: "Project Black Box LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "OperatorBoard — Human-governed control plane for AI agents",
    description:
      "Approval queues, constraint enforcement, database governance, and earned trust scoring for AI agent fleets. Open source, MIT licensed.",
    url: SITE_URL,
    siteName: "OperatorBoard",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1440,
        height: 960,
        alt: "OperatorBoard — Human-governed control plane for AI agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OperatorBoard — Human-governed control plane for AI agents",
    description:
      "Approval queues, constraint enforcement, database governance, and earned trust scoring for AI agent fleets. Open source, MIT licensed.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "OperatorBoard",
      url: SITE_URL,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, macOS, Windows",
      description:
        "Human-governed control plane for AI agents. OperatorBoard is open-source governance infrastructure that sits between AI agents and production — handling approval queues, constraint enforcement, database governance, earned trust scoring, and a full audit trail. Compatible with Claude, OpenAI, Gemini, and any HTTP-based agent.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Approval queue with multi-action review",
        "Four-tier execution mode ladder (observe → propose → approval_required → scoped_autonomy)",
        "Earned trust scoring — autonomy is earned, not configured",
        "Constraint enforcement on network, file, shell, and database access",
        "Database governance with backup attestation for destructive actions",
        "Full audit trail on every action, approval, violation, and heartbeat",
        "Kill switch and suspend per agent",
        "ISO 8601 scheduled tasks with pipeline triggers",
        "Org chart and cost analytics",
        "Security hardening: SSRF prevention, HMAC replay protection, Caddy reverse proxy config",
      ],
      softwareVersion: "0.1.0",
      license: "https://opensource.org/licenses/MIT",
      codeRepository: "https://github.com/projectblackboxllc/operatorboard",
      programmingLanguage: ["TypeScript", "JavaScript"],
      runtimePlatform: "Node.js",
      author: {
        "@type": "Organization",
        name: "Project Black Box LLC",
        url: SITE_URL,
      },
      keywords:
        "AI agent governance, human-in-the-loop, agentic AI, agent oversight, approval queue, paperclip alternative, openclaw alternative, constraint enforcement, audit trail",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Project Black Box LLC",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      sameAs: ["https://github.com/projectblackboxllc"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "OperatorBoard",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
