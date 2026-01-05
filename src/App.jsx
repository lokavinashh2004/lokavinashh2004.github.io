import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Hero from './components/Hero';
import ProjectCards from './components/ProjectCards';
import Modal from './components/Modal';
import Startup from './components/Startup';
import MobileView from './components/MobileView';
import { desktopFolders } from './data/desktopData';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { AnimatePresence } from 'framer-motion';
import resumeFile from './assets/T_Lok_Avinashh Resume.pdf';

// App Components
import Calculator from './components/apps/Calculator';
import Notes from './components/apps/Notes';
import Calendar from './components/apps/Calendar';
import Clock from './components/apps/Clock';
import TicTacToe from './components/apps/TicTacToe';
import SnakeGame from './components/apps/SnakeGame';
import RockPaperScissors from './components/apps/RockPaperScissors';
import GuessNumber from './components/apps/GuessNumber';

// Content Components
import AboutContent from './components/content/AboutContent';
import ProjectsContent from './components/content/ProjectsContent';
import InternshipContent from './components/content/InternshipContent';
import ResumeContent from './components/content/ResumeContent';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedSubProject, setSelectedSubProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProjectsListOpen, setIsProjectsListOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDockAction = (action) => {
    if (action === 'projects') {
      const projectsFolder = desktopFolders.find(f => f.id === 'projects');
      setSelectedFolder(projectsFolder);
    } else if (action === 'email' || action === 'mail') {
      setIsContactOpen(true);
    } else if (action === 'github') {
      window.open('https://github.com/lokavinashh2004', '_blank');
    } else if (action === 'linkedin') {
      window.open('https://www.linkedin.com/in/lokavinashh/', '_blank');
    } else if (action === 'resume') {
      window.open(resumeFile, '_blank');
    }
  };

  const renderFolderContent = (folder) => {
    if (folder.type === 'app') {
      switch (folder.appId) {
        case 'calculator': return <Calculator />;
        case 'notes': return <Notes />;
        case 'calendar': return <Calendar />;
        case 'clock': return <Clock />;
        case 'tictactoe': return <TicTacToe />;
        case 'snake': return <SnakeGame />;
        case 'rps': return <RockPaperScissors />;
        case 'guessnumber': return <GuessNumber />;
        default: return null;
      }
    }

    switch (folder.type) {
      case 'about':
        return <AboutContent content={folder.content} />;
      case 'projects':
        return <ProjectsContent items={folder.items} onSelectProject={setSelectedSubProject} />;
      case 'internship':
        return <InternshipContent content={folder.content} />;
      case 'resume':
        return <ResumeContent folder={folder} />;
      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isBooting && (
          <Startup key="startup" onComplete={() => setIsBooting(false)} />
        )}
      </AnimatePresence>

      <div className="w-full h-screen relative overflow-hidden font-sans">
        {isMobile ? (
          <MobileView
            onOpenProject={setSelectedFolder}
            onDockAction={handleDockAction}
          />
        ) : (
          <div className="macos-bg w-full h-screen relative overflow-hidden">
            <TopBar
              onOpenProjects={() => {
                const projectsFolder = desktopFolders.find(f => f.id === 'projects');
                setSelectedFolder(projectsFolder);
              }}
              onOpenContact={() => setIsContactOpen(true)}
            />

            <Hero />

            <ProjectCards
              projects={desktopFolders}
              onOpenProject={setSelectedFolder}
            />

            <Dock onAction={handleDockAction} />
          </div>
        )}

        {/* Global Modal for Folders */}
        <Modal
          isOpen={!!selectedFolder}
          onClose={() => setSelectedFolder(null)}
          title={selectedFolder?.title}
        >
          {selectedFolder && renderFolderContent(selectedFolder)}
        </Modal>

        {/* Project Detail Modal (Second Level) */}
        <Modal
          isOpen={!!selectedSubProject}
          onClose={() => setSelectedSubProject(null)}
          title={selectedSubProject?.title}
        >
          {selectedSubProject && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{selectedSubProject.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold">{selectedSubProject.title}</h2>
                  <div className="flex space-x-2 mt-2">
                    {selectedSubProject.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white/10 rounded text-xs border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-lg">
                {selectedSubProject.description}
              </p>

              <div className="flex space-x-4 pt-4">
                <a
                  href={selectedSubProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
                >
                  <AiOutlineLink />
                  <span>Live Demo</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors font-medium border border-white/10"
                >
                  <AiOutlineGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          )}
        </Modal>

        {/* Contact Modal */}
        <Modal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          title="Contact Me"
        >
          <div className="space-y-6">
            <p className="text-white/80 text-lg">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
