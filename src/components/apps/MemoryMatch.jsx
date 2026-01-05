import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MemoryMatch = () => {
    const icons = ['🍎', '🍌', '🍇', '🍉', '🍍', '🍒', '🥝', '🥑'];
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const initialCards = [...icons, ...icons]
            .sort(() => Math.random() - 0.5)
            .map((icon, index) => ({ id: index, icon }));
        setCards(initialCards);
    }, []);

    const handleClick = (id) => {
        if (disabled || flipped.includes(id) || solved.includes(id)) return;

        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setDisabled(true);
            const [first, second] = newFlipped;
            if (cards[first].icon === cards[second].icon) {
                setSolved([...solved, first, second]);
                setFlipped([]);
                setDisabled(false);
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setDisabled(false);
                }, 1000);
            }
        }
    };

    return (
        <div className="flex flex-col items-center bg-[#1c1c1e] p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="mb-8 flex justify-between w-full">
                <h2 className="text-2xl font-bold">Memory Match</h2>
                <span className="text-zinc-500 font-mono">{solved.length / 2} / {icons.length} Pairs</span>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`w-16 h-16 cursor-pointer relative preserve-3d transition-all duration-500 ${flipped.includes(i) || solved.includes(i) ? 'rotate-y-180' : ''}`}
                    >
                        <div className={`absolute inset-0 bg-[#2c2c2e] rounded-xl flex items-center justify-center text-2xl backface-hidden border border-white/5`}>
                            ❓
                        </div>
                        <div className={`absolute inset-0 bg-blue-600 rounded-xl flex items-center justify-center text-3xl rotate-y-180 backface-hidden ${solved.includes(i) ? 'opacity-50 grayscale' : ''}`}>
                            {card.icon}
                        </div>
                    </div>
                ))}
            </div>

            {solved.length === cards.length && cards.length > 0 && (
                <button
                    onClick={() => window.location.reload()}
                    className="mt-8 px-6 py-2 bg-green-600 rounded-lg font-bold text-white shadow-lg"
                >
                    Play Again
                </button>
            )}
        </div>
    );
};

export default MemoryMatch;
