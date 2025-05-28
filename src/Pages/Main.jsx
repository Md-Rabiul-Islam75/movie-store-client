import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div className='space-y-4 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main; 