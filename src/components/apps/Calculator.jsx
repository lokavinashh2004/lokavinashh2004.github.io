import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleNumber = (num) => {
        setDisplay(prev => prev === '0' ? num : prev + num);
    };

    const handleOperator = (op) => {
        setEquation(display + ' ' + op + ' ');
        setDisplay('0');
    };

    const calculate = () => {
        try {
            const result = eval(equation + display);
            setDisplay(String(result));
            setEquation('');
        } catch (e) {
            setDisplay('Error');
        }
    };

    const clear = () => {
        setDisplay('0');
        setEquation('');
    };

    const buttons = [
        { label: 'C', action: clear, color: 'bg-zinc-700' },
        { label: '±', action: () => setDisplay(prev => String(-parseFloat(prev))), color: 'bg-zinc-700' },
        { label: '%', action: () => setDisplay(prev => String(parseFloat(prev) / 100)), color: 'bg-zinc-700' },
        { label: '÷', action: () => handleOperator('/'), color: 'bg-orange-500' },
        { label: '7', action: () => handleNumber('7'), color: 'bg-zinc-800' },
        { label: '8', action: () => handleNumber('8'), color: 'bg-zinc-800' },
        { label: '9', action: () => handleNumber('9'), color: 'bg-zinc-800' },
        { label: '×', action: () => handleOperator('*'), color: 'bg-orange-500' },
        { label: '4', action: () => handleNumber('4'), color: 'bg-zinc-800' },
        { label: '5', action: () => handleNumber('5'), color: 'bg-zinc-800' },
        { label: '6', action: () => handleNumber('6'), color: 'bg-zinc-800' },
        { label: '-', action: () => handleOperator('-'), color: 'bg-orange-500' },
        { label: '1', action: () => handleNumber('1'), color: 'bg-zinc-800' },
        { label: '2', action: () => handleNumber('2'), color: 'bg-zinc-800' },
        { label: '3', action: () => handleNumber('3'), color: 'bg-zinc-800' },
        { label: '+', action: () => handleOperator('+'), color: 'bg-orange-500' },
        { label: '0', action: () => handleNumber('0'), color: 'bg-zinc-800', className: 'col-span-2' },
        { label: '.', action: () => handleNumber('.'), color: 'bg-zinc-800' },
        { label: '=', action: calculate, color: 'bg-orange-500' },
    ];

    return (
        <div className="max-w-[320px] mx-auto bg-black p-4 rounded-3xl shadow-2xl border border-white/10 select-none">
            <div className="text-right p-4 mb-4">
                <div className="text-zinc-500 text-sm h-6">{equation}</div>
                <div className="text-white text-6xl font-light tracking-tight truncate">
                    {display}
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {buttons.map((btn, i) => (
                    <button
                        key={i}
                        onClick={btn.action}
                        className={`${btn.color} ${btn.className || ''} aspect-square md:aspect-auto md:h-14 rounded-full flex items-center justify-center text-white text-xl font-medium active:bg-white/30 transition-colors shadow-lg`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
