import React from "react";
import kaanImage from "./assets/kaan.jpg";
import "./app.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as helper from "./utils/helper";

import { countries } from "./utils/api";
class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: "",
      color: "",
    },
    country: null,
    randomNumber: Math.floor(Math.random() * 251),
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await countries(this.state.randomNumber);
      this.setState({ country: data });
      console.log(data);
    } catch (error) {
      console.error("veri alinamadi", error);
    }
  }

  render() {
    const { country } = this.state;
    console.log(country);
    if (!country) {
      return <div>bekle anani sikerim</div>;
    }

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
          country={this.state.country}
          randomFlag={helper.randomFlag.bind(this)}
        />
        <Footer date={date} style={this.state.styles} />
      </div>
    );
  }
}

export default App;
