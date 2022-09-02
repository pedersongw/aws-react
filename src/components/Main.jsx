import React from "react";
import styles from "./Main.module.css";

import { v4 as uuidv4 } from "uuid";
import Test from "./Cards/Test";

import TestTwo from "./Cards/TestTwo";

import CarsTest from "./Cards/TestFour";
import CastleTest from "./Cards/Castle";
import AbstractTest from "./Cards/TestFive";

class Main extends React.Component {
  state = {
    input: '<h1 id="something" url(#something)></h1>',
    copyArea: "nothing",
  };
  ß;
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

  render() {
    return (
      <div className={styles.wrapper}>
        <textarea
          onChange={(event) => this.setState({ input: event.target.value })}
          value={this.state.input}
        ></textarea>
        <textarea
          className={styles.p}
          value={this.state.copyArea}
          onChange={(event) => this.setState({ copyArea: event.target.value })}
        ></textarea>
        <button onClick={() => this.computeCopyAreaValue()}>Replace Ids</button>
        <CastleTest />
        <TestTwo />
        <CarsTest />
        <Test />
        <AbstractTest />
      </div>
    );
  }
}

export default Main;
