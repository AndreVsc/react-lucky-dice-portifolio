import './Card.css';
import { useEffect, useState } from 'react';

interface cardProps {
  attempt: number;
  onRestart: () => void;
}

export function Card({ attempt, onRestart }: cardProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onRestart, 500);
  };

  return (
    <div id='card' className={show ? 'show' : 'hide'}>
      <div id='card-container'>
        <div id='container-title'>
          <h2>Congratulations! <span className="rgb-text">You won the game</span>!</h2>
        </div>
        <div id='container-attempt'>
          <p id='attempt'>{attempt}</p>
          <p id='attempt-text'>Attempts!</p>
        </div>
        <div id='container-button'>
          <button onClick={handleClose}>Play again</button>
        </div>
      </div>
    </div>
  );
}