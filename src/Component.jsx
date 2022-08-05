import React from "react";
import axios from "axios";
import styles from "./Component.module.css";

class Component extends React.Component {
  state = {
    message: null,
    images: [],
    drawn: [],
    highlighed: null,
  };

  drawClicked = async () => {
    if (this.state.drawn.length < 5) {
      try {
        const deck = localStorage.getItem("deck");
        const { data } = await axios.get(
          `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
        );
        console.log(data);
        let drawn = [...this.state.drawn];
        for (let i = 0; i < data.cards.length; i++) {
          drawn.push(data.cards[i]);
        }
        this.setState({ message: data, drawn: drawn });
      } catch (error) {
        this.setState({ message: error });
        console.log(error);
      }
    }
  };

  returnClicked = async () => {
    try {
      const deck = localStorage.getItem("deck");
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck}/return/`
      );
      console.log(data);
      this.setState({ message: data, drawn: [] });
    } catch (error) {
      this.setState({ message: error });
      console.log(error);
    }
  };

  highlight = (event) => {
    let id = Number(event.target.id.split("_")[1].slice(-1));
    this.setState({ highlighted: id });
    let element = document.getElementById(event.target.id);
    let rect = element.getBoundingClientRect();
    console.log(rect);
  };

  mapImages = () => {
    return this.state.drawn.map((card, index) => (
      <img
        className={
          this.state.highlighted === index
            ? `${styles.image} ${styles.highlighted}`
            : styles.image
        }
        id={styles[`card${index.toString()}`]}
        key={index}
        alt="card"
        src={card.image}
        onClick={(event) => this.highlight(event)}
      ></img>
    ));
  };

  render() {
    return (
      <div>
        <h2 className={styles.message}>{JSON.stringify(this.state.message)}</h2>
        <button onClick={() => this.drawClicked()}>Draw</button>
        <button onClick={() => this.returnClicked()}>return</button>

        <div className={styles.hand}>
          {this.state.drawn !== [] ? this.mapImages() : null}
        </div>
      </div>
    );
  }
}

export default Component;
