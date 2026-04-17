import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Status = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
       
        const savedData = JSON.parse(localStorage.getItem('timelineData')) || [];

       
        const counts = savedData.reduce((acc, curr) => {
            acc[curr.type] = (acc[curr.type] || 0) + 1;
            return acc;
        }, {});

        
        const formattedData = Object.keys(counts).map(key => ({
            name: key + 's', // e.g., Call -> Calls
            value: counts[key]
        }));

        setChartData(formattedData);
    }, []);

    
    const COLORS = ['#8b5cf6', '#10b981', '#065f46', '#f59e0b'];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 bg-[#f8f9fb] min-h-screen">
            <h1 className="text-3xl font-bold text-[#1a2b3c] mb-10">Friendship Analytics</h1>

            <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-500 mb-6">By Interaction Type</h3>
                
                <div className="h-80 w-full">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            No interaction data available. Try checking in with a friend!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Status;