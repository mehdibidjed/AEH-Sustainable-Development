import React from 'react';
import Navbar from '../components/common/NavBar';
import Footer from '../components/common/Footer.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
    return (
        <div className='min-h-screen overflow-x-hidden'>
            <Navbar  className=' fixed z-50'/>
            <main> 
                <Outlet/>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;