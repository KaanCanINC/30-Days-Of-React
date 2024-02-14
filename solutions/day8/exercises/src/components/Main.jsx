import TechList from "./TechList";
import Count from "./Count";
import UserCard from "./UserCard";
import { buttonStyles } from "./Button";
import React from "react";
import Button from "./Button";
import RandomFlag from "./RandomFlag";
import { countries } from "../utils/api";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: null };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await countries();
      this.setState({ country: data });
      console.log(data);
    } catch (error) {
      console.error("veri alinamadi", error);
    }
  }

  render() {
    const { country } = this.state;

    if (!country) {
      return <div>bekle anani sikerim</div>;
    }

    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
      style,
    } = this.props;

    return (
      <main style={style}>
        <hr className="divider" />

        <div className="main-wrapper">
          <p>React öğrenmek için ön gereksinimler</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button text="Karsilama" style={buttonStyles} onClick={greetPeople} />
          <Button
            text="Saati Goster"
            style={buttonStyles}
            onClick={handleTime}
          />
          <Button
            text="Arka Planı Değiştir"
            style={buttonStyles}
            onClick={changeBackground}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
          <RandomFlag
            flag={country.flags.png}
            name={country.name.common}
            capital={country.capital}
            population={country.population}
            languages={Object.values(country.languages)[0]}
            currency={Object.values(country.currencies)[0].name}
          />
        </div>
      </main>
    );
  }
}

export default Main;
