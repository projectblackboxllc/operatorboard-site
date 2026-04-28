import { Logo } from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Documentation for OperatorBoard — approval queues, execution modes, database governance, security baseline, and agent registration. Deploy human-governed AI agents in minutes.",
  openGraph: {
    title: "OperatorBoard Docs",
    description:
      "Guides for approval queues, execution modes, database governance, backup attestation, and agent registration.",
    url: "https://operatorboard.dev/docs",
  },
  alternates: { canonical: "https://operatorboard.dev/docs" },
};

const sections = [
  {
    title: "Getting started",
    items: [
      { label: "Overview", href: "https://github.com/projectblackboxllc/operatorboard#readme" },
      { label: "Quick start (Docker)", href: "https://github.com/projectblackboxllc/operatorboard#docker-recommended-for-production-evaluation" },
      { label: "Quick start (Local dev)", href: "https://github.com/projectblackboxllc/operatorboard#local-development" },
      { label: "Connecting your agent", href: "https://github.com/projectblackboxllc/operatorboard#connecting-your-agent" },
    ],
  },
  {
    title: "Governance",
    items: [
      { label: "Execution modes", href: "https://github.com/projectblackboxllc/operatorboard#how-it-works" },
      { label: "Approval queue", href: "https://github.com/projectblackboxllc/operatorboard#features" },
      { label: "Earned trust & promotion", href: "https://github.com/projectblackboxllc/operatorboard#roadmap" },
      { label: "Kill switch & suspend", href: "https://github.com/projectblackboxllc/operatorboard#features" },
      { label: "Task pipelines & scheduling", href: "https://github.com/projectblackboxllc/operatorboard#features" },
    ],
  },
  {
    title: "Database governance",
    items: [
      { label: "Overview & access tiers", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md" },
      { label: "Backup attestation", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md" },
      { label: "Signed integration ingest", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md" },
      { label: "Shell-bypass detection", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md" },
      { label: "backup-attestor package", href: "https://github.com/projectblackboxllc/operatorboard/tree/main/packages/agent-adapters/backup-attestor" },
    ],
  },
  {
    title: "Security",
    items: [
      { label: "Security baseline", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/docs/security-baseline.md" },
      { label: "Security policy & reporting", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md" },
      { label: "Production checklist", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md#production-hardening-checklist" },
      { label: "Caddy reverse proxy config", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/Caddyfile" },
      { label: "Disclaimer", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "Agent HTTP protocol", href: "https://github.com/projectblackboxllc/operatorboard#connecting-your-agent" },
      { label: "Zod schemas (shared package)", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/packages/shared/src/index.ts" },
      { label: "API routes (index.ts)", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/apps/api/src/index.ts" },
      { label: "Mock agent reference", href: "https://github.com/projectblackboxllc/operatorboard/tree/main/examples/mock-agent" },
      { label: "Environment variables", href: "https://github.com/projectblackboxllc/operatorboard/blob/main/apps/api/.env.example" },
    ],
  },
];

export default function Docs() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <Logo size={24} />
            <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.02em", color: "var(--text)", marginLeft: "0.5rem" }}>
              OperatorBoard
            </span>
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/docs" style={{ color: "var(--text)" }}>Docs</a></li>
            <li><a href="/changelog">Changelog</a></li>
            <li><a href="https://github.com/projectblackboxllc/operatorboard" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
          <div className="nav-right">
            <a href="https://github.com/projectblackboxllc/operatorboard" className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: "60px", maxWidth: "1000px", margin: "0 auto", padding: "80px 2rem 4rem", display: "grid", gridTemplateColumns: "220px 1fr", gap: "3rem", alignItems: "start" }}>
        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "80px" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "1rem" }}>Documentation</p>
          {sections.map((s) => (
            <div key={s.title} style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text2)", marginBottom: "0.5rem", letterSpacing: "0.03em" }}>{s.title}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                {s.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="docs-sidebar-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main>
          <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.65rem" }}>Documentation</p>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "0.75rem" }}>OperatorBoard Docs</h1>
          <p style={{ fontSize: "1rem", color: "var(--text2)", lineHeight: 1.65, maxWidth: "560px", marginBottom: "3rem" }}>
            OperatorBoard is governance infrastructure for AI agent fleets. It sits between your agents
            and production — handling approvals, constraints, database governance, and audit logging.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden", marginBottom: "2rem" }}>
            {sections.map((s) => (
              <div key={s.title} style={{ background: "var(--bg2)", padding: "1.5rem 1.75rem", borderBottom: "1px solid var(--border)" }}>
                <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>{s.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {s.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "0.875rem", color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                    >
                      {item.label} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--bg2)", border: "1px solid var(--border2)", borderLeft: "3px solid var(--accent)", borderRadius: "10px", padding: "1.25rem 1.5rem" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text2)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--text)" }}>Full docs are on GitHub.</strong> The README, docs/ directory,
              and inline source comments are the canonical documentation for v0.1.0. A structured docs site is on the roadmap.
              If you find something unclear, <a href="https://github.com/projectblackboxllc/operatorboard/issues">open an issue</a>.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
