import Header from "../src/components/header/Header.js";
import Footer from "../src/components/footer/Footer.js";
import Router from "./router/router.tsx";
import { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="App">
      <Header showProfile={showProfile} />
      <Router showProfile={showProfile} setShowProfile={setShowProfile} />
      <Footer />
    </div>
  );
}

export default App;
