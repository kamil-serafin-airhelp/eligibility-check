import { createServer } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    routes() {
      // Example route proving Mirage is wired up — used by src/App.test.tsx.
      this.get('/api/health', () => ({ status: 'ok' }))

      // TODO: implement POST /api/eligibility here (see README.md).

      // Let anything else hit the real network.
      this.passthrough()
    },
  })
}
