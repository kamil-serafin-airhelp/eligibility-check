# Eligibility Funnel — Live Coding Task

Under EU air passenger regulation, passengers may be owed fixed compensation when a flight is disrupted. You have to collect essential information from the user to complete this task. Build a small frontend app that tells a passenger whether they're eligible and for how much.

## Stack

Stack: Vite, React, TypeScript, React Router, Chakra UI, Mirage JS (API mocking).

Other:

- React Query
- Valtio
- Redux or Zustand
- React Hook Form
- Zod

## Requirements

### 1. Mirage JS stub — API endpoint `POST /api/eligibility` accepting:

- `flightDistanceKm` (number)
- `disruption`: `"delay"` or `"cancellation"`
- `delayHours` (number, arrival delay)
- `daysNoticeBeforeDeparture` (number, only for cancellations)
- `extraordinaryCircumstances` (boolean — e.g. weather, strikes outside airline control)

### 2. Business rules (simplified EC261):

- Extraordinary circumstances → not eligible, regardless of anything else.
- Delay: eligible if arrival delay ≥ 3 hours.
- Cancellation: eligible if the passenger was notified about the disruption less than 14 days before departure.
- Compensation by distance: ≤1500 km → €250; 1500–3500 km → €400; >3500 km → €600.

### 3. Frontend

Set up an `/eligibility-check` route with a form that collects the inputs, validates them, calls the stubbed API, and shows the result (eligible + amount, or a clear "not eligible" with reason).

### 4. Tests

At least a couple of tests where you think they matter most. We care more about **which** cases you test than how many.

## Getting started

Requires Node.js ≥ 20 and pnpm. Works locally and in browser sandboxes (StackBlitz, CodeSandbox) — Mirage intercepts requests in-page, no Service Worker needed.

```bash
pnpm install
pnpm dev        # dev server at http://localhost:5173
pnpm test       # run tests once
pnpm test:watch # run tests in watch mode
pnpm lint       # oxlint
pnpm build      # typecheck + production build
```

## What's already wired up

- **Vite + React + TypeScript** — entry point `src/main.tsx`, single route in `src/App.tsx`.
- **React Router** — `BrowserRouter` mounted, add routes in `src/App.tsx`.
- **Chakra UI** — `ChakraProvider` mounted, use any Chakra components.
- **Mirage JS** — server started in `src/main.tsx`, routes live in `src/mocks/server.ts`. Add your `POST /api/eligibility` route there. An example `GET /api/health` route shows the wiring works.
- **Vitest + Testing Library** — example tests in `src/App.test.tsx`, a fresh Mirage server runs in every test via `src/test/setup.ts`.

Also installed and ready to use (optional, pick what you like): **React Query, Valtio, Redux Toolkit, Zustand, React Hook Form, Zod**.

## Notes

- AI coding tools (Cursor, Claude Code, Copilot) are allowed — keep their usage visible on the shared screen.
