import React, { useEffect, useState } from 'react';
import { Phone, Video, MessageSquare, Users, ChevronDown } from 'lucide-react';

const Timeline = () => {
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('Filter timeline'); 

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('timelineData')) || [];
        setActivities(savedData);
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <Phone size={20} className="text-gray-600" />;
            case 'Video': return <Video size={20} className="text-gray-600" />;
            case 'Text': return <MessageSquare size={20} className="text-gray-600" />;
            default: return <MessageSquare size={20} className="text-gray-600" />;
        }
    };

   
    const filteredActivities = activities.filter(item => {
        if (filter === 'Filter timeline' || filter === 'All') return true;
        return item.type === filter;
    });

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen bg-white">
            <h1 className="text-4xl font-extrabold text-[#1a2b3c] mb-8">Timeline</h1>

            <div className="relative inline-block w-64 mb-10">
                <select 
                    onChange={(e) => setFilter(e.target.value)}
                    className="block w-full appearance-none bg-gray-50 border border-gray-100 text-gray-500 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white text-sm cursor-pointer"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDown size={16} />
                </div>
            </div>

            <div className="space-y-4">
                {filteredActivities.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                        <p className="text-gray-400">No activities found.</p>
                    </div>
                ) : (
                    filteredActivities.map((item) => (
                        <div key={item.id} className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-sm transition-all group">
                            <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                                {getIcon(item.type)}
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-[#1a2b3c]">{item.title}</h4>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">{item.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Timeline;