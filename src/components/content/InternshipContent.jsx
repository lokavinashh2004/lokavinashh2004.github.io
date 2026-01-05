import React from 'react';
import { motion } from 'framer-motion';

const InternshipContent = ({ content }) => {
    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                    <h3 className="text-2xl font-bold text-white">{content.role}</h3>
                    <div className="flex flex-wrap items-center text-blue-400 font-semibold mt-1 gap-2">
                        <span>{content.company}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-white/40 text-sm">{content.location}</span>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/60 text-sm font-bold backdrop-blur-md">
                    {content.period}
                </div>
            </header>

            <section>
                <h4 className="text-lg font-bold mb-4 text-white/90">Work Summary</h4>
                <p className="text-white/70 leading-relaxed text-lg italic">
                    "{content.description}"
                </p>
            </section>

            <section>
                <h4 className="text-lg font-bold mb-4 flex items-center">
                    <span className="mr-2">🚀</span> Key Achievements
                </h4>
                <ul className="space-y-4">
                    {content.achievements.map((achievement, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3 text-white/80"
                        >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{achievement}</span>
                        </motion.li>
                    ))}
                </ul>
            </section>

            <section>
                <h4 className="text-lg font-bold mb-4">Tech Stack Applied</h4>
                <div className="flex flex-wrap gap-3">
                    {content.techUsed.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="pt-4">
                <h4 className="text-lg font-bold mb-4">System Architecture / Flow</h4>
                <div className="aspect-video bg-white/5 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center group overflow-hidden relative">
                    <div className="text-white/20 group-hover:text-blue-400 transition-colors flex flex-col items-center">
                        <span className="text-4xl mb-2">📊</span>
                        <span className="text-sm font-medium">Architecture Diagram Coming Soon</span>
                    </div>
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>
            </section>
        </div>
    );
};

export default InternshipContent;
