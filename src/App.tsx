import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TwoThousandFourtyEight'
import TwoThousandFourtyEight from './components/TwoThousandFourtyEight';
import Sudocu from './components/Sudocu';
import MemoryGame from './components/MemoryGame';
import TicTac from './components/TicTac/TicTac';
import Snake from './components/Snake';

function App() {
  const [game, setGame] = useState('2048')
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li onClick={() => setGame('2048')}>2048</li>
            <li onClick={() => setGame('snake')}>Snake</li>
            <li onClick={() => setGame('tic-tac')}>Tic tac</li>
            <li onClick={() => setGame('memory-game')}>Memory game</li>
            <li onClick={() => setGame('sudocu')}>Sudocu</li>
          </ul>
        </nav>
        {game === '2048' && <TwoThousandFourtyEight />}
        {game === 'snake' && <Snake />}
        {game === 'tic-tac' && <TicTac />}
        {game === 'memory-game' && <MemoryGame />}
        {game === 'sudocu' && <Sudocu />}
      </header>
    </div>
  );
}

export default App;
