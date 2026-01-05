import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillApple } from 'react-icons/ai';

const Startup = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000; // 3 seconds
        const interval = 30; // update every 30ms
        const increment = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit after 100%
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center mb-16"
            >
                <div className="text-white mb-8">
                    <AiFillApple size={100} />
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="text-white/80 text-lg font-light tracking-[0.2em] uppercase text-center px-4"
                >
                    Hey, welcome to my portfolio
                </motion.h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1.5 bg-[#333] rounded-full overflow-hidden">
                {/* Actual Progress */}
                <motion.div
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default Startup;
