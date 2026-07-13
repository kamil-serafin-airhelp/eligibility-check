import { http, HttpResponse } from 'msw'

export const handlers = [
  // Example handler proving MSW is wired up — used by src/App.test.tsx.
  http.get('/api/health', () => HttpResponse.json({ status: 'ok' })),

  // TODO: implement POST /api/eligibility here (see README.md).
]
