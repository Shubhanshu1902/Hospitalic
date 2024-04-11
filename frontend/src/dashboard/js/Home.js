import React, { Component } from 'react';
import Navbar from '../../chat/js/Navbar';
import Content from './Content';

const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <Content></Content>
        </div>
    );
}

export default Home;

