import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Phone, 
  Video, 
  MessageCircle, 
  BellRing, 
  Archive, 
  Trash2, 
  SquarePen 
} from 'lucide-react';

import toast, { Toaster } from 'react-hot-toast';

const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                const singleFriend = data.find(f => f.id === parseInt(id));
                setFriend(singleFriend);
            })
            .catch(error => console.error("Error:", error));
    }, [id]);

   
    const handleCheckIn = (type) => {
        if (!friend) return;

        const newEntry = {
            id: Date.now(),
            type: type,
            title: `${type} with ${friend.name}`,
            date: new Date().toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            })
        };

       
        const existingTimeline = JSON.parse(localStorage.getItem('timelineData')) || [];
        const updatedTimeline = [newEntry, ...existingTimeline];
        localStorage.setItem('timelineData', JSON.stringify(updatedTimeline));

        
        toast.success(`${type} with ${friend.name} recorded!`, {
            style: {
                borderRadius: '12px',
                background: '#1a3a32',
                color: '#fff',
            },
        });
    };

    if (!friend) {
        return <div className="text-center py-20 font-bold text-gray-500">Loading...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 bg-[#f8f9fb] min-h-screen">
            
            <Toaster position="top-right" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <img 
                            src={friend.picture} 
                            alt={friend.name} 
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50" 
                        />
                        <h2 className="text-2xl font-bold text-[#1a2b3c] mb-1">{friend.name}</h2>
                        
                        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase mb-2 text-white ${
                            friend.status === 'overdue' ? 'bg-[#ff4d4d]' : 
                            friend.status === 'almost due' ? 'bg-[#f0ad4e]' : 'bg-[#2d4f43]'
                        }`}>
                            {friend.status}
                        </span>

                        <span className="px-4 py-1 bg-[#dcfce7] text-[#1a3a32] rounded-full text-[10px] font-bold uppercase mb-4 tracking-wider">
                            {friend.tags && friend.tags[0]}
                        </span>

                        <p className="text-gray-500 text-sm italic mb-2">"{friend.bio}"</p>
                        <p className="text-xs text-gray-400 font-medium">Preferred: {friend.email.split('@')[0]}</p>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full bg-white flex items-center justify-center gap-3 py-4 rounded-2xl border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                            <BellRing size={18} strokeWidth={2} /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white flex items-center justify-center gap-3 py-4 rounded-2xl border border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                            <Archive size={18} strokeWidth={2} /> Archive
                        </button>
                        <button className="w-full bg-white flex items-center justify-center gap-3 py-4 rounded-2xl border border-gray-100 text-sm font-bold text-red-500 hover:bg-red-50 transition-all shadow-sm">
                            <Trash2 size={18} strokeWidth={2} /> Delete
                        </button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8 space-y-6">
                    
                    {/* ① Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-10 rounded-[24px] shadow-sm border border-gray-100 text-center">
                            <h4 className="text-5xl font-bold text-[#1a2b3c]">{friend.days_since_contact}</h4>
                            <p className="text-gray-400 text-[10px] uppercase font-bold mt-3 tracking-[0.1em]">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-10 rounded-[24px] shadow-sm border border-gray-100 text-center">
                            <h4 className="text-5xl font-bold text-[#1a2b3c]">{friend.goal}</h4>
                            <p className="text-gray-400 text-[10px] uppercase font-bold mt-3 tracking-[0.1em]">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-10 rounded-[24px] shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-[#1a2b3c] leading-tight">{friend.next_due_date}</h4>
                            <p className="text-gray-400 text-[10px] uppercase font-bold mt-3 tracking-[0.1em]">Next Due</p>
                        </div>
                    </div>

                    {/* ② Relationship Goal Card */}
                    <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex justify-between items-center">
                        <div>
                            <h4 className="text-gray-500 font-bold text-[11px] mb-4 uppercase tracking-widest">Relationship Goal</h4>
                            <p className="text-sm text-gray-600">
                                Connect every <span className="font-bold text-black">{friend.goal} days</span>
                            </p>
                        </div>
                        <button className="bg-gray-50 hover:bg-gray-100 text-gray-500 p-2 rounded-lg border border-gray-100">
                            <SquarePen size={18} />
                        </button>
                    </div>

                    {/* ③ Quick Check-In Card (Functionality Added) */}
                    <div className="bg-white p-10 rounded-[24px] shadow-sm border border-gray-100">
                        <h4 className="text-gray-400 font-bold text-[11px] mb-8 uppercase tracking-[0.2em]">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-6">
                            
                            {/* Call Button */}
                            <button 
                                onClick={() => handleCheckIn('Call')}
                                className="flex flex-col items-center gap-3 py-8 bg-[#f8f9fb] rounded-3xl text-[#1a2b3c] hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
                            >
                                <Phone size={28} strokeWidth={1.5} />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Call</span>
                            </button>
                            
                            {/* Text Button */}
                            <button 
                                onClick={() => handleCheckIn('Text')}
                                className="flex flex-col items-center gap-3 py-8 bg-[#f8f9fb] rounded-3xl text-[#1a2b3c] hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
                            >
                                <MessageCircle size={28} strokeWidth={1.5} />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Text</span>
                            </button>
                            
                            {/* Video Button */}
                            <button 
                                onClick={() => handleCheckIn('Video')}
                                className="flex flex-col items-center gap-3 py-8 bg-[#f8f9fb] rounded-3xl text-[#1a2b3c] hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
                            >
                                <Video size={28} strokeWidth={1.5} />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;