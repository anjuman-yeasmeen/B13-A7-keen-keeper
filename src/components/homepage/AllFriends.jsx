import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        setLoading(true);
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching friends data:", error);
                setLoading(false);
            });
    }, []);

    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg text-[#2d4f43]"></span>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 bg-[#f8f9fb]">
            <h1 className="text-2xl font-bold text-[#1a2b3c] mb-10">Your Friends</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {friends.map(friend => (
                    <Link to={`/friend/${friend.id}`} key={friend.id} className="no-underline">
                        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all h-full">
                            
                            <img 
                                src={friend.picture} 
                                alt={friend.name} 
                                className="w-24 h-24 rounded-full object-cover mb-4" 
                            />
                            
                            <h3 className="text-xl font-bold text-[#1a2b3c] mb-1">
                                {friend.name}
                            </h3>
                            
                            <p className="text-sm text-gray-400 mb-3">
                                {friend.days_since_contact}d ago
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-2 mb-5">
                                {friend.tags && friend.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-[#dcfce7] text-[#1a3a32] rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <button className={`px-6 py-2 rounded-full text-white text-xs font-semibold mt-auto w-full max-w-[140px] shadow-sm ${
                                friend.status === 'overdue' ? 'bg-[#ff4d4d]' : 
                                friend.status === 'almost due' ? 'bg-[#f0ad4e]' : 
                                'bg-[#2d4f43]'
                            }`}>
                                {friend.status === 'overdue' ? 'Overdue' : 
                                 friend.status === 'almost due' ? 'Almost Due' : 'On-Track'}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllFriends;