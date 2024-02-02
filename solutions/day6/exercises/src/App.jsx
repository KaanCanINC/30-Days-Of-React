import React from "react";
import NumberCards from "./components/numberCards/NumberCards";

function App() {
  const dataArray = [...Array(32).keys()];

  return (
    <div className="appContainer">
      <div className="fullHeightContainer">
        <NumberCards numbers={dataArray} />
      </div>
      <hr />
      <div className="fullHeightContainer">
        <NumberCards numbers={dataArray} />
      </div>
      <hr />
      <div className="fullHeightContainer">
        <NumberCards numbers={dataArray} />
      </div>
    </div>
  );
}

export default App;
