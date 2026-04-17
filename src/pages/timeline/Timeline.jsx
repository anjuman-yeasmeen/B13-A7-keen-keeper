import React, { useEffect, useState } from 'react';
import { Phone, Video, MessageSquare, ChevronDown, Search, ArrowUpDown } from 'lucide-react';

const Timeline = () => {
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState(''); 
    const [sortOrder, setSortOrder] = useState('newest'); 

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('timelineData')) || [];
        setActivities(savedData);
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <Phone size={20} className="text-blue-500" />;
            case 'Video': return <Video size={20} className="text-purple-500" />;
            case 'Text': return <MessageSquare size={20} className="text-green-500" />;
            default: return <MessageSquare size={20} className="text-gray-400" />;
        }
    };

   
    
    let filteredActivities = activities.filter(item => {
        const matchesFilter = filter === 'All' || filter === 'Filter timeline' || item.type === filter;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

   
    
    filteredActivities.sort((a, b) => {
        return sortOrder === 'newest' ? b.id - a.id : a.id - b.id;
    });

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen bg-white">
            <h1 className="text-4xl font-extrabold text-[#1a2b3c] mb-8">Timeline</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-10">
                {/* Search Bar */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        type="text"
                        placeholder="Search by friend name..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a3a32]/10"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Filter Dropdown */}
                <div className="relative w-full md:w-48">
                    <select 
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full appearance-none bg-gray-50 border border-gray-100 text-gray-500 py-3 px-4 pr-8 rounded-xl focus:outline-none"
                    >
                        <option value="All">All Types</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>

                {/* Sort Button */}
                <button 
                    onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-100"
                >
                    <ArrowUpDown size={18} />
                    <span className="text-sm font-medium uppercase">{sortOrder}</span>
                </button>
            </div>

            {/* Timeline List */}
            <div className="space-y-4">
                {filteredActivities.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                        <p className="text-gray-400">No matching activities found.</p>
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