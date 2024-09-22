import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import WeatherApp from "./components/WeatherApp";
import GamingHub from "./components/GamingHub";
import DogTinder from "./components/DogTinder";
import HappyShopping from "./components/HappyShopping";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Weather-App" element={<WeatherApp />} />
          <Route path="/GamingHub" element={<GamingHub />} />
          <Route path="/DogTinder" element={<DogTinder />} />
          <Route path="/ShoppingSite" element={<HappyShopping />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
