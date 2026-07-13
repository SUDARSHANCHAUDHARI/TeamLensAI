import Anthropic from "@anthropic-ai/sdk";
import { guard, safeError, extractText, safeJson } from "../../../lib/apiGuard";
import { NextRequest, NextResponse } from "next/server";
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
export async function POST(req: NextRequest) {
  const _guard = guard(req);
  if (_guard) return _guard;
  const { content, contentType, roles } = await req.json();
  if (!content?.trim()) return NextResponse.json({ error: "Content required" }, { status: 400 });
  const prompt = `You are TeamLens AI, a role-based review panel. Use expert ROLES (not real people) to pressure-test the following ${contentType || "plan"}. Surface risks, assumptions, missing info, and disagreement.
Roles on the panel: ${(roles as string[]).join(", ")}
Content:
${content}
Return JSON: { "reviews": [{ "role": "string", "verdict": "approve|concerns|block", "points": ["string"], "risks": ["string"] }], "consensus": "string", "blindSpots": ["string"], "decision": "string", "summary": "string" }
Return ONLY valid JSON.`;
  try {
    const msg = await client.messages.create({ model: "claude-sonnet-4-6", max_tokens: 2000, messages: [{ role: "user", content: prompt }] });
    return NextResponse.json(safeJson(extractText(msg)));
  } catch (e) { return safeError(e); }
}
