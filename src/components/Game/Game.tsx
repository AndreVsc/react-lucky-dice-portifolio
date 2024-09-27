import { useState } from 'react';
import Dice from '../Dice/Dice';
import './Game.css';
import { launchConfetti } from '../../utils/confettiUtil';

const Game: React.FC = () => {
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
        setMessage('rolling ...');

        const rollAnimation = setInterval(() => {
            setRoll(Math.floor(Math.random() * 6) + 1);
        }, 50);

        setTimeout(() => {
            clearInterval(rollAnimation);
            const newRoll = Math.floor(Math.random() * 6) + 1;
            setRoll(newRoll);

            if (userGuess === newRoll) {
                setMessage('Congratulations! You got it right!');
                launchConfetti();
            } else {
                setMessage('It was not this time. Try again!');
            }

            setIsRolling(false);
            setUserGuess('');
        }, 2000);
    };

    return (
        <div id='game'>
            <Dice roll={roll} userGuess={userGuess} setUserGuess={setUserGuess} handleRoll={handleRoll} isRolling={isRolling} />
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Game;