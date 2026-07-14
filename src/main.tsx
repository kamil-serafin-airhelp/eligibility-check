import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  try {
    await worker.start({ onUnhandledRequest: 'bypass' })
  } catch (error) {
    // Service Workers are not supported in some sandboxes (e.g. StackBlitz
    // WebContainers), so browser API mocking is unavailable there. Tests are
    // unaffected — they use msw/node. Run locally or on CodeSandbox instead.
    console.warn(
      '[msw] Service Worker registration failed — API mocking is disabled in this environment.',
      error,
    )
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </StrictMode>,
  )
})
