import React, { useState } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = checkWinner(board);
    const isDraw = !winner && board.every(square => square !== null);

    const handleClick = (i) => {
        if (winner || board[i]) return;
        const newBoard = board.slice();
        newBoard[i] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const reset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="flex flex-col items-center bg-[#1c1c1e] p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">
                {winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${isXNext ? 'X' : 'O'}`}
            </h2>

            <div className="grid grid-cols-3 gap-3 mb-8">
                {board.map((square, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`w-20 h-20 bg-[#2c2c2e] rounded-xl flex items-center justify-center text-4xl font-bold transition-all ${!square && !winner ? 'hover:bg-white/5 active:scale-95' : ''} ${square === 'X' ? 'text-blue-400' : 'text-orange-400'}`}
                    >
                        {square}
                    </button>
                ))}
            </div>

            <button
                onClick={reset}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-colors text-white"
            >
                Reset Game
            </button>
        </div>
    );
};

export default TicTacToe;
