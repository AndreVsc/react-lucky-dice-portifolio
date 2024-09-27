import Game from '../components/Game/Game';
import './App.css';

function App() {

  return (
    <main id='container'>
      <header id='container-title'>
        <h1>LUCKY DICE</h1>
      </header>
      <section id='container-game'>
        <Game />
      </section>
      <footer id='container-copy'>
        <p>Copyright © 2026</p>
      </footer>
    </main>
  )
};

export default App;
