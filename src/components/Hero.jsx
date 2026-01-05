import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white select-none">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl font-light opacity-90"
            >
                Hey, I'm <span className="font-medium">Lok Avinashh</span>. Welcome to my
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-6xl md:text-8xl font-thin italic mt-2 tracking-tight"
            >
                portfolio
            </motion.h1>
        </div>
    );
};

export default Hero;
