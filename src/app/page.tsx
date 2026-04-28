export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────────── */}
      <nav>
        <span className="nav-brand">OperatorBoard</span>
        <ul className="nav-links">
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#quickstart">Quick start</a></li>
          <li><a href="https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md">Docs</a></li>
          <li><a href="https://github.com/projectblackboxllc/operatorboard" className="btn btn-outline">GitHub</a></li>
        </ul>
      </nav>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot" />
          v0.1.0 — open source, MIT licensed
        </div>
        <h1>
          Human-governed control plane<br />
          for <span>AI agents</span>
        </h1>
        <p>
          Let your agents run. Keep yourself in the loop. Approvals, constraints,
          database governance, earned trust, and a full audit trail — in one open-source control plane.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#quickstart">Get started</a>
          <a className="btn btn-outline" href="https://github.com/projectblackboxllc/operatorboard">
            View on GitHub
          </a>
        </div>
        <p className="hero-meta">
          Built by <a href="https://github.com/projectblackboxllc">Project Black Box LLC</a> ·{" "}
          <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md">Disclaimer</a>
        </p>
      </section>

      <hr className="section-divider" />

      {/* ── How it works ────────────────────────────────── */}
      <section id="how-it-works">
        <div className="section-inner">
          <p className="section-label">Execution modes</p>
          <h2>Every agent starts conservative.<br />Autonomy is earned.</h2>
          <p className="section-sub">
            Assign each agent an execution mode. As it builds a track record — high approval rate,
            zero constraint violations — OperatorBoard suggests promoting it. You click the button.
          </p>

          <div className="mode-ladder">
            <div className="mode-row">
              <code className="mode-tag">observe</code>
              <span className="mode-desc">Agent analyzes and reports. No actions taken.</span>
              <span className="mode-indicator" style={{ background: "#4b5563" }} />
            </div>
            <div className="mode-row">
              <code className="mode-tag">propose</code>
              <span className="mode-desc">Every proposed action goes to the approval queue.</span>
              <span className="mode-indicator" style={{ background: "#eab308" }} />
            </div>
            <div className="mode-row">
              <code className="mode-tag">approval_required</code>
              <span className="mode-desc">Task-level approval gate. Default for new agents.</span>
              <span className="mode-indicator" style={{ background: "#f97316" }} />
            </div>
            <div className="mode-row">
              <code className="mode-tag">scoped_autonomy</code>
              <span className="mode-desc">Agent acts within an explicit constraint envelope. Violations are blocked.</span>
              <span className="mode-indicator" style={{ background: "#22c55e" }} />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Features ────────────────────────────────────── */}
      <section id="features">
        <div className="section-inner">
          <p className="section-label">Features</p>
          <h2>Everything you need to govern<br />an agent fleet.</h2>
          <p className="section-sub">
            Not bolt-on safety. The governance model is the product.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Approval queue</h3>
              <p>Multi-action review with task-level gating. Tasks stay blocked until every action is decided.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Earned trust</h3>
              <p>Approval rate + zero-violation tracking per agent. Automatic promotion suggestions when criteria are met.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Constraint enforcement</h3>
              <p>Per-task locks on file access, network calls, shell commands, and database tier. Off by default.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗄️</div>
              <h3>Database governance</h3>
              <p>Four-tier DB access model. Destructive actions blocked without independent backup attestation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Full audit trail</h3>
              <p>Every action, approval decision, constraint violation, and integration attempt — logged.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Webhook notifications</h3>
              <p>Push alerts on approval_required, completed, and decisions. No polling required.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost analytics</h3>
              <p>Spend by day, task outcomes, and approval rates across your fleet.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Org chart</h3>
              <p>Model reporting relationships between agents. Visualized as a collapsible tree.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Security hardening</h3>
              <p>SSRF prevention, timing-safe auth, replay protection, honeypot routes, Caddy config included.</p>
            </div>
          </div>

          <div className="db-callout">
            <h3>⚠️ Database governance: the hard problem</h3>
            <p>
              An agent with write access can silently wipe or overwrite your database in seconds.
              OperatorBoard requires an independently-held backup attestation in the control plane — not
              an agent claim — before any destructive database action can even be approved. Shell-based
              DB access is auto-classified and blocked regardless of shell permission settings.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Trust ───────────────────────────────────────── */}
      <section>
        <div className="section-inner">
          <p className="section-label">Earned trust</p>
          <h2>Autonomy as a reward,<br />not a setting.</h2>
          <p className="section-sub">
            Agents don't start trusted. They earn it by demonstrating consistent, approved behavior
            over time — and you decide when the bar is met.
          </p>

          <div className="trust-steps">
            <div className="trust-step">
              <p className="trust-step-num">01 — START</p>
              <h3>New agent registered</h3>
              <p>Execution mode defaults to <code>approval_required</code>. Every task needs a sign-off.</p>
            </div>
            <div className="trust-step">
              <p className="trust-step-num">02 — BUILD</p>
              <h3>Track record accumulates</h3>
              <p>OperatorBoard tracks approval rate and constraint violations per agent over time.</p>
            </div>
            <div className="trust-step">
              <p className="trust-step-num">03 — EARN</p>
              <h3>Promotion suggested</h3>
              <p>At ≥90% approval rate, ≥5 tasks, and zero violations, OperatorBoard surfaces a promotion. You click the button.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Quickstart ──────────────────────────────────── */}
      <section id="quickstart">
        <div className="section-inner">
          <p className="section-label">Quick start</p>
          <h2>Running in under five minutes.</h2>
          <p className="section-sub">
            Docker recommended. Local dev also supported.
          </p>

          <div className="quickstart-grid">
            <div className="code-block">
              <div className="code-block-header">
                <span>Docker (recommended)</span>
              </div>
              <pre>
                <span className="code-comment"># Generate a strong key</span>{"\n"}
                <span className="code-green">export</span>{" "}OPERATORBOARD_API_KEY={"\n"}
{"  "}$(openssl rand -hex 32){"\n\n"}
                <span className="code-comment"># Start the full stack</span>{"\n"}
docker compose up{"\n\n"}
                <span className="code-comment"># With demo mock agent</span>{"\n"}
docker compose --profile demo up{"\n\n"}
                <span className="code-comment"># Dashboard → localhost:3000</span>{"\n"}
                <span className="code-comment"># API       → localhost:4100</span>
              </pre>
            </div>

            <div className="code-block">
              <div className="code-block-header">
                <span>Local development</span>
              </div>
              <pre>
git clone https://github.com/{"\n"}
{"  "}projectblackboxllc/operatorboard{"\n"}
cd operatorboard{"\n"}
pnpm install{"\n\n"}
                <span className="code-comment"># Configure .env files</span>{"\n"}
cp apps/api/.env.example apps/api/.env{"\n"}
cp apps/web/.env.example apps/web/.env{"\n\n"}
                <span className="code-comment"># Start with seed data</span>{"\n"}
                <span className="code-yellow">OPERATORBOARD_SEED</span>=true pnpm dev
              </pre>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Disclaimer ──────────────────────────────────── */}
      <section className="disclaimer-section">
        <div className="section-inner">
          <div className="disclaimer-box">
            <h3>⚠️ Disclaimer — please read before deploying</h3>
            <p>
              OperatorBoard is provided &quot;as is&quot; under the MIT License.{" "}
              <strong>Project Black Box LLC is not responsible for any actions taken by AI agents
              connected to OperatorBoard</strong>, including data loss, unauthorized access, financial
              charges, database changes, or any other harm resulting from agent behavior — whether or
              not those actions were approved through the platform.
            </p>
            <p>
              OperatorBoard provides tools to help operators review and constrain agent behavior. It
              reduces risk; it does not eliminate it. You are responsible for securing your deployment,
              understanding what each registered agent can do, and applying appropriate human oversight
              for your risk tolerance.
            </p>
            <p>
              Do not connect agents with access to production databases, financial systems, or sensitive
              customer data without independent security review of your complete stack.{" "}
              <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md">
                Read the full disclaimer →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="section-inner">
          <h2>Open source. MIT licensed.<br />Deploy it today.</h2>
          <p>
            Your agents are only as trustworthy as the controls around them.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="https://github.com/projectblackboxllc/operatorboard">
              View on GitHub
            </a>
            <a className="btn btn-outline" href="https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md">
              Security policy
            </a>
            <a className="btn btn-outline" href="https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md">
              Docs
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer>
        <div className="footer-links">
          <a href="https://github.com/projectblackboxllc/operatorboard">GitHub</a>
          <a href="https://github.com/projectblackboxllc/operatorboard/releases">Releases</a>
          <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/SECURITY.md">Security</a>
          <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/DISCLAIMER.md">Disclaimer</a>
          <a href="https://github.com/projectblackboxllc/operatorboard/blob/main/docs/database-governance.md">Docs</a>
          <a href="https://github.com/projectblackboxllc">Project Black Box LLC</a>
        </div>
        <p>© 2025 Project Black Box LLC · MIT License · <a href="https://operatorboard.dev">operatorboard.dev</a></p>
      </footer>
    </>
  );
}
