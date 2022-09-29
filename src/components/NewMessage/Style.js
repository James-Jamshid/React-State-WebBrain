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
