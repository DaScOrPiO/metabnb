import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navlinks(props) {
  return (
    <>
      <nav className="nav-container">
        <ul className="link-container">
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/">Home</Link>
          </li>
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/places">Places To Stay</Link>
          </li>
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/nfts">Nft</Link>
          </li>
          <li className="links" onClick={props.isMobile && props.closeNav}>
            <Link to="/community">Community</Link>
          </li>
        </ul>
        <button className="connect-btn">connect wallet</button>
      </nav>
      <Outlet />
    </>
  );
}
