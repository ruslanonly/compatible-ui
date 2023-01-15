import React from 'react';
import { Button } from "compatible-ui"
import { Container } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';

function App() {
  return (
    <VStack gap="5rem">
      <Container maxW="container.md" centerContent>
        <Button>Приветы</Button>
      </Container>
      <Container maxW="container.md" centerContent>
        <Button>Приветы</Button>
      </Container>
    </VStack>
  );
}

export default App;
