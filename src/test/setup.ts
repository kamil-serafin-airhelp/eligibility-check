import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach } from 'vitest'
import type { Server } from 'miragejs'
import { makeServer } from '../mocks/server'

// A fresh Mirage server for every test — routes from src/mocks/server.ts.
let server: Server

beforeEach(() => {
  server = makeServer({ environment: 'test' })
})

afterEach(() => {
  server.shutdown()
})
