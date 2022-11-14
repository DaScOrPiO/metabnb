import React from "react";
import BodyProp from "./Body(props)";
import thumbnail1 from "../../images/Home-Body Section/thumbnail1.svg";
import thumbnail2 from "../../images/Home-Body Section/thumbnail2.svg";
import thumbnail3 from "../../images/Home-Body Section/thumbnail3.svg";
import thumbnail4 from "../../images/Home-Body Section/thumbnail4.svg";
import thumbnail5 from "../../images/Home-Body Section/thumbnail5.svg";
import thumbnail6 from "../../images/Home-Body Section/thumbnail6.svg";
import thumbnail7 from "../../images/Home-Body Section/thumbnail7.svg";
import thumbnail8 from "../../images/Home-Body Section/thumbnail8.svg";
import image from "../../images/Home-Body Section/b-bottom.svg";

export default function Body() {
  return (
    <section className="b-section">
      <div className="b-header">
        <h1 className="b-heading-text">Inspiration for your next adventure</h1>
      </div>

      <div className="general-thumbnail-container">
        <BodyProp
          img={thumbnail1}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail2}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail3}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail4}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail5}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail6}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail7}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={thumbnail8}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
      </div>

      <div className="b-bottom-container">
        <div className="b-bottom-text-container">
          <h1 className="b-bottom-header">Metabnb NFTs</h1>
          <p className="b-bottom-text">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customers
            access to loads of our exclusive services
          </p>
          <button type="button" className="b-bottom-btn">
            Learn more
          </button>
        </div>
        <div className="b-bottom-img">
          <img src={image} alt="png" />
        </div>
      </div>
    </section>
  );
}
