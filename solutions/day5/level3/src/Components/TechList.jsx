
const techs_styles = {
    listStyle: 'none',
    backgroundColor: '#2ACFCF',
    color: "#fff",
    display: 'inline',
    marginLeft: '10px',
    padding: '5px 10px',
    borderRadius: '5px',
}

const TechList = ({ tech }) => {
    const techs = tech.map(techs => <li key={techs} style={techs_styles} >{techs}</li>)
    return techs
}

export default TechList