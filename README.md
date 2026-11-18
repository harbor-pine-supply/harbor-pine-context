# harbor-pine-context

A small demo repo for the PlanGuardShip lessons on understanding context. Harbor & Pine Supply is a
fictional company, and every value here is made up.

- `main`: a short CLAUDE.md that points at the reference docs in `docs/reference/`, read only when needed.
- `bloated`: the same code, with every reference doc and old session notes pasted into CLAUDE.md.

## Lab: bloated versus clean context
1. Clone the repo and run `npm test` (Node 18 or later).
2. On the `bloated` branch, start Claude Code, ask it to read all of `logs/sync-2026-11-17.log`, then give it the task below. Run `/context` before the task.
3. On `main`, in a fresh session, give it the same task. Run `/context` first.
4. Compare: what loaded before you typed, how long each took, what each read, and whether each followed the pricing rules.

Task: "Add shipping to the order total, following our pricing rules. Add a test, then run npm test."
