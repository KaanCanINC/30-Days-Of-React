import { isEven, isPrime } from "../../services/helper";

const Numbers = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num) => (
        <li
          key={num}
          className={`numberCards ${isEven(num) ? "even" : isPrime(num) ? "prime" : "odd"}`}
        >
          {num}
        </li>
      ))}

    </ul>
  );
};

export default Numbers;
