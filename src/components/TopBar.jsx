import React, { useState, useEffect } from 'react';
import { AiFillApple } from 'react-icons/ai';
import resumeFile from '../assets/T_Lok_Avinashh Resume.pdf';

const TopBar = ({ onOpenProjects, onOpenContact }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-8 glass flex items-center justify-between px-4 z-50 text-white text-sm font-medium">
            <div className="flex items-center space-x-4">
                <AiFillApple size={18} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <span className="font-bold">Lok Avinashh Portfolio</span>
            </div>

            <div className="flex items-center space-x-4">
                <span>{formatDate(time)}</span>
                <span>{formatTime(time)}</span>
            </div>
        </div>
    );
};

export default TopBar;
