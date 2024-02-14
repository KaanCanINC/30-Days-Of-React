import React from "react";
import ReactDOM from "react-dom";
import kaanImage from "./images/kaan.jpg";

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} width="256px" />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// Header Component
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// TechList Component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { techs } = this.props;
    const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techList;
  }
}

// Main Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
        </div>
        <Button
          text="Greet People"
          onClick={this.props.greetPeople}
          style={buttonStyles}
        />
        <Button
          text="Show Time"
          onClick={this.props.handleTime}
          style={buttonStyles}
        />
      </main>
    );
  }
}

// Footer Component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

// The App, or the parent or the container component
// Functional Component
class App extends React.Component {
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  // copying the author from data object to user variable using spread operator

  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Kaan",
        lastName: "INC",
      },
      date: Date().slice(0, 21), // date needs to be formatted to a human readable format
    };

    const date = new Date();
    const techs = ["HTML", "CSS", "JavaScript"];
    const user = { ...data.author, image: kaanImage };

    return (
      <div className="app">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />
        <Footer date={new Date()} />
      </div>
    );
  }
}
export default App;
