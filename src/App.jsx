import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ConfettiAnimation from "./Components/ConfettiAnimation";

function App() {
  const [isPartyMode, setIsPartyMode] = useState(false);

  const handlePartyModeClick = () => {
    setIsPartyMode(!isPartyMode);
    setTimeout(() => {
      setIsPartyMode(false);
    }, 5000);
  };
  return (
    <div className="App">
      {isPartyMode && <ConfettiAnimation isPartyMode={isPartyMode} />}
      <Header />
      <Home handlePartyModeClick={handlePartyModeClick} />
    </div>
  );
}

export default App;
