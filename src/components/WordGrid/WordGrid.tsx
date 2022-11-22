import { wordlist } from "../../wordlist";
import "./WordGrid.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createRef, useEffect, useRef, useState } from "react";

export function WordGrid({ level }: { level: number }) {
  const prevLevel = usePrevious(level);

  const levels = wordlist.map((wordlist, index) => ({
    nodeRef: createRef<HTMLDivElement>(),
    id: index,
    words: wordlist,
  }));

  return (
    <div className="wordgrid-container">
      {levels.map(({ id, nodeRef, words }) => (
        <CSSTransition
          key={id}
          nodeRef={nodeRef}
          in={id === level}
          classNames={prevLevel > level ? "wordgrid-up" : "wordgrid-down"}
          className="wordgrid"
          unmountOnExit
          timeout={500}
        >
          <div className="wordgrid" ref={nodeRef}>
            {words.map((word, index) => (
              <div key={word + String(index)} className="wordgrid-word">
                {word}{" "}
              </div>
            ))}
          </div>
        </CSSTransition>
      ))}
    </div>
  );
}

// Hook, see https://usehooks.com/usePrevious/
function usePrevious<T>(value: T): T {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref: any = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
