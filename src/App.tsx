import { Route, Routes } from 'react-router'
import { Container, Heading, Text } from '@chakra-ui/react'

function HomePage() {
  return (
    <Container maxW="container.md" py={16}>
      <Heading mb={4}>Eligibility Funnel</Heading>
      <Text color="gray.600">
        Starter is wired up: React Router, Chakra UI, MSW and Vitest. Build the
        task from here — see README.md.
      </Text>
    </Container>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
