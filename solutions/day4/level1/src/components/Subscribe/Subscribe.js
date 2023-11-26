import React from "react";
import "./subscribe.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import Text from "../Text/Text";

const Subscribe = () => (
  <div className="subscribeContainer">
    <div className="subscribeSection">
      <div className="textSection">
        <h1 className="subscribeHeader">
          <Text>Subscribe</Text>
        </h1>
        <p className="subscribeText">
          <Text>
            haberlerden ve yeniliklerden anında haberdar olmak için üye olun
          </Text>
        </p>
      </div>
      <div className="inputSection">
        <InputField
          placeholder="İsim"
          inputType="text"
          inputClass="firstName"
        />
        <InputField
          placeholder="Soyisim"
          inputType="text"
          inputClass="surName"
        />
        <InputField
          placeholder="E-posta"
          inputType="email"
          inputClass="email"
        />
      </div>
      <Button btnClass={"subscribeBTN"} text={<Text>Abone ol</Text>} />
    </div>
  </div>
);

export default Subscribe;
