import React from "react";
import "./Button.css";

const Button = ({ text, btnClass }) => (
  <button className={`btn ${btnClass}`}>{text}</button>
);

export default Button;
