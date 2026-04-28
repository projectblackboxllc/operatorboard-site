import { Logo } from "@/components/Logo";
import { QuickstartTabs } from "@/components/QuickstartTabs";

export default function Home() {
  return (
    <>
      {/* ── NAV ──────────────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <Logo size={26} />
            <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--text)" }}>
              OperatorBoard
            </span>
          </a>

          <ul className="nav-links">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="/docs">Docs</a></li>
            <li><a href="/changelog">Changelog</a></li>
          </ul>

          <div className="nav-right">
            <a
              href="https://github.com/projectblackboxllc/operatorboard"
              className="star-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="star-btn-label">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="#fbbf24"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
                Star
              </span>
              <span className="star-btn-count">GitHub</span>
            </a>
            <a href="https://github.com/projectblackboxllc/operatorboard" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div className="hero-wrap">
        <div className="hero-glow" />
        <div className="hero">
          <div className="hero-badge">
            <span className="pulse" />
            v0.1.0 — open source, MIT licensed
          </div>
          <h1>Human-governed control plane<br />for AI agents</h1>
          <p className="hero-sub">
            Let your agents run. Keep yourself in the loop. Approvals, constraint
            enforcement, database governance, earned trust scoring, and a full
            audit trail — in one open-source control plane.
          </p>
          <div className="hero-actions">
            <a href="#quickstart" className="btn btn-primary">Get started →</a>
            <a
              href="https://github.com/projectblackboxllc/operatorboard"
              className="btn btn-outline"
              target="_blank" rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
              View on GitHub
            </a>
          </div>
          <p className="hero-meta">
            Built by <a href="https://github.com/projectblackboxllc">Project Black Box LLC</a>
            {" · "}
            <a href="/llms.txt">llms.txt</a>
            {" · "}
            <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md">Disclaimer</a>
          </p>
        </div>

        {/* ── PRODUCT MOCKUP ─────────────────────────────────────── */}
        <div className="mockup-wrap">
          <div className="mockup-window">
            <div className="mockup-bar">
              <div className="mock-dot" style={{ background: "#ef4444" }} />
              <div className="mock-dot" style={{ background: "#f59e0b" }} />
              <div className="mock-dot" style={{ background: "#22c55e" }} />
              <span style={{ fontSize: "0.75rem", color: "var(--text3)", marginLeft: "0.5rem" }}>
                OperatorBoard — Approval Queue
              </span>
            </div>

            <div className="mockup-body">
              <div className="mock-sidebar">
                <div className="mock-sidebar-item active">
                  <span>⬛</span> Approval Queue
                  <span className="mock-badge mock-badge-red">3</span>
                </div>
                <div className="mock-sidebar-item">
                  <span>⬛</span> Agents
                  <span className="mock-badge mock-badge-green">4</span>
                </div>
                <div className="mock-sidebar-item">
                  <span>⬛</span> Tasks
                </div>
                <div className="mock-sidebar-item">
                  <span>⬛</span> Org Chart
                </div>
                <div className="mock-sidebar-item">
                  <span>⬛</span> Analytics
                </div>
                <div style={{ marginTop: "1rem", padding: "0 0.75rem" }}>
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "1rem" }} />
                  <div style={{ fontSize: "0.7rem", color: "var(--text3)", padding: "0 0.25rem", marginBottom: "0.5rem", fontWeight: 700, letterSpacing: "0.08em" }}>AGENTS</div>
                  <div className="mock-sidebar-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.1rem" }}>
                    <span style={{ fontSize: "0.8rem" }}>ResearchAgent</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--text3)" }}>approval_required · 94% approved</span>
                  </div>
                  <div className="mock-sidebar-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.1rem" }}>
                    <span style={{ fontSize: "0.8rem" }}>DBWriter</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--text3)" }}>scoped_autonomy · 87% approved</span>
                  </div>
                </div>
              </div>

              <div className="mock-main">
                <div className="mock-header">
                  <div>
                    <div className="mock-title">Approval Queue</div>
                    <div className="mock-subtitle">3 actions pending review across 2 tasks</div>
                  </div>
                  <div className="mock-badge mock-badge-yellow" style={{ padding: "0.3rem 0.7rem", fontSize: "0.75rem" }}>
                    ⚡ Webhook sent
                  </div>
                </div>

                <div className="mock-approval-card">
                  <div className="mock-type-tag">db.schema.alter</div>
                  <div className="mock-card-top">
                    <div>
                      <div className="mock-card-title">Drop column &quot;legacy_token&quot; from users table</div>
                      <div className="mock-card-sub">DBWriter · Task #47 · Backup: rds-snapshot-2025-04-28 ✓</div>
                    </div>
                    <span className="mock-risk risk-critical">CRITICAL</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text2)", marginBottom: "0.65rem", padding: "0.5rem 0.75rem", background: "var(--bg4)", borderRadius: "6px" }}>
                    ⚠ Destructive DB action — estimated 2.1M rows affected. Backup attestation verified 4 min ago.
                  </div>
                  <div className="mock-card-actions">
                    <button className="mock-btn mock-btn-deny">✕ Deny</button>
                    <button className="mock-btn mock-btn-approve">✓ Approve</button>
                  </div>
                </div>

                <div className="mock-approval-card">
                  <div className="mock-type-tag">http.get</div>
                  <div className="mock-card-top">
                    <div>
                      <div className="mock-card-title">Fetch research data from external API</div>
                      <div className="mock-card-sub">ResearchAgent · Task #49</div>
                    </div>
                    <span className="mock-risk risk-medium">MEDIUM</span>
                  </div>
                  <div className="mock-card-actions">
                    <button className="mock-btn mock-btn-deny">✕ Deny</button>
                    <button className="mock-btn mock-btn-approve">✓ Approve</button>
                  </div>
                </div>

                <div className="mock-approval-card" style={{ opacity: 0.6 }}>
                  <div className="mock-type-tag">file.read</div>
                  <div className="mock-card-top">
                    <div>
                      <div className="mock-card-title">Read config from /etc/app/settings.json</div>
                      <div className="mock-card-sub">ResearchAgent · Task #49</div>
                    </div>
                    <span className="mock-risk risk-low">LOW</span>
                  </div>
                  <div className="mock-card-actions">
                    <button className="mock-btn mock-btn-deny">✕ Deny</button>
                    <button className="mock-btn mock-btn-approve">✓ Approve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mockup-fade" />
        </div>
      </div>

      <hr className="divider" />

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <p className="section-eyebrow">Execution modes</p>
          <h2>Every agent starts conservative.<br />Autonomy is earned.</h2>
          <p className="section-sub">
            Assign each agent an execution mode. As it builds a track record —
            high approval rate, zero constraint violations — OperatorBoard suggests
            a promotion. You click the button.
          </p>

          <div className="mode-ladder">
            <div className="mode-row">
              <code className="mode-tag">observe</code>
              <span className="mode-desc">Agent analyzes and reports. No actions taken.</span>
              <span className="mode-pill" style={{ background: "rgba(75,85,99,0.2)", color: "#9ca3af" }}>Read-only</span>
            </div>
            <div className="mode-row">
              <code className="mode-tag">propose</code>
              <span className="mode-desc">Every proposed action goes to the approval queue before anything runs.</span>
              <span className="mode-pill" style={{ background: "var(--yellow-dim)", color: "#fbbf24" }}>Review all</span>
            </div>
            <div className="mode-row">
              <code className="mode-tag">approval_required</code>
              <span className="mode-desc">Task-level approval gate. Default for every new agent.</span>
              <span className="mode-pill" style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c" }}>Default</span>
            </div>
            <div className="mode-row">
              <code className="mode-tag">scoped_autonomy</code>
              <span className="mode-desc">Agent acts within an explicit constraint envelope. Violations are blocked.</span>
              <span className="mode-pill" style={{ background: "var(--green-dim)", color: "#4ade80" }}>Earned</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── WITHOUT / WITH ───────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-eyebrow">The problem</p>
          <h2>Most frameworks are fire-and-forget.</h2>
          <p className="section-sub">
            OperatorBoard adds the layer that&apos;s been missing.
          </p>

          <table className="compare-table">
            <thead>
              <tr>
                <th>Without OperatorBoard</th>
                <th>With OperatorBoard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-bad">Agent acts immediately, no review</td>
                <td className="td-good">Agent proposes; you approve before anything runs</td>
              </tr>
              <tr>
                <td className="td-bad">No record of what ran or why</td>
                <td className="td-good">Full audit trail on every action, decision, and violation</td>
              </tr>
              <tr>
                <td className="td-bad">&quot;The agent said a backup exists&quot;</td>
                <td className="td-good">Independent backup attestation required before destructive DB ops</td>
              </tr>
              <tr>
                <td className="td-bad">Shell commands bypass DB policy</td>
                <td className="td-good">Shell DB access auto-classified as write_destructive and blocked</td>
              </tr>
              <tr>
                <td className="td-bad">Network and file access on by default</td>
                <td className="td-good">Off by default; explicitly granted per task per agent</td>
              </tr>
              <tr>
                <td className="td-bad">High-performing agents stay restricted forever</td>
                <td className="td-good">Trust score promotes agents automatically when criteria are met</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="section" id="features">
        <div className="section-inner">
          <p className="section-eyebrow">Features</p>
          <h2>Governance is the product.</h2>
          <p className="section-sub">
            Not bolt-on safety features. The approval model, constraint enforcement,
            and trust system are what OperatorBoard is.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">✅</span>
              <h3>Approval queue</h3>
              <p>Multi-action review. Tasks stay blocked until every proposed action is decided. Webhook alerts when approval is needed — no polling.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h3>Earned trust</h3>
              <p>Approval rate and violation tracking per agent. At ≥90% approval rate, ≥5 tasks, zero violations, OperatorBoard suggests promotion.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Constraint enforcement</h3>
              <p>Per-task locks on network access, file read/write, shell, and database tier. Case-variant and substring bypass paths are closed.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🗄️</span>
              <h3>Database governance</h3>
              <p>Four-tier DB access. Destructive actions require independent backup attestation with HMAC-signed integration ingest and replay protection.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📋</span>
              <h3>Full audit trail</h3>
              <p>Every action, approval, constraint violation, heartbeat, and integration attempt logged. Honeypot routes log scanner probes.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⏱️</span>
              <h3>Scheduled tasks</h3>
              <p>Queue tasks for future execution with ISO 8601 scheduling. Review results when you come back. Chain tasks with pipeline triggers.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3>Cost analytics</h3>
              <p>Spend by day, task outcomes, and approval rates across your fleet. Per-agent budget hard stops included.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>Org chart</h3>
              <p>Model reporting relationships between agents. Visualized as a collapsible tree. Kill switch suspends any agent immediately.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>Security hardening</h3>
              <p>SSRF prevention, timing-safe auth, integration replay protection, Caddy config with rate limiting and CSP — all included.</p>
            </div>
          </div>

          <div className="db-callout" style={{ marginTop: "1.5rem" }}>
            <h3>⚠️ Database governance: the hard problem</h3>
            <p>
              An agent with write access can silently wipe your database in seconds. OperatorBoard requires
              an independently-held backup attestation — not an agent claim — before any destructive database
              action can even be approved. Backup attestations are posted via HMAC-signed integration endpoints
              with provider binding, timestamp freshness enforcement, and replay protection. Shell-based DB
              access is auto-classified as write_destructive and blocked regardless of shell permission settings.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TRUST FLOW ───────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-eyebrow">Earned trust</p>
          <h2>Autonomy as a reward,<br />not a starting point.</h2>
          <p className="section-sub">
            Agents don&apos;t start trusted. They earn it. You always make the final call.
          </p>

          <div className="trust-grid">
            <div className="trust-step">
              <p className="trust-num">01 — REGISTER</p>
              <h3>Start conservative</h3>
              <p>New agents default to <code>approval_required</code>. Every task needs operator sign-off before any action runs.</p>
            </div>
            <div className="trust-step">
              <p className="trust-num">02 — OPERATE</p>
              <h3>Build a track record</h3>
              <p>OperatorBoard tracks approval rate, constraint violations, and tasks completed per agent across every run.</p>
            </div>
            <div className="trust-step">
              <p className="trust-num">03 — EARN</p>
              <h3>Promotion suggested</h3>
              <p>At ≥90% approval rate, ≥5 tasks, zero violations — OperatorBoard surfaces a promotion suggestion. You click the button.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── QUICKSTART ───────────────────────────────────────────── */}
      <section className="section" id="quickstart">
        <div className="section-inner">
          <p className="section-eyebrow">Quick start</p>
          <h2>Running in under five minutes.</h2>
          <p className="section-sub">Docker gets you a full stack. Local dev supported with pnpm.</p>

          {/* Coming soon CLI callout */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.9rem 1.25rem",
            marginBottom: "1.5rem",
            background: "var(--bg2)",
            border: "1px solid var(--border2)",
            borderLeft: "3px solid var(--accent)",
            borderRadius: "var(--radius)",
          }}>
            <span style={{ fontSize: "1.1rem" }}>⚡</span>
            <div>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>
                <code style={{ color: "var(--accent)" }}>npx operatorboard</code>
                {" "}
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  padding: "0.15rem 0.5rem",
                  borderRadius: "99px",
                  background: "var(--yellow-dim)",
                  color: "var(--yellow)",
                  verticalAlign: "middle",
                  marginLeft: "0.4rem",
                }}>COMING SOON</span>
              </span>
              <p style={{ fontSize: "0.82rem", color: "var(--text2)", marginTop: "0.2rem" }}>
                One-command setup — generates your API key, starts the stack, opens the dashboard.
                CLI is built and publishing to npm shortly.
              </p>
            </div>
          </div>

          <QuickstartTabs />

          <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="https://github.com/projectblackboxllc/operatorboard" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
            <a href="/docs" className="btn btn-outline">Read the docs</a>
            <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              Production checklist
            </a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DISCLAIMER ───────────────────────────────────────────── */}
      <section className="section disclaimer-section">
        <div className="section-inner">
          <div className="disclaimer-box">
            <h3>⚠️ Read before deploying</h3>
            <p>
              OperatorBoard is provided &quot;as is&quot; under the MIT License.{" "}
              <strong>Project Black Box LLC is not responsible for any actions taken by AI agents
              connected to OperatorBoard</strong> — including data loss, unauthorized access, financial
              charges, database changes, or any other harm — whether or not those actions were approved
              through the platform.
            </p>
            <p>
              OperatorBoard reduces risk. It does not eliminate it. You are responsible for securing your
              deployment, understanding what each registered agent can do, and applying appropriate human
              oversight for your context and risk tolerance. Do not connect agents with access to
              production databases or sensitive systems without independent security review of your
              complete stack.
            </p>
            <p>
              <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md">
                Read the full disclaimer →
              </a>
              {" · "}
              <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md">
                Security policy →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-section">
        <h2>Open source. MIT licensed.<br />Deploy it today.</h2>
        <p>Your agents are only as trustworthy as the controls around them.</p>
        <div className="cta-actions">
          <a href="https://github.com/projectblackboxllc/operatorboard" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <a href="/docs" className="btn btn-outline">Documentation</a>
          <a href="/changelog" className="btn btn-ghost">Changelog</a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{ marginBottom: "0.75rem", display: "flex" }}>
                <Logo size={22} />
                <span style={{ fontWeight: 700, fontSize: "0.95rem", marginLeft: "0.5rem", color: "var(--text)" }}>
                  OperatorBoard
                </span>
              </a>
              <p>Human-governed control plane for AI agents. Open source, MIT licensed.</p>
              <p style={{ marginTop: "0.5rem" }}>Built by <a href="https://github.com/projectblackboxllc" style={{ color: "var(--text2)" }}>Project Black Box LLC</a></p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#quickstart">Quick start</a></li>
                <li><a href="/changelog">Changelog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Developers</h4>
              <ul>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md" target="_blank" rel="noopener noreferrer">Database governance</a></li>
                <li><a href="https://github.com/projectblackboxllc/operatorboard/blob/main/docs/security-baseline.md" target="_blank" rel="noopener noreferrer">Security baseline</a></li>
                <li><a href="/llms.txt">llms.txt</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="https://github.com/projectblackboxllc/operatorboard" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://github.com/projectblackboxllc/operatorboard/releases" target="_blank" rel="noopener noreferrer">Releases</a></li>
                <li><a href="https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer">Security policy</a></li>
                <li><a href="https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md" target="_blank" rel="noopener noreferrer">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 Project Black Box LLC</span>
            <span>
              <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/LICENSE">MIT License</a>
              {" · "}
              <a href="https://operatorboard.dev/llms.txt">llms.txt</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
