import React from "react";
import cssImage from "./images/css.png";
import htmlImage from "./images/html.png";
import jsImage from "./images/javaScript.png";
import reactImage from "./images/react.png";

export default function App() {
  return (
    <>
      <div>
        <header className="header">
          <h2>Front-end Technologies</h2>

          <div className="photos">
            <img src={htmlImage} className="images htmlImg" />
            <img src={cssImage} className="images cssImg" />
            <img src={jsImage} className="images jsImg" />
            <img src={reactImage} className="images reactImg" />
          </div>
        </header>

        <main>
          <div className="main-content">
            <div className="subscribe-section">
              <div className="text-section">
                <h1>Abone ol</h1>
                <p>E-posta adresiniz ile kayıt olun</p>
              </div>
              <form>
                <div className="input-section">
                  <input type="text" placeholder="Adınız" />
                  <input type="text" placeholder="Soyadınız" />
                  <input type="email" placeholder="E-posta adresiniz" />
                </div>
                <button className="subscribeBTN">Abone ol</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
