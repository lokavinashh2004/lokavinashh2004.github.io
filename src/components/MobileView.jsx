import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { desktopFolders } from '../data/desktopData';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillFileText } from 'react-icons/ai';
import LockScreen from './LockScreen';

const IOSStatusBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-semibold select-none">
            <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <div className="flex items-center space-x-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21l-12-18h24z" />
                </svg>
                <div className="w-5 h-2.5 border border-white/40 rounded-sm relative">
                    <div className="absolute left-0 top-0 h-full bg-white rounded-sm w-[80%]" />
                </div>
            </div>
        </div>
    );
};

const IOSDock = ({ onAction }) => {
    const dockItems = [
        { id: 'github', icon: <AiFillGithub size={28} />, color: 'bg-zinc-800' },
        { id: 'linkedin', icon: <AiFillLinkedin size={28} />, color: 'bg-blue-600' },
        { id: 'email', icon: <AiOutlineMail size={28} />, color: 'bg-orange-500' },
        { id: 'resume', icon: <AiFillFileText size={28} />, color: 'bg-zinc-500' }
    ];

    return (
        <div className="absolute bottom-6 left-4 right-4 h-20 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-around px-4 border border-white/10 shadow-2xl">
            {dockItems.map((item) => (
                <motion.div
                    key={item.id}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onAction(item.id)}
                    className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                    {item.icon}
                </motion.div>
            ))}
        </div>
    );
};

const MobileView = ({ onOpenProject, onDockAction }) => {
    const [isLocked, setIsLocked] = useState(true);

    return (
        <div className="macos-bg w-full h-screen relative overflow-hidden select-none">
            <AnimatePresence mode="wait">
                {isLocked ? (
                    <motion.div
                        key="lock-screen"
                        initial={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="absolute inset-0 z-[200] flex flex-col pt-2 bg-black/20 backdrop-blur-sm"
                        drag="y"
                        dragConstraints={{ top: 0, bottom: -1000 }}
                        dragElastic={{ top: 0, bottom: 0.1 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.y < -50) {
                                setIsLocked(false);
                            }
                        }}
                    >
                        <IOSStatusBar />
                        <LockScreen onUnlock={() => setIsLocked(false)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="springboard"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex flex-col pt-2"
                    >
                        <IOSStatusBar />

                        {/* Springboard Grid */}
                        <div className="flex-1 px-4 mt-8 overflow-y-auto pb-32 custom-scrollbar">
                            <div className="grid grid-cols-4 gap-y-8">
                                {desktopFolders.map((folder, index) => (
                                    <motion.div
                                        key={folder.id}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => onOpenProject(folder)}
                                        className="flex flex-col items-center space-y-1"
                                    >
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-lg active:opacity-70 transition-opacity backdrop-blur-md border border-white/20">
                                            <span className="text-2xl">{folder.icon}</span>
                                        </div>
                                        <span className="text-[10px] text-white font-medium text-center truncate w-full px-1 drop-shadow-md">
                                            {folder.title}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <IOSDock onAction={onDockAction} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileView;
