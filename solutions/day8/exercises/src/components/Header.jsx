import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header style={this.props.style}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>

          <p>
            {firstName}
            {lastName}
          </p>

          <small>{date}</small>
        </div>
      </header>
    );
  }
}

export default Header;
