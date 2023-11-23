import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'

const techs = ["HTML", "CSS", "JavaScript"].map((elements) => (
  <li key={elements}>{elements}</li>
));

const welcome = "30 Günde React'a Hoş Geldiniz",
  title = "React'a başlarken",
  subtitle = "JavaScript Library",
  author = {
    name: "KaanCan",
    surName: "INC",
  },
  date = new Date().toJSON().slice(0, 10),
  img = 'https://i.hizliresim.com/4g752eo.jpg'

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.name + " " + author.surName}</p>
      <small>{date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.name} {author.surName} is {age} years old
  </p>
);

const user = (
  <div>
    <img src={img}/>
  </div>
);

const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started <strong>react.js</strong>:
      </p>
      <ul>{techs}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
);

const copyRight = "CopyRight 2023";

const footer = (
  <footer className="footer-wrapper">
    <p>{copyRight}</p>
  </footer>
);
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
