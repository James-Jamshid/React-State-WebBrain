import styled from "styled-components"
export const Container = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background: darkgrey;
  gap: 10px;
  padding: 0 10px;
  div {
    display: flex;
  }
  h1 {
    font-size: 20px;
    font-style: inherit;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    white-space: nowrap;
    //yozuvlar 1tta linyada uzun bolib turadi
    opacity: 0.8;
    //opacity korinish darajasi
  }
  input {
    width: 150px;
    height: 30px;
    background-color: whitesmoke;
    border-radius: 12px;
    border: none;
    padding-left: 20px;
    font-size: 14px;
    font-style: italic;
  }
`
