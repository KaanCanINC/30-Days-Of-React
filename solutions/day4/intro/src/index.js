import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const author = {
    name: "KaanCan",
    surName: "INC",
  },
  welcome = "30 Günde React'a Hoş Geldiniz",
  title = "React'a başlarken",
  subtitle = "JavaScript Library",
  date = new Date().toJSON().slice(0, 10),
  copyRight = "CopyRight 2023",
  numOne = 3,
  numTwo = 2,
  techs = ["HTML", "CSS", "JavaScript"],
  yearBorn = 2000,
  currentYear = new Date().getFullYear(),
  age = currentYear - yearBorn,
  result = (
    <p>
      {" "}
      {numOne} + {numTwo} = {numOne + numTwo}{" "}
    </p>
  );

const TechList = () => {
  const techsFormatted = techs.map((elements) => (
    <li key={elements}>{elements}</li>
  ));
  return techsFormatted;
};

const hexaColor = () => {
  const str = "0123456789abcdef";
  let hex = "";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    hex += str[index];
  }

  return "#" + hex;
};

const HexaColor = () => {
  const color = hexaColor();
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
  };

  return (
    <div style={styles}>
      <h2>{color}</h2>
    </div>
  );
};

const User = () => (
  (
    <p>
      {author.name} {author.surName} is {age} years old
    </p>
  ),
  (
    <div className="user">
      <img src="https://i.hizliresim.com/4g752eo.jpg" alt="pp" />
      <p>
        {" "}
        {author.name} {author.surName}{" "}
      </p>
    </div>
  )
);

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.name + " " + author.surName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const Main = () => (
  <main>
    <div className="main-wrapper">
      <div>
        <p>
          Prerequisite to get started <strong>react.js</strong>:
        </p>
        <ul>
          <TechList />
        </ul>
        {result}
        <User />
      </div>
      <HexaColor />
      <HexaColor />
    </div>
  </main>
);

const Footer = () => {
  <footer className="footer-wrapper">
    <p>{copyRight}</p>
  </footer>;
};

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
