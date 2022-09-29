import React from "react";
import { Container, Image, Img } from "./Style";
import img1 from "../../assets/Bulb/off.png";
import img2 from "../../assets/Bulb/on.png";
// bu kodlar eski reactdagi kodlardir

class RenderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
    };
  }
  render() {
    const onChange = () => {
      this.setState({
        light: !this.state.light,
      });
    };
    return (
      <Container>
        <h1>Rendering lesson</h1>
        <Image>
          {this.state.light ? <Img src={img1} /> : <Img src={img2} />}
        </Image>
        <button onClick={onChange}>Click</button>
      </Container>
    );
  }
}

export default RenderPage;
