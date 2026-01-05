import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = ({ content }) => {
    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <section>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-sm">👤</span>
                    Who am I?
                </h3>
                <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
                    {content.intro}
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h3 className="text-lg font-bold mb-4 text-blue-400">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {content.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold mb-4 text-purple-400">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {content.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
};

export default AboutContent;
