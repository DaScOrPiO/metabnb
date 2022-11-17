import React from "react";
import BodyProp from "./Body(props)";
import img1 from "../../images/Home-Body Section/1.webp";
import img2 from "../../images/Home-Body Section/2.webp";
import img3 from "../../images/Home-Body Section/3.webp";
import img4 from "../../images/Home-Body Section/4.webp";
import img5 from "../../images/Home-Body Section/5.webp";
import img6 from "../../images/Home-Body Section/6.webp";
import img7 from "../../images/Home-Body Section/7.webp";
import img8 from "../../images/Home-Body Section/8.webp";
import image from "../../images/Home-Body Section/b-bottom.png";

export default function Body() {
  return (
    <section className="b-section">
      <div className="b-header">
        <h1 className="b-heading-text">Inspiration for your next adventure</h1>
      </div>

      <div className="general--container">
        <BodyProp
          img={img1}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img2}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img3}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img4}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img5}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img6}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img7}
          firsttext="Desert King"
          secondtext="2345km away"
          thirdtext="1MBT per night"
          fourthtext="available for 2weeks stay"
        />
        <BodyProp
          img={img8}
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
          <img src={image} alt="group-img" />
        </div>
      </div>
    </section>
  );
}
