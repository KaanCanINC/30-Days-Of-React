import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
// import Button from "./components/Button/Button";
// import InputField from "./components/InputField/InputField";
// import AlertBox from "./components/AlertBox/AlertBox";

// const App = () => (
//   <div>
//     <Button text="Button" />
//     <InputField placeholder="deneme" />
//     <AlertBox type="success" message="ananin ami"/>
//     <AlertBox type="warning" message="ami ananin"/>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
