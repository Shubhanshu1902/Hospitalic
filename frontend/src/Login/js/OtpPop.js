import React, { useState, useEffect } from 'react';

import { RegisterCall } from '../../connections/Register';
import { Navigate, useNavigate } from "react-router-dom";

const OtpPop = (props) => {
  const ogotp = props.otp;
  let navigate = useNavigate();
  const [secondsRemaining, setSecondsRemaining] = useState(32);
    const [code, setCode] = useState('');
    useEffect(() => {
      const timerId = setInterval(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }, [secondsRemaining]);

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const checkVerification = () => {
      if(code == ogotp){
        RegisterCall(props.email,props.password,props.fname,props.lname,props.gender,props.startDate,props.address, 1);
        alert("OTP verified successfully !! Please Login ....");
        navigate("/");
      }
      else{
        alert("Invalid OTP !! Please register again.... ");
        navigate("/");
      }
    }
  return(props.trigger) ? (
    <div className='popup'>
        <div className='pop-in'>
            <button className='close' onClick={() => props.setTrigger(false)}>X</button>
            <div className="email-verification">
                  <p>Email Verification</p>
                  <p>A 6-digit code has been sent to your email at jo*****2004@gmail.com</p>
                  <p>
                    <input type="text" maxLength={6} value={code} onChange={handleCodeChange} /> secs remaining
                  </p>
                  <p>
                    <span>0:{secondsRemaining.toString().padStart(2, '0')}</span> secs remaining
                  </p>
                  <button onClick={checkVerification}>Verify account</button>
                {/*<button onClick={resendCode}>Didnt receive code, Resend</button>*/}
                </div>
        </div>
    </div>
  ) : ""
}

export default OtpPop;