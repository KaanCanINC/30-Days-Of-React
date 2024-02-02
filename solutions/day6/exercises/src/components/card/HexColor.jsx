import HexColorGenerator from "./hexColorGenerator";
import "./hexColor.css";

const HexColor = () => {
  return (
    <div className="hexColorContainer">
      <div className="hexColorHeader">
        <h1>30 Days Of React</h1>
        <h2>Day 6</h2>
        <p>Hexadecimal Color Generator</p>
      </div>
      <div className="hexColorCard">
        <HexColorGenerator cardCount={32} />
      </div>
    </div>
  );
};

export default HexColor;
