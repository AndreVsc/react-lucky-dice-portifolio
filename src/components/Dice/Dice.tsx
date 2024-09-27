import './Dice.css';

interface DiceProps {
    roll: number;
    userGuess: number | '';
    setRoll: (n: number) => void;
    setUserGuess: (n: number | '') => void;
    handleRoll: () => void;
}

const Dice: React.FC<DiceProps> = ({ roll, setRoll, userGuess, setUserGuess, handleRoll }) => {
    const getActiveBalls = (number: number) => {
        switch (number) {
            case 1: return [4];
            case 2: return [1, 7];
            case 3: return [1, 4, 7];
            case 4: return [1, 3, 5, 7];
            case 5: return [1, 3, 4, 5, 7];
            case 6: return [1, 2, 3, 5, 6, 7];
            default: return [];
        }
    };

    const activeBalls = getActiveBalls(roll);

    return (
        <div id = 'dice'>
            <div id='dice-container'>
                <div id="colum-1">
                    <div className={`ball ${activeBalls.includes(1) ? 'ball-active' : 'ball-disable'}`}></div>
                    <div className={`ball ${activeBalls.includes(2) ? 'ball-active' : 'ball-disable'}`}></div>
                    <div className={`ball ${activeBalls.includes(3) ? 'ball-active' : 'ball-disable'}`}></div>
                </div>
                <div id="colum-2">
                    <div></div>
                    <div className={`ball ${activeBalls.includes(4) ? 'ball-active' : 'ball-disable'}`}></div>
                    <div></div>
                </div>
                <div id="colum-3">
                    <div className={`ball ${activeBalls.includes(5) ? 'ball-active' : 'ball-disable'}`}></div>
                    <div className={`ball ${activeBalls.includes(6) ? 'ball-active' : 'ball-disable'}`}></div>
                    <div className={`ball ${activeBalls.includes(7) ? 'ball-active' : 'ball-disable'}`}></div>
                </div>
            </div>
            <div className='buttons'>
                <input
                    type="number"
                    value={userGuess}
                    onChange={(e) => setUserGuess(Number(e.target.value))}
                    placeholder="Adivinhe um número (1-6)"
                    min="1"
                    max="6"
                />
                <button onClick={handleRoll}>Sortear Dado</button>
            </div>
        </div>
    );
};

export default Dice;
