import Header from "../src/components/header/Header.js";
import Footer from "../src/components/footer/Footer.js";
import Home from "../src/pages/home/Home.js";
import About from "../src/pages/about/about.js";
import Cake from "../src/pages/cake/Cake.js";
import Contact from "../src/pages/contact/Contact.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="App">
      <Header showProfile={showProfile} />
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
      <Footer />
    </div>
  );
}
export default App;
