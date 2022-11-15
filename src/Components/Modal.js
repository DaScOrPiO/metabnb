import React from "react";

export default function Modal(props) {
  if (!props.open) return null;
  return (
    <div onClick={props.onclose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div className="modal-h">
          <h1>Connect Walllet</h1>
          <div className="modal-close" onClick={props.onclose}>
            X
          </div>
        </div>
        <div className="modal-b-container">
          <div className="modal-b-h">Choose your preferred wallet:</div>
          <button className="modal-b-btn1">
            <div className="modal-img">
              <img
                src={
                  require("../images/Home-Header Section/metamask icon.svg")
                    .default
                }
                alt="png"
              />
              <div className="modal-text">Metamask</div>
            </div>
            <div className="modal-icon">
              <img
                src={require("../images/Home-Header Section/next.svg").default}
                alt="next"
              />
            </div>
          </button>
          <button className="modal-b-btn2">
            <div className="modal-img">
              <img
                className="m-img"
                src={
                  require("../images/Home-Header Section/walletconnect icon.svg")
                    .default
                }
                alt="png"
              />
              <div className="modal-text">Walletconnect</div>
            </div>
            <div className="modal-icon">
              <img
                src={require("../images/Home-Header Section/next.svg").default}
                alt="next"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
