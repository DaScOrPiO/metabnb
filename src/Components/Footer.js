import React from "react";
import logo from "../images/Home-Footer Section/logo.svg";
import icon1 from "../images/Home-Footer Section/Vector.svg";
import icon2 from "../images/Home-Footer Section/instagram.svg";
import icon3 from "../images/Home-Footer Section/Vector1.svg";
import icon4 from "../images/Home-Footer Section/copywrite.svg";
import icon5 from "../images/Home-Footer Section/2022 Metabnb.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-first">
        <div className="logo-container1">
          <img src={logo} alt="logo" />
        </div>

        <div className="logo-container2">
          <img className="img-logo" src={icon1} alt="facebook-logo" />
          <img className="img-logo" src={icon2} alt="instagram-logo" />
          <img className="img-logo" src={icon3} alt="twitter-logo" />
        </div>

        <div className="logo-container3">
          <img className="img-logo" src={icon4} alt="copywrite" />
          <img className="img-logo" src={icon5} alt="png" />
        </div>
      </div>

      <div className="f-second">
        <div className="f-header">
          <h1>Community</h1>
          <div className="f-nav">
            <a className="f-links" href="#/">
              NFT
            </a>
            <a className="f-links" href="#/">
              Tokens
            </a>
            <a className="f-links" href="#/">
              Landlords
            </a>
            <a className="f-links" href="#/">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="f-third">
        <div className="f-header">
          <h1>Places</h1>
          <div className="f-nav">
            <a className="f-links" href="#/">
              Castle
            </a>
            <a className="f-links" href="#/">
              Farms
            </a>
            <a className="f-links" href="#/">
              Beach
            </a>
            <a className="f-links" href="#/">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="f-fourth">
        <div className="f-header">
          <h1>About us</h1>
          <div className="f-nav">
            <a className="f-links" href="#/">
              Road maps
            </a>
            <a className="f-links" href="#/">
              Creators
            </a>
            <a className="f-links" href="#/">
              Careers
            </a>
            <a className="f-links" href="#/">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
