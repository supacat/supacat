# supacat

This file is the only agent handbook for this repository. `CLAUDE.md` just forwards here (`@AGENTS.md`) — do not copy rules into it.

## Git & workflow

- Never commit to `main`. Never push `main`. Branch first. Name the branch `<type>/<slug>` from the Conventional Commit types in the next bullet, push it, and open the PR (see the pull-request bullet). Keep commits scoped and don't rewrite published history unless explicitly asked.
- Commit messages are single-line Conventional Commits: `type(scope): summary` — imperative mood, lowercase, no trailing period, ≤72 chars, no body, no footer. No hooks enforce this — keep to it. Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert. Recommended scopes: content, ui, seo, theme, a11y.
- Once the branch is pushed, open the PR with `gh pr create --base main`: title it like a commit line (`type(scope): summary`), keep the body short (what changed, why, how it was verified), assign it to `joulse` (`--assignee joulse`), and add exactly one label — the Conventional Commit type from the title (`--label feat|fix|chore|refactor|docs|test|style|perf|build|ci|revert`; run `gh label create <type>` first if it is missing; don't use the GitHub defaults `bug`/`enhancement`/`documentation`). Do not request reviewers: `joulse` is the only collaborator and the author, and GitHub rejects the author as a reviewer — request any other collaborator added later.
- After a session that pushed commits, run `bun run changelog` — it folds the new Conventional Commits into `CHANGELOG.md` and mirrors them to the Obsidian project note — then commit the result as `docs: update changelog`.
- Run the checks (`bun run lint`, `bun run typecheck`, `bun run build`) before reporting done.

## Scope

- supacat.io is a static marketing site: no database, no auth, no email, no env vars, no secrets — by permanent decision, not as a gap. Don't add service integrations (newsletter or contact capture included) without an explicit ask.

## Code comments

- Comments explain what and why, in present tense, describing the code as it is now. Never reference the development process — no "migration", "PR", "legacy"/"new", "we", or "for now". A comment that becomes false once the change is no longer recent is wrong — rewrite it.

## Unslop

- Smallest diff that still behaves the same
- No new helpers, layers, or "just in case" branches
- Comments only when they explain a non-obvious why
- Ads, billing, consent, streak rules are product law — do not "clean" them into something nicer
