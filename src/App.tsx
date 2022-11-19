import { useState } from 'react';
import './App.css'
import { AntCircleDown, AntCircleUp } from './Icons';
import { wordlist } from './wordlist'

function App() {
  const [level, setLevel] = useState(0);

  return (
    <div className="app">
      {level > 0 ? <Navigation onClick={() => setLevel(level - 1)}><AntCircleUp /></Navigation> : <Navigation />}
      <Navigator />
      <WordGrid level={level} />
      <Navigator />
      {level < wordlist.length - 1 ? <Navigation onClick={() => setLevel(level + 1)}><AntCircleDown /></Navigation> : <Navigation />}
    </div>
  )
}

function Navigator() {
  return  <div className="seperator"></div>
}

function Navigation({ children, onClick }: { children?: any, onClick?: () => void }) {
  return <div className="navigation" onClick={onClick}>{children}</div>
}

function WordGrid({ level }: {  level: number }) {
  return (
    <div className="wordgrid">
      {wordlist[level].map(word => (<div className='wordgrid-word'>{word}</div>))}
    </div>
  )
}

export default App
