import React from "react";
import BurgerPage from "./Burger";
import fruits from "../Data/burgerdata.json";

import {
  Child,
  // BUrgerInner,
  // Button,
  // Child,
  Container,
  // Img,
  // Inform,
  // Title,
} from "./Styled";

const HomePage = ({ value }) => {
  return (
    <Container>
      <Child>
        {fruits.data.burgers.map((value, index) => {
          return <BurgerPage value={value} />;
        })}
      </Child>
    </Container>
  );
};

export default HomePage;
