import React from 'react';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const ProjectsContent = ({ items, onSelectProject }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(project => (
                <div
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group relative p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all cursor-pointer overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <AiOutlineLink className="text-blue-400" size={20} />
                    </div>

                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
                        {project.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded uppercase tracking-wider text-white/40">
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 text-white/40">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsContent;
