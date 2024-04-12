import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/fontawesome-free-solid";
import { useNavigate,Link } from "react-router-dom";
import { LoginCall } from "../../connections/Login";
import { SaveChatCall, FetchChatEntities } from "../../connections/Chat";
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
        LoginCall(email, password);
//        SaveChatCall(1, "vatsal3", "Yay !!");
        FetchChatEntities(1);
    }

    const onRegister = () => {
        let path = 'register'
        navigate(path);
    }
    
    if(props.type != "None") 
        return (
            <div className="LoginBox">
                <div className="title1">Login As {props.type}</div>
                <div className="icons">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "#2F80ED", scale: "2.5" }}
                    />
                    <FontAwesomeIcon
                        icon={faGooglePlusG}
                        style={{ color: "#FF4343", scale: "2.5" }}
                    />
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "#0077B5", scale: "2.5" }}
                    />
                </div>

                <div className="text">or use ur email account</div>
                <div className="box">
                    {eicon && <FontAwesomeIcon icon={faEnvelope} />}
                    <input type="text" value={email} placeholder="Email" onChange={onChangeEBox}/>
                </div>

                <div className="box">
                    {picon && <FontAwesomeIcon icon={faLock} />}
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
