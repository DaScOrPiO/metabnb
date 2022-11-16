import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import PlacesToStay from "./Pages/PlacesToStay";
import Footer from "./Components/Footer";
import Nopage from "./Pages/Nopage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="PlacesToStay/*" element={<PlacesToStay />}></Route>
        <Route path="*" element={<Nopage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
