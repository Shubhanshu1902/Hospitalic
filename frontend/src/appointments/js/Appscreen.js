import React, { Component } from 'react';
import Sidebar from '../../chat/js/Sidebar';
import AppContent from './AppContent';
import "../css/Appoint.scss";

const Appscreen = () => {
    return (
        <div className='apphome'>
            <Sidebar></Sidebar>
            <AppContent></AppContent>
        </div>
    );
}

export default Appscreen;