import React from "react";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer style={this.props.style}>
        <hr className="divider" />
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
