import React, { Component } from 'react';
import Cards from './Cards';
import Tasks from './Tasks';


const Content = () => {
    return (
        <div className='content'>
            <Cards></Cards>
            <Tasks></Tasks>
        </div>
    );
}

export default Content;