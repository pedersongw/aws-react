import React from "react";
import styles from "./Main.module.css";

import { v4 as uuidv4 } from "uuid";

import Abstract from "./Cards/Backs/Abstract";
import Astronaut from "./Cards/Backs/Astronaut";
import AbstractClouds from "./Cards/Backs/AbstractClouds";
import AbstractScene from "./Cards/Backs/AbstractScene";
import Castle from "./Cards/Backs/Castle";
import Cars from "./Cards/Backs/Cars";
import Fish from "./Cards/Backs/Fish";
import Frog from "./Cards/Backs/Frog";

import C2 from "./Cards/Fronts/C2";
import C3 from "./Cards/Fronts/C3";
import C4 from "./Cards/Fronts/C4";
import C5 from "./Cards/Fronts/C5";
import C6 from "./Cards/Fronts/C6";
import C7 from "./Cards/Fronts/C7";
import C8 from "./Cards/Fronts/C8";
import C9 from "./Cards/Fronts/C9";
import C10 from "./Cards/Fronts/C10";
import CA from "./Cards/Fronts/CA";
import CQ from "./Cards/Fronts/CQ";
import CK from "./Cards/Fronts/CK";
import CJ from "./Cards/Fronts/CJ";
import D2 from "./Cards/Fronts/D2";
import D3 from "./Cards/Fronts/D3";
import D4 from "./Cards/Fronts/D4";
import D5 from "./Cards/Fronts/D5";
import D6 from "./Cards/Fronts/D6";
import D7 from "./Cards/Fronts/D7";
import D8 from "./Cards/Fronts/D8";
import D9 from "./Cards/Fronts/D9";
import D10 from "./Cards/Fronts/D10";
import H2 from "./Cards/Fronts/H2";
import H3 from "./Cards/Fronts/H3";
import H4 from "./Cards/Fronts/H4";
import H5 from "./Cards/Fronts/H5";
import H6 from "./Cards/Fronts/H6";
import H7 from "./Cards/Fronts/H7";
import H8 from "./Cards/Fronts/H8";
import H9 from "./Cards/Fronts/H9";
import H10 from "./Cards/Fronts/H10";
import HJ from "./Cards/Fronts/HJ";
import HQ from "./Cards/Fronts/HQ";
import HK from "./Cards/Fronts/HK";
import HA from "./Cards/Fronts/HA";
import S2 from "./Cards/Fronts/S2";
import S3 from "./Cards/Fronts/S3";
import S4 from "./Cards/Fronts/S4";
import S5 from "./Cards/Fronts/S5";
import S6 from "./Cards/Fronts/S6";
import S7 from "./Cards/Fronts/S7";
import S8 from "./Cards/Fronts/S8";
import S9 from "./Cards/Fronts/S9";
import S10 from "./Cards/Fronts/S10";
import SQ from "./Cards/Fronts/SQ";
import SJ from "./Cards/Fronts/SJ";
import SK from "./Cards/Fronts/SK";
import SA from "./Cards/Fronts/SA";

class Main extends React.Component {
  state = {
    input: '<h1 id="something" url(#something)></h1>',
    copyArea: "nothing",
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
        <div className={styles.cardWrapper}>
          <CA id={styles.card} />
        </div>
      </div>
    );
  }
}

export default Main;
