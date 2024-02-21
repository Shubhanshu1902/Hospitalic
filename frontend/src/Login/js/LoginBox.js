import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faEnvelope, faLock } from "@fortawesome/fontawesome-free-solid";

export const LoginBox = (props) => {
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
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={faLock} />
                    Password
                </div>

                <div className="text" style={{textDecoration: "underline"}} >
                    Forgot your password?
                </div>

                <div className="signin">
                    Sign In
                </div>

            </div>
        );
};
