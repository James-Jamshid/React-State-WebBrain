import React, { useState } from "react";
import { Container } from "./State";

const StatePage = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <Container>
      <button onClick={Decrement} className="minus">
        -
      </button>
      <h1>{count}</h1>
      <button onClick={Increment} className="plus">
        +
      </button>
    </Container>
  );
};

export default StatePage;
