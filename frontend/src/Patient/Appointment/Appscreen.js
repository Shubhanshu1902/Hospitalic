import React, { Component } from 'react';
import Sidebar from '../../chat/js/Sidebar';
import AppContent from './AppContent';
import "../Patient.scss";
import { Navbar } from '../Dashboard/Navbar';

const Appscreen = () => {
    return (
        <div className='apphome'>
            <Navbar />
            <AppContent />
        </div>
    );
}

export default Appscreen;