// Builds the static site into dist/ and writes dist/config.js from environment variables.
// Vercel runs this on every deploy (see vercel.json). Locally: `node build.mjs` then serve dist/.
import { cpSync, rmSync, writeFileSync, existsSync, readFileSync } from "node:fs";

// Local runs can keep the values in .env.local (never committed); Vercel's own env vars win.
if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const url = (process.env.SUPABASE_URL || "").trim().replace(/\/+$/, "");
const key = (process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || "").trim();
const google = process.env.ENABLE_GOOGLE_SIGNIN === "true";

// The key ends up in the browser, so refuse anything that isn't a public key.
function isSecret(k) {
  if (k.startsWith("sb_secret_")) return true;
  const parts = k.split(".");
  if (parts.length === 3) {
    try { return JSON.parse(Buffer.from(parts[1], "base64url").toString()).role === "service_role"; } catch { return false; }
  }
  return false;
}
if (key && isSecret(key)) {
  console.error("SUPABASE_PUBLISHABLE_KEY is a secret (service role) key. Use the publishable or anon key instead; the secret key must never go in a website.");
  process.exit(1);
}
if (url && !/^https:\/\/[^/]+$/.test(url)) {
  console.error("SUPABASE_URL should look like https://abcdefgh.supabase.co");
  process.exit(1);
}

rmSync("dist", { recursive: true, force: true });
cpSync("site", "dist", { recursive: true });
writeFileSync("dist/config.js", "window.TRACKER_CONFIG = " + JSON.stringify({ supabaseUrl: url, supabaseKey: key, google }) + ";\n");
console.log(url && key ? "Built dist/ with accounts on (" + url + ")" : "Built dist/ without accounts: SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY is not set, so ticks stay in each browser.");
