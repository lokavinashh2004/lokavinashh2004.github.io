import React, { useState } from 'react';

const GuessNumber = () => {
    const [target] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('Guess a number between 1 and 100');
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const checkGuess = (e) => {
        e.preventDefault();
        const num = parseInt(guess);
        if (isNaN(num)) return;

        setAttempts(a => a + 1);
        if (num === target) {
            setMessage(`🎉 Correct! It was ${target}.`);
            setGameOver(true);
        } else if (num < target) {
            setMessage('📈 Too low! Try higher.');
        } else {
            setMessage('📉 Too high! Try lower.');
        }
        setGuess('');
    };

    return (
        <div className="flex flex-col items-center bg-[#1c1c1e] p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Higher or Lower?</h2>
            <p className={`mb-8 text-center h-8 font-medium ${gameOver ? 'text-green-500' : 'text-zinc-400'}`}>
                {message}
            </p>

            <form onSubmit={checkGuess} className="w-full max-w-xs space-y-4">
                <input
                    type="number"
                    value={guess}
                    disabled={gameOver}
                    onChange={(e) => setGuess(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-center text-3xl outline-none focus:border-blue-500 transition-colors tabular-nums"
                    placeholder="??"
                />
                {!gameOver ? (
                    <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold transition-colors">
                        Guess
                    </button>
                ) : (
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl font-bold transition-colors"
                    >
                        Reset Game
                    </button>
                )}
            </form>

            <div className="mt-12 text-zinc-600 font-mono uppercase tracking-widest text-xs">
                Attempts: {attempts}
            </div>
        </div>
    );
};

export default GuessNumber;
