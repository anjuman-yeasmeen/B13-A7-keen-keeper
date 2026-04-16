
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#1a3a32] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
              
                <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
                
               
                <p className="text-gray-300 max-w-4xl mx-auto mb-8 text-sm md:text-base leading-relaxed truncate">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

               
                <div className="mb-10">
                    <h3 className="text-sm font-semibold mb-4 uppercase tracking-widest">Social Links</h3>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="w-10 h-10 bg-white text-[#1a3a32] rounded-full flex items-center justify-center hover:bg-gray-200 transition-all">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white text-[#1a3a32] rounded-full flex items-center justify-center hover:bg-gray-200 transition-all">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white text-[#1a3a32] rounded-full flex items-center justify-center hover:bg-gray-200 transition-all">
                            <FaXTwitter size={18} />
                        </a>
                    </div>
                </div>

                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    
                    <div className="flex gap-6 text-xs text-gray-400">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;