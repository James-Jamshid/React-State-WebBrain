import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  h1 {
    font-size: xx-large;
    font-style: italic;
  }
  p {
    color: red;
  }
  h2 {
    border: 1px solid black;
    border-radius: 16px;
    box-shadow: 0 0 15px #000;
    background-color: whitesmoke;
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  position: relative;
  box-sizing: border-box;
  span {
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2596be;
    position: absolute;
    margin: -50px -150px 0 0;
  }
  button {
    width: 150px;
    height: 50px;
    background: green;
    border-radius: 16px;
    cursor: pointer;
    box-shadow: 0 0 12px #000;
    color: white;
    font-size: large;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 300px;
  height: 300px;
`;
