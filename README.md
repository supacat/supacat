# Supacat

[supacat.io](https://supacat.io) — the marketing site for Supacat, a software studio. A single page introducing the studio and linking out to its projects (Neeed Directory, Lock In), merch, and contact.

## Static by design

The site is fully static by permanent decision — no database, no auth, no email, no environment variables, no secrets. This is not a gap to fill: service integrations (including newsletter or contact capture) are out of scope unless explicitly requested.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) with [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4 for styling, [Motion](https://motion.dev) for animation
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode, [Geist](https://vercel.com/font) fonts, [Lucide](https://lucide.dev) icons
- [Bun](https://bun.sh) as package manager and script runner (`bun@1.3.11`)
- [Oxlint](https://oxc.rs) (`.oxlintrc.json`) and [Oxfmt](https://oxc.rs) (`.oxfmtrc.json`) for linting and formatting

## Development

```sh
bun install
bun run dev
```

Then open <http://localhost:3000>.

### Commands

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `bun run dev`        | Start the development server                 |
| `bun run build`      | Build for production                         |
| `bun run start`      | Serve the production build                   |
| `bun run lint`       | Lint with Oxlint (`lint:fix` to autofix)     |
| `bun run format`     | Check formatting with Oxfmt (`format:fix` to write) |
| `bun run typecheck`  | Type-check with TypeScript                   |
| `bun run changelog`  | Fold new commits into `CHANGELOG.md`         |
| `bun run clean`      | Remove build artifacts and `node_modules`    |

Run `bun run lint`, `bun run typecheck`, and `bun run build` before considering a change done.

## Structure

- `src/app` — App Router pages, metadata, sitemap, robots, manifest
- `src/components` — header, sections, link rows, reveal animation, theme toggle
- `src/styles` — global Tailwind styles
- `scripts` — changelog generator

## Conventions

Commits are single-line [Conventional Commits](https://www.conventionalcommits.org) (`type(scope): summary`). There are no git hooks — conventions live in [CLAUDE.md](CLAUDE.md).
