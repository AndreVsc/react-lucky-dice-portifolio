import { useState } from 'react';
import { Card } from '../components/Card/Card';
import Game from '../components/Game/Game';
import './App.css';
import SceneCanva from '../components/Scene/Scene';

function App() {
  const [attempt, setAttempt] = useState<number>(0);
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleWin = () => {
    setShowCard(true);
  };

  const handleRestart = () => {
    setAttempt(0);
    setShowCard(false);
  };

  return (
    <main id='container'>
      <header id='container-title'>
        <h1>LUCKY DICE</h1>
      </header>
      <section id='container-game'>
        <SceneCanva />
      </section>
      {showCard && (
        <Card attempt={attempt} onRestart={handleRestart} />
      )}
      <footer id='container-copy'>
        <p>Copyright © 2026</p>
      </footer>
    </main>
  );
}

export default App;