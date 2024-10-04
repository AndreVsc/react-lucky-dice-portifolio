import { useState } from 'react';
import Dice from '../Dice/Dice';
import './Game.css';
import { launchConfetti } from '../../utils/confettiUtil';
import { FaMoon, FaSun } from 'react-icons/fa';

interface gameProps {
  setAttempt: (n: number) => void;
  onWin: () => void;
  attempt: number;
  theme: boolean;
  toggleTheme: () => void;
}

const Game: React.FC<gameProps> = ({ setAttempt, onWin, attempt, theme , toggleTheme }) => {
  const [roll, setRoll] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<number | ''>('');
  const [message, setMessage] = useState<string>('');
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const handleRoll = () => {
    if (userGuess === '') {
      setMessage('Please choose a number between 1 and 6!');
      return;
    }

    if (userGuess < 1 || userGuess > 6) {
      setMessage('The number must be between 1 and 6!');
      return;
    }

    setIsRolling(true);
    setMessage('');

    const rollAnimation = setInterval(() => {
      setRoll(Math.floor(Math.random() * 6) + 1);
    }, 150);

    setTimeout(() => {
      clearInterval(rollAnimation);
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setRoll(newRoll);

      if (userGuess === newRoll) {
        setAttempt(attempt + 1);
        setMessage('');
        launchConfetti();
        onWin();
      } else {
        setAttempt(attempt + 1);
        setMessage('');
      }

      setIsRolling(false);
      setUserGuess('');
    }, 2000);
  };

  return (
    <div id='game'>
      <Dice roll={roll} userGuess={userGuess} setUserGuess={setUserGuess} handleRoll={handleRoll} isRolling={isRolling} />
      <button id='button-theme' onClick={toggleTheme}>
          {theme ? <FaMoon className="icon" /> : <FaSun className="icon" />}
       </button>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Game;