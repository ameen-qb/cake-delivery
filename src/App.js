import Header from "./components/header/Header.js";
import Content from "./components/content/Content.js";
import Footer from "./components/footer/Footer.js";
import { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="App">
      {/* <Header showProfile={showProfile} /> */}
      {/* <Content showProfile={showProfile} setShowProfile={setShowProfile} /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
