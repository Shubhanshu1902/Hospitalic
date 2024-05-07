import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const SendEmailNotif = (to_email,doctor_name, radiologist_name, report_id) => {
  const templateparams = {
    to_email: to_email,
    doctor_name: doctor_name,
    radiologist_name: radiologist_name,
    report_id: report_id
  }
  const serviceId = "service_ctxgr5n";
  const templateId = "template_pllc374";
  const publicKey = "gi9hX02YfVgh9XP8n";
  emailjs.send(serviceId, templateId, templateparams, publicKey)
    .then((response) => {
    //   console.log("Email sent successfully !!", response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};
