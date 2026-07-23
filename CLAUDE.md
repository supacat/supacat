# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git & workflow

- Work in the working tree on the current branch (normally `main`). Committing, branching, and pushing are fine when the task calls for it — keep commits scoped, and don't rewrite published history unless explicitly asked.
- Commit messages are single-line Conventional Commits: `type(scope): summary` — imperative mood, lowercase, no trailing period, ≤72 chars, no body, no footer (enforced by commitlint). Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert. Recommended scopes: content, ui, seo, theme, a11y.
- After a session that pushed commits, run `bun run changelog` — it folds the new Conventional Commits into `CHANGELOG.md` and mirrors them to the Obsidian project note — then commit the result as `docs: update changelog`.
- Run the checks (`bun run lint`, `bun run typecheck`, `bun run build`) before reporting done.

## Scope

- supacat.io is a static marketing site: no database, no auth, no email, no env vars, no secrets — by permanent decision, not as a gap. Don't add service integrations (newsletter or contact capture included) without an explicit ask.

## Code comments

- Comments explain what and why, in present tense, describing the code as it is now. Never reference the development process — no "migration", "PR", "legacy"/"new", "we", or "for now". A comment that becomes false once the change is no longer recent is wrong — rewrite it.
