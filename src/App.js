import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../src/pages/home/Home.js";
import About from "../src/pages/about/about.js";
import Header from "../src/components/header/Header.js";

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
      </Routes>

      {/* <Header showProfile={showProfile} /> */}
      {/* <Content showProfile={showProfile} setShowProfile={setShowProfile} /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
