import { Logo } from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — OperatorBoard",
  description: "Release history for OperatorBoard.",
};

export default function Changelog() {
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
            <li><a href="/docs">Docs</a></li>
            <li><a href="/changelog" style={{ color: "var(--text)" }}>Changelog</a></li>
            <li><a href="https://github.com/projectblackboxllc/operatorboard" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
          <div className="nav-right">
            <a href="https://github.com/projectblackboxllc/operatorboard" className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: "60px", maxWidth: "720px", margin: "0 auto", padding: "80px 2rem 6rem" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.65rem" }}>Changelog</p>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "0.75rem" }}>Release history</h1>
        <p style={{ fontSize: "1rem", color: "var(--text2)", marginBottom: "3.5rem" }}>
          All notable changes to OperatorBoard. Full release notes on{" "}
          <a href="https://github.com/projectblackboxllc/operatorboard/releases">GitHub Releases</a>.
        </p>

        {/* v0.1.0 */}
        <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ flexShrink: 0, width: "80px", paddingTop: "0.25rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text3)", display: "block" }}>2025</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", fontFamily: "var(--mono)" }}>v0.1.0</span>
          </div>
          <div style={{ flex: 1, borderLeft: "1px solid var(--border2)", paddingLeft: "2rem", paddingBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Initial release</h2>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "99px", background: "var(--green-dim)", color: "#4ade80" }}>Latest</span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              OperatorBoard is a human-governed control plane for AI agents. This first release establishes
              the core governance model, database governance layer, and security posture.
            </p>

            {[
              {
                label: "Core governance",
                color: "var(--accent)",
                items: [
                  "Four-level execution ladder: observe → propose → approval_required → scoped_autonomy",
                  "Approval queue with multi-action support and task-level gating",
                  "Earned trust — promotion suggestions at ≥90% approval rate, ≥5 tasks, zero violations",
                  "Kill switch — suspend/resume per agent, pauses associated tasks",
                  "Task pipelines, scheduled tasks, org chart, cost analytics",
                  "Webhook notifications, agent health checks, full audit trail",
                ],
              },
              {
                label: "Database governance",
                color: "var(--yellow)",
                items: [
                  "Four-tier DB access model: none / read_only / write_safe / write_destructive",
                  "Structured db.* action namespace",
                  "Shell-bypass detection — psql, mysql, sqlite3 auto-classified as write_destructive",
                  "Backup attestation requirement for destructive DB actions",
                  "Stale attestation enforcement with configurable maxBackupAgeMinutes",
                  "Signed integration ingest with HMAC-SHA256, provider binding, replay protection",
                ],
              },
              {
                label: "Security hardening",
                color: "var(--green)",
                items: [
                  "Webhook SSRF prevention — isSafeWebhookUrl() at registration and fire-time",
                  "Action-type normalization — lowercased, startsWith() prefix matching",
                  "allowNetwork enforced server-side; network and file read off by default",
                  "Approval-state guards — no silent approval queue wipes",
                  "Integration replay protection with 5-minute TTL and forward-skew limit",
                  "Attestation provenance — manual path always sets source: manual",
                  "Timing-safe auth, honeypot routes, Caddy config included",
                ],
              },
              {
                label: "Developer experience",
                color: "var(--blue)",
                items: [
                  "buildApp() factory with injectable fetchImpl and scheduler for testing",
                  "21 tests across 8 suites",
                  "pnpm monorepo with shared Zod schemas",
                  "Docker multi-stage builds, GitHub Actions CI",
                  "Demo seed data, mock agent reference implementation",
                ],
              },
            ].map((group) => (
              <div key={group.label} style={{ marginBottom: "1.25rem" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: group.color, marginBottom: "0.6rem" }}>
                  {group.label}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--text2)", display: "flex", gap: "0.5rem", lineHeight: 1.5 }}>
                      <span style={{ color: group.color, flexShrink: 0, marginTop: "0.1rem" }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="https://github.com/projectblackboxllc/operatorboard/releases/tag/v0.1.0"
                className="btn btn-outline btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full release notes on GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Future */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ flexShrink: 0, width: "80px", paddingTop: "0.25rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text3)", fontFamily: "var(--mono)" }}>next</span>
          </div>
          <div style={{ flex: 1, borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text2)" }}>On the roadmap</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {[
                "Outbound egress controls below the application layer",
                "Per-role action allowlists",
                "Audit log integrity signing",
                "Rate limiting on integration endpoints",
                "Structured red-team test tooling",
                "Agent-to-agent authorization model",
              ].map((item) => (
                <li key={item} style={{ fontSize: "0.875rem", color: "var(--text3)", display: "flex", gap: "0.5rem" }}>
                  <span>◦</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
