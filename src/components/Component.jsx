import React from "react";
import axios from "axios";
import styles from "./Component.module.css";

class Component extends React.Component {
  state = {
    message: null,
    images: [],
    drawn: [],
    clickedCard: [],
    card0: null,
    card1: null,
    card2: null,
    card3: null,
    card4: null,
  };

  componentDidMount() {
    window.addEventListener("keypress", () => console.log(this.state));
  }

  computeCopyAreaValue = () => {
    const { input } = this.state;

    let regex = new RegExp(/id="[^"]*"/, "g");

    let array = input.match(regex);

    let string = input;

    let URLMatches = 0;
    let nonURLMatches = 0;

    for (let i = 0; i < array.length; i++) {
      let newId = uuidv4();
      let specificOldId = array[i].split("=")[1].slice(1, -1);

      let firstRegex = 'id="' + specificOldId + '"';
      let firstReplacement = "id={'" + newId.toString() + "'}";

      let secondSearch = "url(#" + specificOldId + ")";
      let secondRegBuilder = `url\\(#${specificOldId}\\)`;
      let secondRegex = new RegExp(secondRegBuilder, "g");
      let secondReplacement = `\"url\(#${newId.toString()}\"`;

      let thirdSearch = '"#' + specificOldId + '"';
      let thirdRegex = new RegExp(thirdSearch, "g");

      let thirdReplacement = `\"#${newId.toString()}\"`;

      let URLMatch = string.match(secondRegex);
      if (URLMatch) {
        URLMatches += URLMatch.length;
      }

      let nonURLMatch = string.match(thirdRegex);
      if (nonURLMatch) {
        nonURLMatches += nonURLMatch.length;
      }

      let fourthSearch = new RegExp(/\"\"/, "g");
      let fifthSearch = new RegExp(/\"\`/, "g");
      let sixthSearch = new RegExp(/\`\"/, "g");
      let fourthFifthAndSixthReplacement = "`";

      string = string.replaceAll(firstRegex, firstReplacement);
      string = string.replaceAll(secondSearch, secondReplacement);
      string = string.replaceAll(thirdSearch, thirdReplacement);
      string = string.replaceAll(fourthSearch, fourthFifthAndSixthReplacement);
      string = string.replaceAll(fifthSearch, fourthFifthAndSixthReplacement);
      string = string.replaceAll(sixthSearch, fourthFifthAndSixthReplacement);

      console.log(
        firstReplacement,
        secondReplacement,
        thirdReplacement,
        fourthFifthAndSixthReplacement
      );
    }
    this.setState({ copyArea: string });
    console.log(URLMatches, nonURLMatches);
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
    let card = document.getElementById(event.target.id);
    let stateVarName = card.id.split("_")[1];

    if (this.state[stateVarName]) {
      return;
    }

    let id = Number(event.target.id.split("_")[1].slice(-1));
    this.setState({ highlighted: id });

    let dotOne = document.getElementById(`${event.target.children[0].id}`);
    let dotThree = document.getElementById(`${event.target.children[2].id}`);
    let dotFour = document.getElementById(`${event.target.children[3].id}`);

    let dotOneRect = dotOne.getBoundingClientRect();
    let dotThreeRect = dotThree.getBoundingClientRect();
    let dotFourRect = dotFour.getBoundingClientRect();

    let dx = dotOneRect.left - dotFourRect.left;
    let dy = -Math.abs(dotOneRect.top) - -Math.abs(dotFourRect.top);

    let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

    let newX = dotThreeRect.left;
    let newY = dotThreeRect.top - distance;

    let style = window.getComputedStyle(card);

    let styleLeft = parseInt(style.left);
    let styleTop = parseInt(style.top);

    let viewportHeight = (newY / window.innerHeight) * 100;
    let viewportWidth = (newX / window.innerWidth) * 100;

    let oldViewportHeight = (styleTop / window.innerHeight) * 100;
    let oldViewportWidth = (styleLeft / window.innerWidth) * 100;

    console.log(styleLeft, styleTop, newX, newY, viewportHeight);

    this.setState({ [stateVarName]: [oldViewportWidth, oldViewportHeight] });
    this.moveCard(event.target.id, viewportWidth, viewportHeight);
  };

  unHighlight = (event) => {
    console.log(event.target);
    let card = document.getElementById(event.target.id);
    let stateVarName = card.id.split("_")[1];
    if (!this.state[stateVarName]) {
      return;
    }

    this.moveCard(event.target.id, 50, 50);
    this.setState({ [stateVarName]: null });
  };

  moveCard = (cardId, newX, newY) => {
    let card = document.getElementById(cardId);

    card.style.left = `${newX}vw`;
    card.style.top = `${newY}vh`;
  };

  cardClicked = (event) => {
    let id = event.target.id.split("_")[1];

    return this.state[id] ? this.unHighlight(event) : this.highlight(event);
  };

  createDot = (x, y) => {
    let dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.height = "10px";
    dot.style.width = "10px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "black";
    document.body.appendChild(dot);
    console.log("create dot", x, y);
  };

  mapImages = () => {
    return this.state.drawn.map((card, index) => (
      <div
        className={
          this.state.highlighted === index
            ? `${styles.card} ${styles.highlighted}`
            : styles.card
        }
        id={styles[`card${index.toString()}`]}
        style={{ backgroundImage: `url(${card.image})` }}
        key={index}
        alt="card"
        onMouseOver={(event) => this.highlight(event)}
        onMouseOut={(event) => this.unHighlight(event)}
      >
        <div
          className={styles.cornerDot}
          id={styles[`dotOne${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`dotTwo${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`dotThree${index.toString()}`]}
        ></div>
        <div
          className={styles.cornerDot}
          id={styles[`dotFour${index.toString()}`]}
        ></div>
      </div>
    ));
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.message}>{JSON.stringify(this.state.message)}</h2>
        <button onClick={() => this.drawClicked()}>Draw</button>
        <button onClick={() => this.returnClicked()}>return</button>
        <button onClick={() => this.createDot()}>createDot</button>

        <div className={styles.hand}>
          {this.state.drawn !== [] ? this.mapImages() : null}
        </div>
      </div>
    );
  }
}

export default Component;
