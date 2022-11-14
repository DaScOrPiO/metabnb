import React from "react";

export default function BodyProp(props) {
  return (
    <div className="b-thumbnail-container">
      <img
        className="thumbnail-img"
        src={props.img}
        alt="thumbnail"
      />

      <div className="thumbnail-text-container">
        <div className="first-text-set">
          <p className="text-1">{props.firsttext}</p>
          <p className="text-2">{props.secondtext}</p>
          <img
            src={require("../../images/Home-Body Section/ratings.svg").default}
            alt="ratings"
          />
        </div>
        <div className="second-text-set">
          <p className="text-1 bold">{props.thirdtext}</p>
          <p className="text-2">{props.fourthtext}</p>
        </div>
      </div>
    </div>
  );
}
