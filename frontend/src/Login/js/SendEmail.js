import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function generateSixDigitNumber() {
  const min = 100000; // Minimum value (6 digits starting with 1)
  const max = 999999; // Maximum value (6 digits)

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
}

export const SendEmail = (to_email,to_name) => {
  const otp = generateSixDigitNumber();
  const templateparams = {
    to_email: to_email,
    to_name: to_name,
    otp: otp
  }
  const serviceId = "service_ctxgr5n";
  const templateId = "template_axp5e19";
  const publicKey = "gi9hX02YfVgh9XP8n";
  emailjs.send(serviceId, templateId, templateparams, publicKey)
    .then((response) => {
      console.log("Email sent successfully !!", response);
      //    setName('');
      //    setEmail('');
      //    setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  return otp;
};
