import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./Components/Booking";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
