import React from "react";
import HomePage from "./components/BurgerSite/HomePage";
import NewMessage from "./components/NewMessage/NewMessage";
import RenderPage from "./components/RenderPage/RenderPage";
import Notification from "./components/RenderPage/Notification";
// import MappingPage from "./components/MappingPage";

const Root = () => {
  return (
    <div>
      <HomePage />
      <RenderPage />
      <Notification newMsg={4} />
      <Notification newMsg={3} />

      <NewMessage />

      {/* <MappingPage /> */}
    </div>
  );
};

export default Root;
