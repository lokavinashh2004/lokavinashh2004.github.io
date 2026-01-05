import React from 'react';
import { AiOutlineDownload, AiOutlineFilePdf } from 'react-icons/ai';
import resumeFile from '../../assets/T_Lok_Avinashh Resume.pdf';

const ResumeContent = ({ folder }) => {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Professional Resume</h3>
                    <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest font-bold flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        Last Synced: {folder.lastUpdated}
                    </p>
                </div>
                <a
                    href={resumeFile}
                    download="T_Lok_Avinashh_Resume.pdf"
                    className="flex items-center justify-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold shadow-xl shadow-blue-600/20 active:scale-95 group"
                >
                    <AiOutlineDownload size={22} className="group-hover:translate-y-0.5 transition-transform" />
                    <span>Download CV</span>
                </a>
            </div>

            <section className="relative">
                <div className="aspect-[1/1.414] bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group">
                    {/* Real PDF Preview */}
                    <iframe
                        src={`${resumeFile}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full border-none grayscale-[0.2] invert-[0.05] brightness-110"
                        title="Resume Preview"
                    />

                    {/* Mobile Overlay for better touch navigation */}
                    <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl" />
                </div>
            </section>

            <footer className="flex items-center justify-center space-x-2 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
                <AiOutlineFilePdf size={14} />
                <p>Digital Copy • Validated Portfolio Asset</p>
            </footer>
        </div>
    );
};

export default ResumeContent;
