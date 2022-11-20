import { wordlist } from "./wordlist";
import "./WordGrid.css";

export function WordGrid({ level }: { level: number }) {
  return (
    <div className="wordgrid">
      {wordlist[level].map((word) => (
        <div className="wordgrid-word">{word}</div>
      ))}
    </div>
  );
}
