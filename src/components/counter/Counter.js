import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Counter() {
  const [counter, setCounter] = useState("0");

  return (
    <Container>
      <h1 >{counter}</h1>
      <Button variant="success" onClick={() => setCounter(+counter + 1)}>Click me!</Button>{' '}
    </Container>
  );
};

export default Counter;
