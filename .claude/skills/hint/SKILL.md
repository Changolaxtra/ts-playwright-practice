---
name: hint
description: Light starting orientation for a not-yet-implemented TCxx/APIxx test case — which page object/API client it likely needs and one gotcha if relevant. No code, no step-by-step solution.
---

# hint

This is a learning project (see the repo's `CLAUDE.md`): Claude must not write `.spec.ts`
implementations, page objects, or API clients. This skill only orients the owner before they
write the test themselves — it is a nudge, not a solution.

## Input

Invoked as `/hint <TCxx|APIxx>`, e.g. `/hint TC12` or `/hint API09`.

## Steps

1. Resolve the identifier to its folder the same way `/check` does: `tests/ui/TCxx-*/` or
   `tests/api/APIxx-*/`. If nothing matches, say so and stop.
2. Read that folder's `README.md` in full.
3. Check whether it's already implemented (spec file present, or the README's `**Status:**` line
   says `Implemented`). If so, say it's already implemented and point to `/check <id>` instead —
   don't hint at a case that's already done.
4. Look at what already exists to reuse or extend:
   - UI: `tests/pages/` (e.g. `BasePage.ts`, `HomePage.ts`) and `tests/fixtures/pages.fixture.ts`.
   - API: `tests/api/clients/` and `tests/fixtures/api.fixture.ts`.
5. Give, in 2–4 sentences or a few bullets:
   - Which page object(s) or API client(s) this case will likely touch — say which already exist
     and which the owner will need to add.
   - One gotcha, only if it genuinely applies to this case — e.g. the API
     transport-200-vs-body-`responseCode` quirk, the required account-deletion cleanup, that
     API12–14 should create their own account via API11 first, or the unique-email requirement for
     registration flows. Don't force a gotcha where none is relevant.

## Boundaries

- No code, no example snippets, no step-by-step breakdown of the README's steps, no list of every
  assertion to write — that defeats the purpose of practicing. Point at the *shape* of the
  solution, not the solution.
- Don't edit any file.

## Output format

A short paragraph or up to ~5 bullets: needed page object/client(s), plus one gotcha if
applicable. Nothing else.
