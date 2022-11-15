import React from "react";
import { Outlet, Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

export default function Navlinks(props) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <nav className="nav-container">
        <ul className="link-container">
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/">Home</Link>
          </li>
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/PlacesToStay">Places To Stay</Link>
          </li>
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/nfts">Nft</Link>
          </li>
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/community">Community</Link>
          </li>
        </ul>
        <button className="connect-btn" onClick={() => setOpenModal(true)}>
          connect wallet
        </button>
      </nav>
      <Outlet />
      <Modal open={openModal} onclose={() => setOpenModal(false)}/>
    </>
  );
}
