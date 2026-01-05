import React from 'react';
import { motion } from 'framer-motion';

const ProjectCards = ({ projects, onOpenProject }) => {
    return (
        <div className="fixed left-16 top-24 grid grid-cols-3 gap-x-20 gap-y-12 z-10 select-none w-fit">
            {projects.map((folder, index) => (
                <motion.div
                    key={folder.id}
                    drag
                    dragMomentum={false}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    whileDrag={{ scale: 1.1, zIndex: 50 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => onOpenProject(folder)}
                    className="flex flex-col items-center cursor-pointer group w-20 h-24 touch-none"
                >
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl group-hover:bg-white/15 transition-all relative overflow-hidden group-active:scale-95">
                        <span className="text-3xl drop-shadow-2xl z-10 transform group-hover:rotate-12 transition-transform">{folder.icon}</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30" />
                    </div>
                    <span className="mt-2 text-white text-[10px] font-bold text-center leading-tight drop-shadow-lg px-2 py-0.5 rounded-md group-hover:bg-blue-600/70 transition-all backdrop-blur-sm max-w-[80px] truncate">
                        {folder.title}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectCards;
