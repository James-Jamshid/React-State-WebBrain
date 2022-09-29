import React from "react";
import StatePage from "../BurgerSite/StatePage";
import {
  Burger,
  BUrgerInner,
  ChildInform,
  Img,
  Inform,
  Title,
} from "../BurgerSite/Styled";

const BurgerPage = ({ value }) => {
  return (
    <Burger>
      <Img src={value.lotteria.banner} />
      <BUrgerInner>
        <Title>
          <h1>{value.lotteria.name}</h1>
          <button>ADD</button>
        </Title>
        <Inform>
          <ChildInform>
            <div>
              <p>{value.lotteria.desc}</p>
              <h2>{value.lotteria.price}</h2>
            </div>
            <div>
              <p>{value.lotteria.desc}</p>
              <h2>{value.lotteria.price}</h2>
            </div>
            <div>
              <p>{value.lotteria.desc}</p>
              <h2>{value.lotteria.price}</h2>
            </div>
          </ChildInform>
          <div>
            <StatePage />
          </div>
        </Inform>
      </BUrgerInner>
    </Burger>
  );
};

export default BurgerPage;
