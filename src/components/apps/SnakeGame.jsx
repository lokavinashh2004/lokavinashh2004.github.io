import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SnakeGame = () => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const [snake, setSnake] = useState([[10, 10], [10, 11]]);
    const [food, setFood] = useState([5, 5]);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleKeys = (e) => {
            switch (e.key) {
                case 'ArrowUp': if (dir[1] !== 1) setDir([0, -1]); break;
                case 'ArrowDown': if (dir[1] !== -1) setDir([0, 1]); break;
                case 'ArrowLeft': if (dir[0] !== 1) setDir([-1, 0]); break;
                case 'ArrowRight': if (dir[0] !== -1) setDir([1, 0]); break;
            }
        };
        window.addEventListener('keydown', handleKeys);
        return () => window.removeEventListener('keydown', handleKeys);
    }, [dir]);

    useEffect(() => {
        if (gameOver) return;
        const move = setInterval(() => {
            setSnake(prev => {
                const head = [prev[0][0] + dir[0], prev[0][1] + dir[1]];

                // Hit walls
                if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20) {
                    setGameOver(true);
                    return prev;
                }

                // Hit self
                if (prev.some(p => p[0] === head[0] && p[1] === head[1])) {
                    setGameOver(true);
                    return prev;
                }

                const newSnake = [head, ...prev];

                // Eat food
                if (head[0] === food[0] && head[1] === food[1]) {
                    setScore(s => s + 10);
                    setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
                    setSpeed(s => Math.max(80, s - 2));
                } else {
                    newSnake.pop();
                }
                return newSnake;
            });
        }, speed);
        return () => clearInterval(move);
    }, [dir, food, gameOver, speed]);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, 400, 400);

        // Render food
        ctx.fillStyle = '#ff453a';
        ctx.fillRect(food[0] * 20, food[1] * 20, 18, 18);

        // Render snake
        ctx.fillStyle = '#32d74b';
        snake.forEach(([x, y]) => {
            ctx.fillRect(x * 20, y * 20, 18, 18);
        });
    }, [snake, food]);

    return (
        <div className="flex flex-col items-center bg-[#1c1c1e] p-6 rounded-2xl border border-white/10 shadow-2xl">
            <div className="w-full flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-white">Score: {score}</span>
                {gameOver && <span className="text-red-500 font-bold uppercase tracking-widest">Game Over!</span>}
            </div>

            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className="bg-black/40 rounded-xl border border-white/5 mb-6 touch-none"
            />

            {/* Mobile Controls */}
            <div className="grid grid-cols-3 gap-2 md:hidden">
                <div />
                <button onClick={() => dir[1] !== 1 && setDir([0, -1])} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><AiOutlineArrowUp /></button>
                <div />
                <button onClick={() => dir[0] !== 1 && setDir([-1, 0])} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><AiOutlineArrowLeft /></button>
                <button onClick={() => dir[1] !== -1 && setDir([0, 1])} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><AiOutlineArrowDown /></button>
                <button onClick={() => dir[0] !== -1 && setDir([1, 0])} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><AiOutlineArrowRight /></button>
            </div>

            {gameOver && (
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-blue-600 rounded-lg text-white font-bold"
                >
                    Restart
                </button>
            )}
        </div>
    );
};

export default SnakeGame;
