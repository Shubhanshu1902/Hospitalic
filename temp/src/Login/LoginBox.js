import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginCall } from "../connections/Login";

export const LoginBox = (props) => {
    const [email, setEmail] = useState("")
    const [eicon, setEicon] = useState(true)
    const [password, setPassword] = useState("")
    const [picon, setPicon] = useState(true)
    let navigate = useNavigate()

    const onChangeEBox = (event) => {
        setEmail(event.target.value);
    }

    const onChangePBox = (event) => {
        setPassword(event.target.value);
    }

    // TODO
    const onSignIn = () => {
        console.log(props.type)
        console.log(email,password)
        const data = Promise.resolve(LoginCall(email, password));
        navigate(`/${props.type.toLowerCase()}/dashboard`)
    }

    const onRegister = () => {
        let path = 'register'
        navigate(path);
    }
    
    if(props.type !== "None") 
        return (
            <div className="LoginBox">
                <div className="title1">Login As {props.type}</div>
                <div className="icons">
                    <FontAwesomeIcon
                        icon="fa-brands fa-facebook"
                        style={{ color: "#2F80ED", scale: "2.5" }}
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-google"
                        style={{ color: "#FF4343", scale: "2.5" }}
                    />
                    <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        style={{ color: "#0077B5", scale: "2.5" }}
                    />
                </div>

                <div className="text">or use ur email account</div>
                <div className="box">
                    {eicon && <FontAwesomeIcon icon="fa-solid fa-envelope" />}
                    <input type="text" value={email} placeholder="Email" onChange={onChangeEBox}/>
                </div>

                <div className="box">
                    {picon && <FontAwesomeIcon icon="fa-solid fa-lock" />}
                    <input type="password" value={password} placeholder="Password" onChange={onChangePBox}/>
                </div>

                <div className="text" style={{textDecoration: "underline"}} >
                    Forgot your password?
                </div>

                <div className="signin" onClick={onSignIn}>
                    Sign In
                </div>

                {props.type === "Patient" && 
                    <div className="text" style={{textDecoration: "underline"}} onClick={onRegister}>
                        Register
                    </div>
                }

            </div>
        );
};
