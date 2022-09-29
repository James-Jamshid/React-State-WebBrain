import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding: 30px;
`;
export const Child = styled.div`
  width: 500px;
  height: 800px;
  align-items: center;
  flex-direction: column-reverse;
  border-radius: 16px;
  box-sizing: border-box;
  background: whitesmoke;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;
export const Burger = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 140px;
  padding: 15px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
`;
export const Img = styled.img`
  width: 100px;
  height: 100%;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
`;
export const BUrgerInner = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  gap: 40px;
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    font-style: bold;
    font-family: sans-serif;
  }
  button {
    background: green;
    border: none;
    border-radius: 12px;
    width: 90px;
    height: 30px;
    cursor: pointer;
    color: white;
  }
  button:hover {
    background: darkgreen;
  }
`;
export const Inform = styled.div`
  justify-content: space-between;
  display: flex;

  width: 100%;
`;

export const ChildInform = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-evenly;

  p {
    font-size: 14px;
    font-style: inherit;
    font-family: Arial;
    white-space: nowrap;
    //yozuvlar 1tta linyada uzun bolib turadi
    opacity: 0.3;
    //opacity korinish darajasi
  }
  h2 {
    font-size: 18px;
    font-style: inherit;
    font-family: Arial;
  }
`;
// export const Button = styled.div``;
