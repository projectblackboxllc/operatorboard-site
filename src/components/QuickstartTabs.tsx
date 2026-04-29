"use client";
import { useState } from "react";

const tabs = [
  {
    label: "npx",
    content: (
      <code className="block">
        <span className="c"># Zero-install quickstart — Docker required</span>{"\n"}
        <span className="fn">npx</span> operatorboard init{"\n\n"}
        <span className="c"># Generates API key, writes docker-compose config,</span>{"\n"}
        <span className="c"># starts the stack, and opens the dashboard.</span>{"\n\n"}
        <span className="c"># Run with demo seed data:</span>{"\n"}
        <span className="fn">npx</span> operatorboard init --demo{"\n\n"}
        <span className="c"># Dashboard → http://localhost:3000</span>{"\n"}
        <span className="c"># API       → http://localhost:4100</span>
      </code>
    ),
  },
  {
    label: "Docker",
    content: (
      <code className="block">
        <span className="c"># 1. Clone the repo</span>{"\n"}
        <span className="fn">git</span> clone https://github.com/projectblackboxllc/operatorboard.git{"\n"}
        <span className="fn">cd</span> operatorboard{"\n\n"}
        <span className="c"># 2. Generate a strong API key</span>{"\n"}
        <span className="kw">export</span> OPERATORBOARD_API_KEY=$(<span className="fn">openssl</span> rand -hex <span className="num">32</span>){"\n\n"}
        <span className="c"># 3. Start the full stack</span>{"\n"}
        <span className="fn">docker</span> compose up{"\n\n"}
        <span className="c"># Include the mock agent for a full demo</span>{"\n"}
        <span className="fn">docker</span> compose --profile demo up{"\n\n"}
        <span className="c"># Dashboard → http://localhost:3000</span>{"\n"}
        <span className="c"># API       → http://localhost:4100</span>
      </code>
    ),
  },
  {
    label: "Local dev",
    content: (
      <code className="block">
        <span className="c"># 1. Clone and install</span>{"\n"}
        <span className="fn">git</span> clone https://github.com/projectblackboxllc/operatorboard.git{"\n"}
        <span className="fn">cd</span> operatorboard{"\n"}
        <span className="fn">pnpm</span> install{"\n\n"}
        <span className="c"># 2. Configure environment files</span>{"\n"}
        <span className="fn">cp</span> apps/api/.env.example apps/api/.env{"\n"}
        <span className="fn">cp</span> apps/web/.env.example apps/web/.env{"\n"}
        <span className="c"># Edit apps/api/.env — set OPERATORBOARD_API_KEY:</span>{"\n"}
        <span className="c">#   openssl rand -hex 32</span>{"\n\n"}
        <span className="c"># 3. Start with seed data</span>{"\n"}
        <span className="acc">OPERATORBOARD_SEED</span>=true <span className="fn">pnpm</span> dev{"\n\n"}
        <span className="c"># API       → http://localhost:4100</span>{"\n"}
        <span className="c"># Dashboard → http://localhost:4300</span>
      </code>
    ),
  },
  {
    label: "Register an agent",
    content: (
      <code className="block">
        <span className="c"># Any HTTP server that implements two endpoints can register.</span>{"\n"}
        <span className="c"># GET  /health  →  {`{ ok: true }`}</span>{"\n"}
        <span className="c"># POST /task    →  TaskResponse</span>{"\n\n"}
        <span className="c"># Register your agent with the API:</span>{"\n"}
        <span className="fn">curl</span> -X POST http://localhost:4100/agents \{"\n"}
{"  "}-H <span className="str">&quot;X-Operatorboard-Key: YOUR_API_KEY&quot;</span> \{"\n"}
{"  "}-H <span className="str">&quot;Content-Type: application/json&quot;</span> \{"\n"}
{"  "}-d <span className="str">&apos;&#123;{"\n"}
{"    "}&quot;name&quot;: &quot;MyAgent&quot;,{"\n"}
{"    "}&quot;role&quot;: &quot;Researcher&quot;,{"\n"}
{"    "}&quot;adapterType&quot;: &quot;http&quot;,{"\n"}
{"    "}&quot;endpoint&quot;: &quot;http://your-agent:8080/task&quot;,{"\n"}
{"    "}&quot;executionMode&quot;: &quot;approval_required&quot;,{"\n"}
{"    "}&quot;budgetLimitUsd&quot;: 10{"\n"}
{"  "}&#125;&apos;</span>{"\n\n"}
        <span className="c"># Compatible with Claude, OpenAI, Gemini, local models,</span>{"\n"}
        <span className="c"># or any custom HTTP agent.</span>
      </code>
    ),
  },
];

export function QuickstartTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="quickstart-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`qs-tab${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="code-block">
        <div className="code-block-bar">
          <span className="code-block-lang">bash</span>
        </div>
        {tabs[active].content}
      </div>
    </div>
  );
}
