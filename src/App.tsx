import { useState } from "react";
import "./App.css";
import { AntCircleDown, AntCircleUp } from "./Icons";
import { Navigation } from "./Navigation";
import { SuccessThing } from "./SuccessThingy";
import { WordGrid } from "./WordGrid";
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
      <SuccessThing show={showSuccess} done={() => setShowSuccess(false)} />
      <Navigation onClick={() => changeLevel(level - 1)} active={level > 0}>
        <AntCircleUp />
      </Navigation>
      <Seperator />
      <WordGrid level={level} />
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
