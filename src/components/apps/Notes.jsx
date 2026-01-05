import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const Notes = () => {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem('portfolio_notes');
        return saved ? JSON.parse(saved) : [{ id: 1, title: 'Ideas', content: 'Explore RAG architectures...' }];
    });
    const [selectedId, setSelectedId] = useState(notes[0]?.id);

    useEffect(() => {
        localStorage.setItem('portfolio_notes', JSON.stringify(notes));
    }, [notes]);

    const activeNote = notes.find(n => n.id === selectedId);

    const addNote = () => {
        const newNote = {
            id: Date.now(),
            title: 'New Note',
            content: ''
        };
        setNotes([newNote, ...notes]);
        setSelectedId(newNote.id);
    };

    const updateNote = (field, value) => {
        setNotes(notes.map(n => n.id === selectedId ? { ...n, [field]: value } : n));
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter(n => n.id !== id);
        setNotes(newNotes);
        if (selectedId === id) setSelectedId(newNotes[0]?.id);
    };

    return (
        <div className="flex h-[400px] bg-[#1c1c1e] text-white rounded-xl overflow-hidden border border-white/10">
            {/* Sidebar */}
            <div className="w-1/3 border-r border-white/5 bg-[#2c2c2e]/50 backdrop-blur-md overflow-y-auto">
                <div className="p-4 flex justify-between items-center bg-[#2c2c2e]">
                    <h2 className="font-bold">Notes</h2>
                    <button onClick={addNote} className="text-orange-500 hover:bg-white/5 p-1 rounded">
                        <AiOutlinePlus size={20} />
                    </button>
                </div>
                <div className="flex flex-col">
                    {notes.map(note => (
                        <div
                            key={note.id}
                            onClick={() => setSelectedId(note.id)}
                            className={`p-3 cursor-pointer border-b border-white/5 transition-colors ${selectedId === note.id ? 'bg-orange-500/20 shadow-inner' : 'hover:bg-white/5'}`}
                        >
                            <h3 className="font-semibold truncate">{note.title || 'Untitled'}</h3>
                            <p className="text-xs text-zinc-500 truncate">{note.content || 'No content'}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Editor */}
            <div className="flex-1 flex flex-col bg-[#1c1c1e]">
                {activeNote ? (
                    <>
                        <div className="p-4 bg-[#2c2c2e] flex justify-between items-center">
                            <input
                                value={activeNote.title}
                                onChange={(e) => updateNote('title', e.target.value)}
                                className="bg-transparent text-lg font-bold outline-none flex-1 mr-4"
                                placeholder="Title"
                            />
                            <button onClick={() => deleteNote(selectedId)} className="text-zinc-500 hover:text-red-500 transition-colors">
                                <AiOutlineDelete size={20} />
                            </button>
                        </div>
                        <textarea
                            value={activeNote.content}
                            onChange={(e) => updateNote('content', e.target.value)}
                            className="flex-1 p-6 bg-transparent outline-none resize-none leading-relaxed text-zinc-300"
                            placeholder="Start typing..."
                        />
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-zinc-500 italic">
                        Select or create a note
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notes;
