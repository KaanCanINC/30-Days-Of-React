import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'

// Create an array of tech elements
const techs = ["HTML", "CSS", "JavaScript"].map((elements) => (
 <li key={elements}>{elements}</li>
));

// Define welcome message, title, subtitle, author, date, and image URL
const welcome = "30 Günde React'a Hoş Geldiniz",
 title = "React'a başlarken",
 subtitle = "JavaScript Library",
 author = {
    name: "KaanCan",
    surName: "INC",
 },
 date = new Date().toJSON().slice(0, 10),
 img = 'https://i.hizliresim.com/4g752eo.jpg'

// Create header component
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

// Calculate the sum of two numbers and display it
const numOne = 3;
const numTwo = 2;

const result = (
 <p>
    {numOne} + {numTwo} = {numOne + numTwo}
 </p>
);

// Calculate the age of the author
const yearBorn = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
 <p>
    {" "}
    {author.name} {author.surName} is {age} years old
 </p>
);

// Create a user component with an image
const user = (
 <div>
    <img src={img}/>
 </div>
);

// Create main component
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

// Define copyright message
const copyRight = "CopyRight 2023";

// Create footer component
const footer = (
 <footer className="footer-wrapper">
    <p>{copyRight}</p>
 </footer>
);

// Create app component
const app = (
 <div className="app">
    {header}
    {main}
    {footer}
 </div>
);

// Render the app component
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

//
//This code creates a React app that displays a welcome message, title, subtitle, author, date, prerequisites, a sum of two numbers, the age of the author, an image of the author, and a copyright message. The code is organized into separate components for the header