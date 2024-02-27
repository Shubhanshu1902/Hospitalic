import React from 'react'
import "../css/LoginScreen.scss";
import main_logo from "../../icons/main_icon.png";
import { LoginOptions } from "./LoginOptions";

export const Register = () => {
  const login_types = ["Patient", "Doctor", "Lab", "Radiologist"];
  return (
    <div>
        <div className="Login">
            <div className="options">
                <div className="title1">
                    Sign in To
                    <img src={main_logo} alt="main_logo" />
                </div>

                {login_types.map((s, i) => (
                    <LoginOptions key={i} type={s}/>
                ))}
            </div>
        </div>
    </div>
  )
}
