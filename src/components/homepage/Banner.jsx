import { Plus } from "lucide-react";

const Banner = () => {
    return (
        <div className="bg-gray-50/50 py-16 px-4 border-b border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a32] tracking-tight mb-4">
                    Friends to keep close in your life
                </h1>
                
                {/* Subtitle */}
                <p className="text-gray-500 max-w-[550px] mx-auto text-sm md:text-[15px] mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                {/* Add Friend Button */}
                <button className="btn bg-[#1a3a32] hover:bg-[#132c26] text-white border-none px-6 rounded-md normal-case mb-12">
                    <Plus size={18} />
                    <span>Add a Friend</span>
                </button>

                {/* Stats Cards Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-[#1a3a32]">10</span>
                        <span className="text-gray-400 text-sm mt-1">Total Friends</span>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-[#1a3a32]">3</span>
                        <span className="text-gray-400 text-sm mt-1">On Track</span>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-[#1a3a32]">6</span>
                        <span className="text-gray-400 text-sm mt-1">Need Attention</span>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-[#1a3a32]">12</span>
                        <span className="text-gray-400 text-sm mt-1">Interactions This Month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;