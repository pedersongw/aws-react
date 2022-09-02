import React from "react";
import axios from "axios";
import styles from "./Blackjack.module.css";

class Blackjack extends React.Component {
  state = {
    message: null,
    images: [],
    firstDeal: false,
    hold: false,
    dealerHold: false,
    bust: false,
    dealerBust: false,
    playerDrawn: [],
    dealerDrawn: [],
    playerScore: [],
    dealerScore: [],
    clickedCard: [],
  };

  drawClicked = async () => {
    try {
      const deck = localStorage.getItem("deck");
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
      );
      console.log(data);
      let playerDrawn = [...this.state.playerDrawn];
      for (let i = 0; i < data.cards.length; i++) {
        playerDrawn.push(data.cards[i]);
      }
      this.setState({ message: data, playerDrawn: playerDrawn }, () =>
        this.updateScore("player")
      );
      let number = Math.floor(Math.random() * 1000 + 2000);
      setTimeout(() => this.drawDealer(), number);
    } catch (error) {
      this.setState({ message: error });
      console.log(error);
    }
  };

  holdClicked = () => {
    this.setState({ hold: true });
    let number = Math.floor(Math.random() * 1000 + 2000);
    setTimeout(() => this.drawDealer(), number);
  };

  drawDealer = async () => {
    const { dealerScore, dealerBust, bust } = this.state;
    let lowScore = dealerScore[0];
    let highScore = dealerScore[1];
    let draw = false;
    if (dealerBust || bust) {
      return;
    }
    if (!lowScore) {
      draw = true;
      console.log("drawing");
    } else if (highScore === 21 || lowScore === 21) {
      draw = false;
      console.log("not drawing", lowScore, highScore);
      this.setState({ dealerHold: true });
    } else if (
      (highScore && highScore < 17) ||
      (highScore && highScore > 21 && lowScore < 17) ||
      (!highScore && lowScore < 17)
    ) {
      draw = true;
      console.log("drawing");
    } else {
      draw = false;
      console.log("not drawing", lowScore, highScore);
      this.setState({ dealerHold: true });
    }
    if (draw) {
      try {
        const deck = localStorage.getItem("deck");
        const { data } = await axios.get(
          `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
        );
        console.log(data);
        let dealerDrawn = [...this.state.dealerDrawn];
        for (let i = 0; i < data.cards.length; i++) {
          dealerDrawn.push(data.cards[i]);
        }
        this.setState({ message: data, dealerDrawn: dealerDrawn }, () =>
          this.updateScore("dealer")
        );
      } catch (error) {
        this.setState({ message: error });
        console.log(error);
      }
    }
  };

  drawDealerIfHeld = () => {
    if (this.state.hold) {
      let number = Math.floor(Math.random() * 1000 + 2000);
      setTimeout(() => this.drawDealer(), number);
    }
  };

  updateScore = (who) => {
    console.log("upate player score called");

    let varDrawn = `${who}Drawn`;
    let varScore = `${who}Score`;

    let codes = [];
    let hand = [...this.state[varDrawn]];
    let aces = hand.filter((card) => card.code[0] === "A");
    for (let i = 0; i < hand.length; i++) {
      let code = hand[i].code[0];
      if (code === "J" || code === "Q" || code === "K" || code === "0") {
        codes.push(10);
      } else if (code === "A") {
        codes.push("A");
      } else {
        codes.push(Number(code));
      }
    }

    let oneOrTwoOptions = [];
    if (aces.length === 0) {
      let counter = 0;
      for (let i = 0; i < codes.length; i++) {
        counter += codes[i];
      }
      oneOrTwoOptions.push(counter);
      console.log("no aces");
    } else {
      let arr = codes.filter((code) => code !== "A");
      let first;
      let second;
      let counter = 0;
      for (let i = 0; i < arr.length; i++) {
        counter += arr[i];
      }
      let num = aces.length - 1;
      first = counter + num + 1;
      second = counter + num + 11;
      oneOrTwoOptions.push(first, second);
      console.log("multiple aces");
    }
    if (oneOrTwoOptions[0] > 21) {
      who === "player"
        ? this.setState({ bust: true })
        : this.setState({ dealerBust: true });
    }

    who === "dealer"
      ? this.setState({ [varScore]: oneOrTwoOptions }, () =>
          this.drawDealerIfHeld()
        )
      : this.setState({ [varScore]: oneOrTwoOptions });
    console.log(oneOrTwoOptions);
  };

  scoreToText = (who) => {
    let variable = `${who}Score`;
    console.log("score to text called", this.state[variable]);
    if (!this.state[variable][0]) {
      return null;
    } else if (this.state[variable][1]) {
      return (
        this.state[variable][0].toString() +
        " : " +
        this.state[variable][1].toString()
      );
    } else {
      return this.state[variable].toString();
    }
  };

  newDeck = async () => {
    try {
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/`
      );
      console.log(data);
      this.setState({
        message: data,
        playerDrawn: [],
        dealerDrawn: [],
        playerScore: [],
        dealerScore: [],
        clickedCard: [],
      });
      localStorage.setItem("deck", data["deck_id"]);
    } catch (error) {
      this.setState({ message: error });
      console.log(error);
    }
  };

  drawFirstTwo = async () => {
    try {
      const deck = localStorage.getItem("deck");
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=4`
      );
      console.log(data);
      const { cards } = data;
      let playerDrawn = [cards[0], cards[1]];
      let dealerDrawn = [cards[2], cards[3]];
      this.setState(
        {
          message: data,
          dealerDrawn: dealerDrawn,
          playerDrawn: playerDrawn,
          firstDeal: true,
        },
        () => {
          this.updateScore("dealer");
          this.updateScore("player");
        }
      );
    } catch (error) {
      this.setState({ message: error });
      console.log(error);
    }
  };

  shuffleDeck = async () => {
    try {
      const deck = localStorage.getItem("deck");
      const { data: dataReturn } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck}/return/`
      );
      const { data: dataShuffle } = await axios.get(
        `https://www.deckofcardsapi.com/api/deck/${deck}/shuffle/`
      );
      console.log(dataReturn, dataShuffle);
      this.setState(
        {
          message: dataShuffle,
          playerDrawn: [],
          dealerDrawn: [],
          playerScore: [],
          dealerScore: [],
          clickedCard: [],
          hold: false,
          dealerHold: false,
          bust: false,
          dealerBust: false,
        },
        () => this.drawFirstTwo()
      );
    } catch (error) {
      this.setState({ message: error });
      console.log(error);
    }
  };

  logEverything = () => {
    let deck = localStorage.getItem("deck");
    console.log(this.state, deck);
  };

  isDisabled = () => {
    const { hold, bust } = this.state;
    return hold ? true : bust ? true : false;
  };
  mapDealerImages = () => {
    return this.state.dealerDrawn.map((card, index) => (
      <div
        className={styles.card}
        id={styles[`card${index.toString()}`]}
        style={{ backgroundImage: `url(${card.image})` }}
        key={index}
        alt="card"
      >
        <div
          className={styles.cornerDot}
          id={styles[`dealerDotOne${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`dealerDotTwo${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`dealerDotThree${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`dealerDotFour${index.toString()}`]}
        ></div>
      </div>
    ));
  };
  mapPlayerImages = () => {
    return this.state.playerDrawn.map((card, index) => (
      <div
        className={styles.card}
        id={styles[`card${index.toString()}`]}
        style={{ backgroundImage: `url(${card.image})` }}
        key={index}
        alt="card"
      >
        <div
          className={styles.cornerDot}
          id={styles[`playerDotOne${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`playerDotTwo${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`playerDotThree${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`playerDotFour${index.toString()}`]}
        ></div>
      </div>
    ));
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <p>{JSON.stringify(this.state.message)}</p>
        {this.state.firstDeal && (
          <button
            disabled={this.isDisabled()}
            onClick={() => this.drawClicked()}
          >
            Draw
          </button>
        )}

        <button disabled={this.isDisabled()} onClick={() => this.holdClicked()}>
          Hold
        </button>
        <button onClick={() => this.newDeck()}>New Deck</button>
        <button onClick={() => this.shuffleDeck()}>New Game</button>
        <button onClick={() => this.logEverything()}>Log everything</button>
        <div className={styles.handWrapper}>
          <div className={styles.playerHand}>
            {this.state.playerDrawn !== [] ? this.mapPlayerImages() : null}
          </div>
          <div className={styles.counters}>
            <div className={styles.playerScore}>
              {this.scoreToText("player")}
            </div>
            <div className={styles.dealerScore}>
              {this.scoreToText("dealer")}
            </div>
            {this.state.bust && <h1>BUSTED</h1>}
            {this.state.dealerHold && <h1>Dealer Hold</h1>}
            {this.state.dealerBust && <h1>Dealer Bust</h1>}
          </div>
          <div className={styles.dealerHand}>
            {this.state.dealerDrawn !== [] ? this.mapDealerImages() : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Blackjack;
