#!/usr/bin/env node
// Folds Conventional Commit subjects since the last recorded run into
// CHANGELOG.md's "[Unreleased]" groups, and mirrors the new entries into
// the Obsidian project note. Zero dependencies; run from the repo root:
// `pnpm changelog`. The last processed commit is tracked via an HTML
// comment in CHANGELOG.md; if that commit no longer exists (history was
// reset), the whole history is re-read.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const VAULT_NOTE =
  "/Users/joulse/Library/Mobile Documents/iCloud~md~obsidian/Documents/Vault/Supacat/Projects/Supacat Website.md";

const CHANGELOG = "CHANGELOG.md";
const MARKER = /<!-- changelog:last-commit ([0-9a-f]{7,40}) -->\n?/;
const SELF = "docs: update changelog";
const CC = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(([^)]+)\))?!?: (.+)$/;
const GROUPS = [
  ["Added", ["feat"]],
  ["Fixed", ["fix"]],
  ["Changed", ["refactor", "perf", "style"]],
  ["Documentation", ["docs"]],
  ["Maintenance", ["chore", "build", "ci", "test", "revert"]],
];

const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();

let changelog = readFileSync(CHANGELOG, "utf8");
let since = changelog.match(MARKER)?.[1] ?? null;
if (since) {
  try {
    git("cat-file", "-e", `${since}^{commit}`);
  } catch {
    since = null;
  }
}

const head = git("rev-parse", "HEAD");
const subjects = git("log", since ? `${since}..HEAD` : "HEAD", "--no-merges", "--pretty=%s")
  .split("\n")
  .filter(Boolean)
  .reverse();

const entries = [];
for (const s of subjects) {
  if (s === SELF) continue;
  const m = s.match(CC);
  if (m) entries.push({ type: m[1], scope: m[3], summary: m[4] });
}

if (entries.length === 0) {
  console.log("changelog: no new conventional commits since last run");
  process.exit(0);
}

const line = e => `- ${e.scope ? `**${e.scope}:** ` : ""}${e.summary}`;

let [intro, rest = ""] = changelog.split("## [Unreleased]");
rest = rest.replace(MARKER, "");
for (const [title, types] of GROUPS) {
  const items = entries.filter(e => types.includes(e.type)).map(line);
  if (items.length === 0) continue;
  const re = new RegExp(`### ${title}\\n\\n?((?:- .*\\n)*)`);
  const existing = rest.match(re);
  if (existing) {
    const have = new Set(existing[1].split("\n").filter(Boolean));
    const added = items.filter(i => !have.has(i));
    if (added.length === 0) continue;
    rest = rest.replace(re, `### ${title}\n\n${existing[1]}${added.join("\n")}\n`);
  } else {
    rest = rest.replace(/\n*$/, `\n\n### ${title}\n\n${items.join("\n")}\n`);
  }
}
writeFileSync(
  CHANGELOG,
  `${intro}## [Unreleased]${rest.replace(/\n*$/, "\n")}\n<!-- changelog:last-commit ${head} -->\n`,
);
console.log(`changelog: recorded ${entries.length} ${entries.length === 1 ? "entry" : "entries"}`);

if (existsSync(VAULT_NOTE)) {
  const today = new Date().toISOString().slice(0, 10);
  const bullets = entries
    .map(e => `- ${today} · ${e.type}${e.scope ? `(${e.scope})` : ""}: ${e.summary}`)
    .join("\n");
  let note = readFileSync(VAULT_NOTE, "utf8");
  if (note.includes("## Changelog\n")) {
    note = note.replace("## Changelog\n", `## Changelog\n\n${bullets}\n`);
  } else if (note.includes("## Related")) {
    note = note.replace("## Related", `## Changelog\n\n${bullets}\n\n## Related`);
  } else {
    note = `${note.replace(/\n*$/, "\n")}\n## Changelog\n\n${bullets}\n`;
  }
  writeFileSync(VAULT_NOTE, note);
  console.log(`changelog: mirrored to ${VAULT_NOTE.split("/").pop()}`);
} else {
  console.warn(`changelog: vault note not found, skipped mirror (${VAULT_NOTE})`);
}
