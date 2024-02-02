import "./numberCards.css";
import { isEven, isPrime } from "../../services/helper";

const numberCards = ({ numbers }) => {
  return (
    <div className="numberCardsContainer">
      <div className="numberCardsHeader">
        <h1>30 Days Of React</h1>
        <h2>Day 6</h2>
        <p>Odd Even Prime</p>
      </div>
      <div className="numberCardsListContainer">
        <ul className="numberCardsList">
          {numbers.map((num) => (
            <li
              key={num}
              className={`numberCards ${isEven(num) ? "even" : isPrime(num) ? "prime" : "odd"}`}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default numberCards;
