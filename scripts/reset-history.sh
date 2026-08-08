#!/usr/bin/env bash
set -euo pipefail

# One-way history reset: archives the current history to a dated remote
# branch, squashes the working tree into a single fresh commit on main,
# and force-pushes. Run from the repo root.

# Safety gates: clean tree (staged, unstaged, AND untracked), on main,
# origin reachable.
[ -z "$(git status --porcelain)" ] || { echo "Working tree not clean. Abort."; exit 1; }
[ "$(git symbolic-ref --short HEAD)" = "main" ] || { echo "Not on main. Abort."; exit 1; }
git remote get-url origin >/dev/null 2>&1 || { echo "No origin remote. Abort."; exit 1; }

# Archive old history before destroying it.
archive_branch="archive/pre-reset-$(date +%Y%m%d)"
if git rev-parse --verify --quiet "$archive_branch" >/dev/null; then
  echo "Archive branch $archive_branch already exists. Abort."
  exit 1
fi
git branch "$archive_branch"
git push origin "$archive_branch"

# Squash everything into one fresh commit. `git add -A` on a fresh orphan
# stages by the working tree's CURRENT .gitignore — verify anyway, never
# trust it blind (.env.example is the one env-named file allowed through).
git checkout --orphan _fresh
git add -A
if git diff --cached --name-only |
  grep -Ei '(^|/)\.env(\.|$)|\.pem$|credentials|\.p12$|\.mobileprovision$' |
  grep -v '\.env\.example$'; then
  echo "Refusing to commit: the files above look like secrets. Fix .gitignore and re-run."
  git checkout -f main
  git branch -D _fresh 2>/dev/null || true
  exit 1
fi

# --no-verify: pre-commit would run lint-staged over every file in the
# repo, so any pre-existing lint error would block the reset; the tree is
# already verified by the normal checks before this script runs.
git commit --no-verify -m "chore: reset history, start conventional commits"
git branch -D main
git branch -m main
git push --force origin main

echo "Done. Old history archived at origin/$archive_branch."
