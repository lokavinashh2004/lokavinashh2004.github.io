import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState({ user: 0, comp: 0 });

    const choices = [
        { id: 'rock', icon: '✊', color: 'bg-red-500' },
        { id: 'paper', icon: '✋', color: 'bg-blue-500' },
        { id: 'scissors', icon: '✌️', color: 'bg-yellow-500' }
    ];

    const play = (choice) => {
        const comp = choices[Math.floor(Math.random() * 3)].id;
        setUserChoice(choice);
        setComputerChoice(comp);

        if (choice === comp) setResult('draw');
        else if (
            (choice === 'rock' && comp === 'scissors') ||
            (choice === 'paper' && comp === 'rock') ||
            (choice === 'scissors' && comp === 'paper')
        ) {
            setResult('win');
            setScore(s => ({ ...s, user: s.user + 1 }));
        } else {
            setResult('loss');
            setScore(s => ({ ...s, comp: s.comp + 1 }));
        }
    };

    return (
        <div className="flex flex-col items-center bg-[#1c1c1e] p-8 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex justify-between w-full mb-12 px-4">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Player</p>
                    <p className="text-4xl font-bold">{score.user}</p>
                </div>
                <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">CPU</p>
                    <p className="text-4xl font-bold">{score.comp}</p>
                </div>
            </div>

            <div className="flex space-x-8 mb-16">
                <AnimatePresence mode="wait">
                    {userChoice ? (
                        <motion.div
                            key="result"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="flex items-center space-x-12"
                        >
                            <div className="text-6xl">{choices.find(c => c.id === userChoice).icon}</div>
                            <div className="text-3xl font-bold italic text-zinc-500">VS</div>
                            <div className="text-6xl">{choices.find(c => c.id === computerChoice).icon}</div>
                        </motion.div>
                    ) : (
                        <p className="text-zinc-600 italic">Choose your weapon!</p>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex space-x-4">
                {choices.map(c => (
                    <button
                        key={c.id}
                        onClick={() => play(c.id)}
                        className={`${c.color} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg active:scale-95 transition-transform hover:brightness-110`}
                    >
                        {c.icon}
                    </button>
                ))}
            </div>

            {result && (
                <button
                    onClick={() => { setUserChoice(null); setResult(null); }}
                    className="mt-12 text-sm text-zinc-500 font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                    {result === 'draw' ? "It's a tie! Try again" : result === 'win' ? "You Won! 🎉" : "Machine Won! 🤖"}
                </button>
            )}
        </div>
    );
};

export default RockPaperScissors;
