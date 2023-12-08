import React from "react";

const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>CopyRight {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

export default Footer