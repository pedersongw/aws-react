import React from "react";
import axios from "axios";

class Component extends React.Component {
  state = {
    message: "nothing yet",
    secondMessage: "button nothing yet",
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://garrett-env.eba-4k3rxv8v.us-east-2.elasticbeanstalk.com"
      );
      this.setState({ message: data });
    } catch (err) {
      console.log(err);
    }
  }
  buttonClicked = () => {
    console.log("button clicked");
  };

  render() {
    return (
      <div>
        <h1>The message</h1>
        <h2>{this.state.message}</h2>
        <h1>Button message</h1>
        <h2>{this.state.secondMessage}</h2>

        <button onClick={() => this.buttonClicked()}>Button</button>
      </div>
    );
  }
}

export default Component;
