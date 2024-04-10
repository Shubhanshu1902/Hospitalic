import React, { Component } from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div className='cardStack'>
            <Card></Card>
            <Card></Card>
            <Card></Card>                
        </div>
    );
}

export default Cards;