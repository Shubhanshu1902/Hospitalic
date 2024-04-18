import React, { useState, useEffect } from 'react';
import "../css/EmailVerification.css";
export const EmailVerification = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(32);
  const [code, setCode] = useState('');
  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsRemaining(secondsRemaining - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [secondsRemaining]);

  const resendCode = () => {
    // Resend verification code logic here
    console.log('Resend code');
  };
  const handleCodeChange = (event) => {
      setCode(event.target.value);
    };
  return (
    <div className="email-verification">
      <h2>Email Verification</h2>
      <p>A 6-digit code has been sent to your email at jo*****2004@gmail.com</p>
      <p>
        <input type="text" maxLength={6} value={code} onChange={handleCodeChange} /> secs remaining
      </p>
      <p>
        <span>0:{secondsRemaining.toString().padStart(2, '0')}</span> secs remaining
      </p>
      <button onClick() => {} >Verify account</button>
      <button onClick={resendCode}>Didnt receive code, Resend</button>
    </div>
  );
};

export default EmailVerification;
