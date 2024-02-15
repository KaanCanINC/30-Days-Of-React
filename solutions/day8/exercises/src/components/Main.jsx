import TechList from "./TechList";
import Count from "./Count";
import UserCard from "./UserCard";
import { buttonStyles } from "./Button";
import React from "react";
import Button from "./Button";
import RandomFlag from "./RandomFlag";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      country,
      randomFlag,
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
            func={randomFlag}
          />
        </div>
      </main>
    );
  }
}

export default Main;
