import React, { Component } from 'react';
import Navbar from '../../chat/js/Navbar';
import BookApp from './BookApp';
import Applist from './Applist';
import { TopBar } from '../Dashboard/Topbar';

const AppContent = () => {
    return (
        <div className='appcontent'>
            <TopBar />
            <BookApp></BookApp>
            <Applist></Applist>
        </div>
    );
}

export default AppContent;