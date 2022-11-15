import React from "react";
import Header from "../Components/PlacesToStay Components/Header";
import Body from "../Components/PlacesToStay Components/Body";
import Nopage from "./Nopage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function PlacesToStay() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Body />}></Route>
        <Route path="*" element={<Nopage />}></Route>
      </Routes>
    </>
  );
}
