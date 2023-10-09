import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import About from "../pages/About/About.js";
import Cake from "../pages/Cake/Cake.js";
import Contact from "../pages/Contact/Contact.js";
// import { useState } from "react";

export default function Router({ showProfile, setShowProfile }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="about"
        element={
          <About showProfile={showProfile} setShowProfile={setShowProfile} />
        }
      />
      <Route path="cake" element={<Cake />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
