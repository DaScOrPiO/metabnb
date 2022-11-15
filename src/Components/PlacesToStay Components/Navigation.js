import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="places-nav">
        <ul className="p-nav-con">
          <li className="p-link">
            <Link to="/PlacesToStay/">Resturant</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/Cottage/">Cottage</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/Castle/">Castle</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/Fantast/">Fantast City</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/beach/">Beach</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/carbins/">Carbins</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/offgrid/">Offgrid</Link>
          </li>
          <li className="p-link">
            <Link to="/PlacesToStay/farm/">Farm</Link>
          </li>
          <button className="p-btn">
            Location
            <img
              src={
                require("../../images/Places-Body Section/setting-5.svg")
                  .default
              }
              alt="setting"
            />
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
