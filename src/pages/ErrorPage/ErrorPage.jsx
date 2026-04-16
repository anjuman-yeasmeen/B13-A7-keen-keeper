import React from 'react';
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f8f9fb] px-6 font-sans">
            <div className="max-w-md w-full text-center space-y-10 p-12 bg-white rounded-[40px] shadow-sm border border-gray-100">
                
                {/* Visual Header */}
                <div className="flex flex-col items-center">
                    <div className="bg-[#fdf2f2] p-5 rounded-3xl mb-8">
                        <AlertTriangle size={40} className="text-[#ff4d4d]" strokeWidth={1.5} />
                    </div>
                    
                    {/* Clear, High-Contrast 404 */}
                    <h1 className="text-[120px] font-black text-[#1a2b3c] leading-none tracking-tighter">
                        404
                    </h1>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#1a2b3c]">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[260px] mx-auto">
                        The link you followed might be broken, or the page may have been removed.
                    </p>
                </div>

                {/* Updated Button Text */}
                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-[#1a2b3c] hover:bg-[#2d4f43] text-white px-10 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-900/10 active:scale-95"
                    >
                        <Home size={16} />
                        Back to Home Page
                    </Link>
                </div>

                {/* Branding Footer */}
                <p className="pt-10 text-[10px] text-gray-300 font-bold uppercase tracking-[0.3em]">
                    CRM System • 2026
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;