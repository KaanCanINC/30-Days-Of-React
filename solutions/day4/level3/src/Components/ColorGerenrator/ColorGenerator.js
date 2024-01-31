import React from "react";

const colorGenerator = () => {
  const str = "0123456789abcdef";
  let hex = "";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    hex += str[index];
  }

  return "#" + hex;
};
const ColorGenerator = () => {
  const color = colorGenerator();
  const styles = {
    height: "100px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "75%",
    border: "2px solid black",
    backgroundColor: `${color}`,
  };

  return (
    <div style={styles}>
      <h2>{color}</h2>
    </div>
  );
};

export default ColorGenerator;
