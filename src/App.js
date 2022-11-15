import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import PlacesToStay from "./Pages/PlacesToStay";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="PlacesToStay/*" element={<PlacesToStay />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
