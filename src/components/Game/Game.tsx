import { useState } from 'react';
import Dice from '../Dice/Dice';
import './Game.css';

const Game: React.FC = () => {
    const [roll, setRoll] = useState<number>(0);
    const [userGuess, setUserGuess] = useState<number | ''>('');
    const [message, setMessage] = useState<string>('');

    const handleRoll = () => {
        if (userGuess === '') {
            setMessage('Por favor, escolha um número entre 1 e 6!');
            return;
        }

        if (userGuess < 1 || userGuess > 6) {
            setMessage('O número deve estar entre 1 e 6!');
            return;
        }

        const newRoll = Math.floor(Math.random() * 6) + 1;
        setRoll(newRoll);

        if (userGuess === newRoll) {
            setMessage('Parabéns! Você acertou!');
        } else {
            setMessage('Não foi dessa vez. Tente novamente!');
        }

        setUserGuess('');
    };

    return (
        <div id='game'>
            <Dice roll={roll} setRoll={setRoll} userGuess={userGuess} setUserGuess={setUserGuess} handleRoll={handleRoll} />
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Game;
