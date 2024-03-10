import React, { useState } from "react";
import "../css/LoginScreen.scss";
import main_logo from "../../icons/main_icon.png";
import { LoginOptions } from "./LoginOptions";
import { LoginBox } from "./LoginBox";

export const LoginScreen = () => {
    const login_types = ["Patient", "Doctor", "Lab", "Radiologist"];
    const [currSelection, setCurrSelection] = useState("None");
    
    const changeSelection = (i) => {
        setCurrSelection(i);
        console.log(i);
    }

    return (
        <div className="Login">
            <div className="options">
                <div className="title1">
                    Sign in To
                    <img src={main_logo} alt="main_logo" />
                </div>

                {login_types.map((s, i) => (
                    <LoginOptions key={i} type={s} onClick = {() => changeSelection(s)}/>
                ))}
            </div>

            <LoginBox type={currSelection}/>
        </div>
    );
};
