import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import PlacesToStay from "./Pages/PlacesToStay";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="places" element={<PlacesToStay />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
