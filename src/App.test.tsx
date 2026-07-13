import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

// Example tests proving the setup works — replace or extend them freely.

describe('App', () => {
  it('renders the home page', () => {
    render(
      <ChakraProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ChakraProvider>,
    )

    expect(
      screen.getByRole('heading', { name: 'Eligibility Funnel — Live Coding Task' }),
    ).toBeInTheDocument()
  })
})

describe('MSW', () => {
  it('serves mocked API responses in tests', async () => {
    const response = await fetch('/api/health')

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ status: 'ok' })
  })
})
