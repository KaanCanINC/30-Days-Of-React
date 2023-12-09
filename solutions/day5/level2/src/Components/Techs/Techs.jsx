const Techs = ({ techs }) => {
    const techList = techs.map(tech => <li key={tech}> <img src={tech.src} alt={tech.name} /> </li>)
    return techList
}

export default Techs