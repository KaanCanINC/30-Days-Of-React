import "./numberCards.css";
import Numbers from "../card/Numbers";

const numberCards = ({ numbers }) => {
  return (
    <div className="appContainer">
      <div className="numberGeneratorContainer">
        <div className="numberGeneratorHeader">
          <h1>30 Days Of React</h1>
          <h2>Day 6</h2>
          <p>Odd Even Prime</p>
        </div>
        <div className="numberGeneratorList">
          <Numbers numbers={numbers} />
        </div>
      </div>
    </div>
  );
};

export default numberCards;
