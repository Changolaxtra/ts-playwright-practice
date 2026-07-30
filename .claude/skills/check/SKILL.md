---
name: check
description: Reviews an already-implemented TCxx/APIxx test case against its README and this repo's CLAUDE.md conventions. Feedback only — never edits the spec, page object, or API client.
---

# check

This is a learning project (see the repo's `CLAUDE.md`): the point is for the owner to practice
writing Playwright/TypeScript themselves. This skill gives feedback on an implementation that
already exists — it must never edit, patch, or rewrite code as part of running this skill.

## Input

Invoked as `/check <TCxx|APIxx>`, e.g. `/check TC01` or `/check API05`.

## Steps

1. Resolve the identifier to its folder: `tests/ui/TCxx-*/` for a `TCxx` id, `tests/api/APIxx-*/`
   for an `APIxx` id. If nothing matches, say so and stop.
2. Read that folder's `README.md` in full — it is the source of truth for steps, preconditions,
   and expected result. Don't invent scope beyond it.
3. Locate the implementation:
   - UI: `TCxx.spec.ts` in the same folder, the page object(s) it uses under `tests/pages/`, and
     the wiring in `tests/fixtures/pages.fixture.ts`.
   - API: `APIxx.spec.ts` in the same folder, the API client(s) it uses under `tests/api/clients/`,
     and the wiring in `tests/fixtures/api.fixture.ts`.
   - If the spec file doesn't exist yet, say there's nothing to review yet and suggest
     `/hint <id>` instead, then stop.
4. Re-read the project's root `CLAUDE.md` for the conventions to check against.
5. Review on two axes:
   - **README coverage** — does the spec exercise every step and assert the actual expected
     result? Flag missing steps, wrong endpoint/method, assertions on the wrong element/field,
     or scope quietly added/dropped versus the README.
   - **Convention adherence**, per `CLAUDE.md`:
     - Strict TypeScript: no `any`, no non-null `!`, proper types for payloads/fixtures, would
       `npm run typecheck` pass.
     - Locators: role/label/text-based over CSS/XPath; `data-testid` only when nothing accessible
       fits.
     - No `waitForTimeout`; web-first assertions (`expect(locator).toBeVisible()` etc.) instead of
       manual state checks.
     - `expect` calls live in the spec, not inside page objects/API clients.
     - Page objects/API clients used via the fixtures, not instantiated ad hoc in the spec.
     - Required cleanup: TC01/TC14–16/TC23/TC24 must delete the account they create; API12–14
       must create their own account via API11 and delete it via API12 rather than relying on a
       fixed seeded account. Unique email per run (timestamp/uuid), not a hardcoded literal.
     - API specs assert on the JSON body's `responseCode`/`message`, not `response.status()` /
       `response.ok()` — automationexercise always returns transport-level 200.
     - Reasonable use of `test.step()` for a long flow; test titles are behavior-focused, not
       implementation-focused.
     - Env values come from `process.env` / `.env`, never hardcoded `baseURL`s or tokens.
6. Report findings as a short list, roughly grouped into README coverage vs. best practices, each
   with the file (and line, if useful) and a one-line reason. Lead with the highest-impact issues;
   don't pad the list with trivial nitpicks if the implementation is solid — say so instead.

## Boundaries

- Never edit any file as part of this skill, and don't offer inline fixes or diffs — the owner
  applies changes themselves. If asked to also fix what was found, remind them this skill is
  feedback-only by design and confirm they're explicitly asking you to switch out of review mode
  for this request (per `CLAUDE.md`'s rule about not writing test code unless explicitly told to
  for that specific request).
- Don't grade style preferences that CLAUDE.md doesn't actually mandate.

## Output format

One short summary line, then bullets. No code diffs, no rewritten snippets.
