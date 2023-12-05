import React from "react";
import ReactDOM from "react-dom";
import ShowDate from "./ShowDate/ShowDate";

const Header = (props) => {
    const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data;
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>

        <p>
          {firstName}
          {lastName}
        </p>

        <small>
            {ShowDate(date)}
        </small>
      </div>
    </header>
  );
};


export default Header   