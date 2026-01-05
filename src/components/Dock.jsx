import React from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillFolderFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';

const icons = [
    { id: 'github', icon: <AiFillGithub size={30} />, label: 'GitHub', link: 'https://github.com/lokavinashh2004' },
    { id: 'linkedin', icon: <AiFillLinkedin size={30} />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/lokavinashh/' },
    { id: 'mail', icon: <AiOutlineMail size={30} />, label: 'Email', link: 'mailto:lokavinashh2004@gmail.com' },
    { id: 'projects', icon: <BsFillFolderFill size={30} />, label: 'Projects', action: 'projects' },
    { id: 'resume', icon: <HiDocumentText size={30} />, label: 'Resume', link: '/resume.pdf' },
];

const Dock = ({ onAction }) => {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center space-x-2 px-4 py-2 glass rounded-2xl shadow-2xl">
                {icons.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{
                            scale: 1.5,
                            y: -10,
                            transition: { type: 'spring', stiffness: 300, damping: 10 }
                        }}
                        className="relative group cursor-pointer p-2 rounded-xl hover:bg-white/20 transition-colors"
                        onClick={() => item.action ? onAction(item.action) : window.open(item.link, '_blank')}
                    >
                        <div className="text-white">
                            {item.icon}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                            {item.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Dock;
