import React from "react";
import "./InputField.css";

const InputField = ({ inputClass, inputType, placeholder }) => (
  <input
    className={`input ${inputClass}`}
    type={inputType}
    placeholder={placeholder}
  />
);

export default InputField;
