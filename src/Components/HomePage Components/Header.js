import React, { useState } from "react";

export default function Header() {
  const [value, setValue] = useState({});

  const change = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  };

  return (
    <header className="header">
      <div className="h-column-aligned">
        <div className="h-top-container">
          <div className="h-first">
            <div className="h-text-container">
              <h1 className="h-header">
                Rent a <span className="coloured">Place</span> away from <span className="coloured">
                  Home</span> in the <span className="coloured">Metaverse</span>
              </h1>
              <p className="h-paragraph">
                We provide you Lukury and access to affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>

              <div className="h-search">
                <form className="h-form" onSubmit={handleSubmit}>
                  <input
                    className="text-input"
                    type="text"
                    name={value}
                    onChange={change}
                    placeholder="search for houses"
                  />
                  <button className="s-btn" type="Submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="h-second">
            <div className="img-absolute">
              <img className="group-img"
                src={
                  require("../../images/Home-Header Section/img-group.svg")
                    .default
                }
                alt="group.png"
              />
            </div>
          </div>
        </div>

        <div className="tab">
          <a href="#/">
            <img
              src={
                require("../../images/Home-Header Section/MbToken.svg").default
              }
              alt=""
            />
          </a>

          <a href="https://metamask.io/">
            <img
              src={
                require("../../images/Home-Header Section/MetaMask.svg").default
              }
              alt=""
            />
          </a>

          <a href="https://opensea.io/">
            <img
              src={
                require("../../images/Home-Header Section/OpenSea.svg").default
              }
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}
