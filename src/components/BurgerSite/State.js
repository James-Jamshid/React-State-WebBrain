import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-style: inherit;
  }

  button {
    font-size: x-large;
    color: white;

    width: 30px;
    height: 30px;

    background: green;
    /* border: none; */
    cursor: pointer;
  }
  button:hover {
    background: darkgreen;
    transition: all 0.3 ease-in-out;
  }
  .minus {
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
  .plus {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;
