import React, { useState } from "react";
import { Container } from "./NavbarStyle";

const NavbarPage = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSurname = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <div>
        <h1>name: </h1>
        <input onChange={onChange} type="text" placeholder="name" />
        {text}
      </div>
      <div>
        <h1>family name: </h1>
        <input onChange={onSurname} type="text" placeholder="surname" />
        {search}
      </div>
    </Container>
  );
};

export default NavbarPage;
