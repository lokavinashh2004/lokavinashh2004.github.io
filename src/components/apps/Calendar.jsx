import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Calendar = () => {
    const [viewDate, setViewDate] = useState(new Date());

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const renderDays = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const days = [];

        // Padding
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-12" />);
        }

        // Real days
        for (let day = 1; day <= totalDays; day++) {
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
            const isInternship = (month === 5 || month === 10) && (day > 1 && day < 20); // Just as a highlight

            days.push(
                <div
                    key={day}
                    className={`h-12 flex flex-col items-center justify-center rounded-lg relative transition-colors ${isToday ? 'bg-blue-600 text-white font-bold' : 'hover:bg-white/5 text-zinc-300'}`}
                >
                    {day}
                    {isInternship && <div className="absolute bottom-1 w-1 h-1 bg-orange-500 rounded-full" />}
                </div>
            );
        }

        return days;
    };

    const changeMonth = (offset) => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
    };

    return (
        <div className="bg-[#1c1c1e] p-6 rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">{monthNames[viewDate.getMonth()]}</h2>
                    <p className="text-zinc-500">{viewDate.getFullYear()}</p>
                </div>
                <div className="flex space-x-2">
                    <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-white/5 rounded-full text-white">
                        <AiOutlineLeft />
                    </button>
                    <button onClick={() => changeMonth(1)} className="p-2 hover:bg-white/5 rounded-full text-white">
                        <AiOutlineRight />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-bold text-zinc-500 uppercase tracking-widest">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
                {renderDays()}
            </div>

            <div className="mt-8 space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-zinc-400">Internship Period</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-zinc-400">Deadlines</span>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
