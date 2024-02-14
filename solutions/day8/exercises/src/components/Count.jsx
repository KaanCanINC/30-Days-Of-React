import Button from "./Button";
import { buttonStyles } from "./Button";

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

export default Count;
