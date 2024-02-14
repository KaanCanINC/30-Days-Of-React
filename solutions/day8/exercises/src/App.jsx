import React from "react";
import kaanImage from "./assets/kaan.jpg";
import "./app.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as helper from "./utils/helper";

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: "",
      color: "",
    },
  };

  render() {
    const data = {
      welcome: "30 Günde React kursuna hoşgeldiniz",
      title: "Reacta başlarken",
      subtitle: "javaScript kütüphanesi",
      author: {
        firstName: "KaanCan",
        lastName: "Incirkus",
      },
      date: Date().slice(0, 25),
    };
    const date = new Date();
    const techs = ["HTML", "CSS", "JS", "React", "Angular"];
    const user = { ...data.author, image: kaanImage };
    return (
      <div className="app" style={this.state.styles}>
        <Header data={data} style={this.state.styles} />
        <Main
          user={user}
          techs={techs}
          handleTime={helper.handleTime}
          greetPeople={helper.greetPeople}
          changeBackground={helper.changeBackground.bind(this)}
          addOne={helper.addOne.bind(this)}
          minusOne={helper.minusOne.bind(this)}
          count={this.state.count}
          style={this.state.styles}
        />
        <Footer date={date} style={this.state.styles} />
      </div>
    );
  }
}

export default App;
