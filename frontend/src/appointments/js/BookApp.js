import React, { Component } from 'react';
import Bookpop from './Bookpop';
import { useState } from 'react';
import Modal from './Modal';

const BookApp = () => {

    const [x, setButtonPopup] = useState(false);

    return (
        <div className='bookapp'>
            <button className='book' onClick={() => setButtonPopup(true)}>Book Appointment</button>
            <Bookpop trigger={x} setTrigger={setButtonPopup}>
                <h3>Book Appointment</h3>
                <Modal trigger={x} setTrigger={setButtonPopup}>hi</Modal>
            </Bookpop>
        </div>
  )
}

export default BookApp