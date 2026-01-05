import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [activeTab, setActiveTab] = useState('clock');

    // Stopwatch state
    const [swTime, setSwTime] = useState(0);
    const [swRunning, setSwRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (activeTab === 'clock') {
            timer = setInterval(() => setTime(new Date()), 1000);
        }
        return () => clearInterval(timer);
    }, [activeTab]);

    useEffect(() => {
        let swInterval;
        if (swRunning) {
            swInterval = setInterval(() => setSwTime(prev => prev + 10), 10);
        }
        return () => clearInterval(swInterval);
    }, [swRunning]);

    const formatSW = (ms) => {
        const min = Math.floor(ms / 60000);
        const sec = Math.floor((ms % 60000) / 1000);
        const msPart = Math.floor((ms % 1000) / 10);
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(msPart).padStart(2, '0')}`;
    };

    return (
        <div className="bg-[#1c1c1e] text-white rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[400px]">
            {/* Tabs */}
            <div className="flex border-b border-white/5 bg-[#2c2c2e]">
                {['clock', 'stopwatch'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === tab ? 'text-orange-500 bg-white/5' : 'text-zinc-500 hover:text-white'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8">
                {activeTab === 'clock' ? (
                    <div className="text-center">
                        <h2 className="text-7xl font-bold tracking-tighter mb-2">
                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                        </h2>
                        <p className="text-orange-500 font-medium">
                            {time.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' })}
                        </p>
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center">
                        <div className="text-7xl font-mono mb-12 tabular-nums">
                            {formatSW(swTime)}
                        </div>
                        <div className="flex space-x-4 w-full max-w-xs">
                            <button
                                onClick={() => setSwRunning(!swRunning)}
                                className={`flex-1 py-4 rounded-full font-bold transition-all ${swRunning ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}
                            >
                                {swRunning ? 'Stop' : 'Start'}
                            </button>
                            <button
                                onClick={() => { setSwTime(0); setSwRunning(false); }}
                                className="flex-1 py-4 rounded-full font-bold bg-zinc-800 text-zinc-400"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Clock;
