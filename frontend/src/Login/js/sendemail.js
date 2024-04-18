import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function generateSixDigitNumber() {
  const min = 100000; // Minimum value (6 digits starting with 1)
  const max = 999999; // Maximum value (6 digits)

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

  export const sendEmail = (props) => {
    const templateparams = {
    to_email : "arinawasthi05@gmail.com",
    to_name : "Vatsal",
    otp : generateSixDigitNumber()
    }
    const serviceId = "service_axhgtbu";
    const templateId = "template_8lzo7zr";
    const publicKey = "PQZ1zIcY9TzRD0qEZ";
    emailjs.send(serviceId, templateId, templateparams, publicKey)
    .then((response) => {
    console.log("Email sent successfully !!", response);
//    setName('');
//    setEmail('');
//    setMessage('');
    })
    .catch((error) =>{
        console.error('Error sending email:', error);
    });
    return templateparams.otp;
  };
