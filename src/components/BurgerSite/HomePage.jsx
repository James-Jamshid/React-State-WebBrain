import React from "react";
import BurgerPage from "../BurgerSite/Burger";
import fruits from "../../Data/burgerdata.json";
import NavbarPage from "./NavbarPage";

import { Child, Container } from "./Styled";

const HomePage = () => {
  return (
    <Container>
      <Child>
        <NavbarPage />
        {fruits.data.burgers.map((value, key) => {
          return <BurgerPage value={value} key={key} />;
        })}
      </Child>
    </Container>
  );
};

export default HomePage;
