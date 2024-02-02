import { hexColorGenerator } from "../../services/helper";

const HexColorGenerator = ({ cardCount }) => {
  let colorArray = [];
  hexColorGenerator(cardCount, colorArray);

  return (
    <ul className="hexColorList">
      {colorArray.map((hex) => (
        <li key={hex} className="hexColorCard" style={{ backgroundColor: hex }}>
          {hex}
        </li>
      ))}
    </ul>
  );
};

export default HexColorGenerator;
