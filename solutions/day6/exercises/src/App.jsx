import React from "react";
import NumberCards from "./components/numberCards/NumberCards";
import HexColor from "./components/card/HexColor";
import { tenHighestPopulation } from "./data/countries";
import Countries from "./components/WorldPopulation/WorldPopulation";

function App() {
  const dataArray = [...Array(32).keys()];

  return (
    <div className="appContainer">
      <div className="fullHeightContainer">
        <NumberCards numbers={dataArray} />
      </div>
      <hr />
      <div className="fullHeightContainer">
        <HexColor/>
      </div>
      <hr />
      <div className="fullHeightContainer">
        <Countries countries={tenHighestPopulation}/>
      </div>
    </div>
  );
}

export default App;
