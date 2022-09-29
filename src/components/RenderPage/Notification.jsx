import React from "react";
import { Container } from "./Style";
// import { Container, Image, Img } from "./Style";
// import img1 from "../../assets/Bulb/off.png";
// import img2 from "../../assets/Bulb/on.png";
// bu kodlar eski reactdagi kodlardir

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
    };
  }
  render() {
    return (
      <Container>
        <p>
          bu yerda iconlarni ustiga <br /> sms kelganligini habari korinib{" "}
          <br /> br turishi kerak bolsa shu kodlarni yoziladi
        </p>
        <h2>
          Message: <span>{this.props.newMsg >= 0 && this.props.newMsg}</span>
        </h2>
      </Container>
    );
  }
}

export default Notification;
