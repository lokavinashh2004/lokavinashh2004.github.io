import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                {/* Modal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-4xl bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden mx-4"
                >
                    {/* Menu Bar style header */}
                    <div className="h-12 bg-white/5 flex items-center px-5 justify-between border-b border-white/10 shrink-0">
                        <div className="flex space-x-2 items-center">
                            <div onClick={onClose} className="w-3.5 h-3.5 bg-[#FF5F56] rounded-full cursor-pointer hover:brightness-110 active:brightness-90 transition-all border border-black/10" />
                            <div className="w-3.5 h-3.5 bg-[#FFBD2E] rounded-full border border-black/10" />
                            <div className="w-3.5 h-3.5 bg-[#27C93F] rounded-full border border-black/10" />
                        </div>
                        <span className="text-white/80 text-sm font-semibold tracking-wide drop-shadow-md">{title}</span>
                        <div className="w-12" /> {/* Spacer */}
                    </div>

                    <div className="p-8 text-white max-h-[80vh] overflow-y-auto custom-scrollbar">
                        {children}
                    </div>

                    <div className="absolute top-2 right-2 md:hidden">
                        <button onClick={onClose} className="text-white/50 hover:text-white">
                            <IoClose size={24} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Modal;
