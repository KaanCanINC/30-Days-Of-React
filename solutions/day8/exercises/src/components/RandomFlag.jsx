import React from "react";
import Button, { buttonStyles } from "./Button";

class RandomFlag extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, capital, languages, population, flag, currency } = this.props;
    return (
      <div className="randomFlag">
        <div className="country">
          <img src={flag} alt={name} />
          <h1>{name}</h1>
        </div>
        <div className="countryInfo">
          <p><span className="infoHeader">Capital: </span>{capital}</p>
          <p><span className="infoHeader">Language: </span> {languages}</p>
          <p><span className="infoHeader">Populatin: </span> {population}</p>
          <p><span className="infoHeader">Currency: </span> {currency}</p>
        </div>
            <Button style={buttonStyles} text={'Ülke Seç'} onClick={null} className='randomFlagBtn'/>
      </div>
    );
  }
}

export default RandomFlag;
