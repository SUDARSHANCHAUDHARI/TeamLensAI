"use client";
import { useState } from "react";

const ROLES = ["Product Manager", "Security Reviewer", "QA Lead", "DevOps Engineer", "Support Engineer", "Hardware Specialist"];
const TYPES = ["Plan", "Pull request", "Incident", "Release", "Customer reply", "Product decision"];
const VERDICT: Record<string, string> = { approve: "text-emerald-400 border-emerald-500/40", concerns: "text-amber-400 border-amber-500/40", block: "text-red-400 border-red-500/40" };
interface Review { role: string; verdict: string; points: string[]; risks: string[]; }
interface Result { reviews: Review[]; consensus: string; blindSpots: string[]; decision: string; summary: string; }

export default function TeamLensAI() {
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState("Plan");
  const [roles, setRoles] = useState(["Product Manager", "Security Reviewer", "QA Lead"]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function toggle(r: string) { setRoles(p => p.includes(r) ? p.filter(x => x !== r) : [...p, r]); }
  async function run() {
    if (!content.trim() || roles.length < 1) return;
    setLoading(true); setResult(null); setError("");
    try {
      const res = await fetch("/api/review", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content, contentType, roles }) });
      const data = await res.json();
      if (data.error) setError(data.error); else setResult(data);
    } catch { setError("Network error"); }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-lg">👓</div>
            <h1 className="text-2xl font-bold">TeamLens AI</h1>
          </div>
          <p className="text-zinc-400 text-sm">A role-based AI review panel — pressure-test plans, PRs, incidents, and decisions with expert roles. No real-person profiling.</p>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Type</label>
            <select value={contentType} onChange={e => setContentType(e.target.value)} className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500">{TYPES.map(t => <option key={t}>{t}</option>)}</select>
          </div>
          <textarea value={content} onChange={e => setContent(e.target.value)} rows={5} placeholder="Paste the plan, PR description, incident, or decision to review…" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 resize-none mb-4" />
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 block">Review panel (roles)</label>
          <div className="flex flex-wrap gap-2 mb-4">{ROLES.map(r => <button key={r} onClick={() => toggle(r)} className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${roles.includes(r) ? "bg-amber-500/20 border-amber-500/50 text-amber-400" : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-600"}`}>{r}</button>)}</div>
          <button onClick={run} disabled={loading || !content.trim() || roles.length < 1} className="px-8 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold rounded-lg text-sm transition-colors">{loading ? "Reviewing…" : "👓 Run Review Panel"}</button>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm mb-6">{error}</div>}
        {loading && <div className="flex items-center justify-center py-16"><div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" /></div>}

        {result && (
          <div className="flex flex-col gap-5">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5"><p className="text-xs uppercase tracking-wider text-amber-400 mb-1">Decision</p><p className="text-zinc-200 text-sm">{result.decision}</p></div>
            <Section title="Role Reviews">{result.reviews?.map((r, i) => (
              <div key={i} className="bg-zinc-800/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2"><span className="text-sm font-semibold text-zinc-200 flex-1">{r.role}</span><span className={`text-xs px-2 py-0.5 rounded-full border ${VERDICT[r.verdict] || "text-zinc-400 border-zinc-700"}`}>{r.verdict}</span></div>
                {r.points?.map((p, j) => <p key={j} className="text-xs text-zinc-400 flex gap-1"><span className="text-amber-400">→</span>{p}</p>)}
                {r.risks?.map((rk, j) => <p key={j} className="text-xs text-red-300 flex gap-1"><span>⚠</span>{rk}</p>)}
              </div>
            ))}</Section>
            <Section title="Consensus"><p className="text-sm text-zinc-300">{result.consensus}</p></Section>
            <Section title="Blind Spots">{result.blindSpots?.map((b, i) => <p key={i} className="text-sm text-red-300 flex gap-2"><span>⚠</span>{b}</p>)}</Section>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4"><p className="text-sm text-amber-300">{result.summary}</p></div>
          </div>
        )}
      </div>
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5"><h2 className="text-sm font-semibold text-white mb-3">{title}</h2><div className="flex flex-col gap-2">{children}</div></div>;
}
