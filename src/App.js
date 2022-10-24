import "./App.css";
import image1 from "./images/drawers.jpg";
import person from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import React, { useState } from "react";

function App() {
  const [showthing, setisShow] = useState(false);

  const show = () => {
    setisShow(!showthing);
  };

  return (
    <>
      <div className="container">
        <div className="first">
          <img src={image1} alt="" />
        </div>
        <div className="second">
          <div className="text">
            <h2>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="footer">
            <div className="person">
              <div className="person-img">
                <img src={person} alt="" />
              </div>
              <div className="person-info">
                <h3> Michelle Appleton</h3>
                <p> 28 Jun 2020</p>
              </div>
            </div>
            <div className="sharing-thing">
              {showthing && (
                <>
                  <div className="socials" id="socials">
                    <p>SHARE</p>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                  </div>
                  <div className="triangle" id="triangle"></div>
                </>
              )}

              {!showthing && (
                <>
                  <button onClick={show} className="button-1 btn">
                    <img src={share} alt="" />
                  </button>
                </>
              )}
              {showthing && (
                <>
                  <button onClick={show} className="button-2 btn">
                    <img src={share} alt="" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
