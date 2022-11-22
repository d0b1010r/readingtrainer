import { useState } from "react";
import "./App.css";
import { AntCircleDown, AntCircleUp } from "./components/Icons/Icons";
import { Navigation } from "./components/Navigation/Navigation";
import { SuccessThing } from "./components/SuccessThing/SuccessThingy";
import { WordGrid } from "./components/WordGrid/WordGrid";
import { wordlist } from "./wordlist";

function App() {
  const [level, setLevel] = useState(0);
  const [showSuccess, setShowSuccess] = useState(true);

  function changeLevel(level: number): void {
    setShowSuccess(true);
    setLevel(level);
  }

  return (
    <div className="app">
      <Navigation onClick={() => changeLevel(level - 1)} active={level > 0}>
        <AntCircleUp />
      </Navigation>
      <Seperator />
      <WordGrid level={level} />
      <SuccessThing show={showSuccess} done={() => setShowSuccess(false)} />
      <Seperator />
      <Navigation
        onClick={() => changeLevel(level + 1)}
        active={level < wordlist.length - 1}
      >
        <AntCircleDown />
      </Navigation>
    </div>
  );
}

function Seperator() {
  return <div className="seperator"></div>;
}

export default App;
