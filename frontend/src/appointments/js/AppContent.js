import React, { Component } from 'react';
import Navbar from '../../chat/js/Navbar';
import BookApp from './BookApp';
import Applist from './Applist';

const AppContent = () => {
    return (
        <div className='appcontent'>
            <Navbar></Navbar>
            <BookApp></BookApp>
            <Applist></Applist>
        </div>
    );
}

export default AppContent;