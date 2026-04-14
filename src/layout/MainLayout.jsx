
import Navbar from '../components/shared/navbar/Navbar';

import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;