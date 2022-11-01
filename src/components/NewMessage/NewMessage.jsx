import React from "react"
import { Container } from "./Style"

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      light: true,
      status: "full",
    }
  }
  render() {
    const onFull = () => {
      this.setState({
        status: "full",
      })
    }
    const onHalf = () => {
      this.setState({
        status: "Half",
      })
    }
    const onZero = () => {
      this.setState({
        status: "none",
      })
    }
    return (
      <Container>
        <h1> product: {this.state.status}</h1>
        <button onClick={onFull}>full</button>
        <button onClick={onHalf}>half</button>
        <button onClick={onZero}>half</button>

        <p>
          bu yerda render orqali buttonlarni bosish orqali product dagi
          ma'lumotlarno ozgartirish mumkin!
        </p>
      </Container>
    )
  }
}

export default NewMessage
