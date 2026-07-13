import {
  Code,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router";

function HomePage() {
  return (
    <Container maxW="container.md" py={16}>
      <Heading mb={4}>Eligibility Funnel — Live Coding Task</Heading>
      <Text mb={6}>
        Under EU air passenger regulation, passengers may be owed fixed
        compensation when a flight is disrupted. Build a small frontend app that
        collects the essential information and tells a passenger whether they're
        eligible and for how much.
      </Text>

      <Heading size="md" mb={3}>
        1. Mock Service Worker stub
      </Heading>
      <Text mb={2}>
        API endpoint <Code>POST /api/eligibility</Code> accepting:
      </Text>
      <UnorderedList mb={6} spacing={1}>
        <ListItem>
          <Code>flightDistanceKm</Code> (number)
        </ListItem>
        <ListItem>
          <Code>disruption</Code>: <Code>"delay"</Code> or{" "}
          <Code>"cancellation"</Code>
        </ListItem>
        <ListItem>
          <Code>delayHours</Code> (number, arrival delay)
        </ListItem>
        <ListItem>
          <Code>daysNoticeBeforeDeparture</Code> (number, only for
          cancellations)
        </ListItem>
        <ListItem>
          <Code>extraordinaryCircumstances</Code> (boolean — e.g. weather,
          strikes outside airline control)
        </ListItem>
      </UnorderedList>

      <Heading size="md" mb={3}>
        2. Business rules (simplified EC261)
      </Heading>
      <UnorderedList mb={6} spacing={1}>
        <ListItem>
          Extraordinary circumstances → not eligible, regardless of anything
          else.
        </ListItem>
        <ListItem>Delay: eligible if arrival delay ≥ 3 hours.</ListItem>
        <ListItem>
          Cancellation: eligible if the passenger was notified about the
          disruption less than 14 days before departure.
        </ListItem>
        <ListItem>
          Compensation by distance: ≤1500 km → €250; 1500–3500 km → €400;
          &gt;3500 km → €600.
        </ListItem>
      </UnorderedList>

      <Heading size="md" mb={3}>
        3. Frontend
      </Heading>
      <Text mb={6}>
        Set up an <Code>/eligibility-check</Code> route with a form that
        collects the inputs, validates them, calls the stubbed API, and shows
        the result (eligible + amount, or a clear "not eligible" with reason).
      </Text>

      <Heading size="md" mb={3}>
        4. Tests
      </Heading>
      <Text mb={6}>
        At least a couple of tests where you think they matter most. We care
        more about which cases you test than how many.
      </Text>

      <Text>
        AI coding tools (Cursor, Claude Code, Copilot) are allowed — keep their
        usage visible on the shared screen.
      </Text>
    </Container>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
