import React from "react";

const AlertBox = ({ type, message }) => {
  const alertClass = type === "success" ? "successAlert" : "warningAlert";
  return (
    <div className="alertBoxParent">
      <p className={alertClass}>{message}</p>
    </div>
  );
};

export default AlertBox;
