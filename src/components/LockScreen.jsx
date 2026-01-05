import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AiFillCamera } from 'react-icons/ai';
import { BsFillLightningFill } from 'react-icons/bs';

const LockScreen = ({ onUnlock }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
    };

    return (
        <motion.div
            className="flex-1 flex flex-col items-center justify-between py-24 select-none relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Clock & Date */}
            <div className="text-center mt-12">
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white/90 text-xl font-medium tracking-wide"
                >
                    {formatDate(time)}
                </motion.p>
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-white text-[100px] font-bold leading-tight tracking-tighter"
                >
                    {formatTime(time)}
                </motion.h1>
            </div>

            {/* Bottom Controls & Interaction */}
            <div className="w-full px-12 pb-8 flex flex-col items-center">
                <div className="flex justify-between w-full mb-12">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white/80 active:bg-white/30 transition-colors">
                        <BsFillLightningFill size={24} />
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white/80 active:bg-white/30 transition-colors">
                        <AiFillCamera size={24} />
                    </div>
                </div>

                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center space-y-2 cursor-pointer"
                    onClick={onUnlock}
                >
                    <div className="w-32 h-1 bg-white/40 rounded-full" />
                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Swipe up to open</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LockScreen;
