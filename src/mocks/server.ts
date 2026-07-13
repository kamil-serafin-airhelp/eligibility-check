import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Node-side MSW server used in Vitest (see src/test/setup.ts).
export const server = setupServer(...handlers)
