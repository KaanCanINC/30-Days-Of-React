import "./worldPopulation.css";

const WorldPopulation = ({ country: { country, population } }) => {
  const barStyle = {
    width: `${(population / 7693165599) * 70}%`,
  };
  return (
    <div className="worldPopulationList">
      <div className="worldPopulationCountry">{country} </div>
      <div style={barStyle} className="worldPopulationBar"></div>
      <div className="WorldPopulation"> {population}</div>
    </div>
  );
};

const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <WorldPopulation country={country} />
  ));
  return (
    <div className="worldPopulationContainer">
      <div className="numberCardsHeader">
        <h1>30 Days Of React</h1>
        <h2>Day 6</h2>
        <p>Worl Population</p>
        <small>Ten most populated countries</small>
      </div>
      <div className="worldPopulationApp">
        <div className="worldPopulationAppContainer">{countryList}</div>
      </div>
    </div>
  );
};

export default Countries;
