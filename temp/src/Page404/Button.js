import { useNavigate } from "react-router-dom";
import "./Button.scss";
import { LogoutCall } from "../connections/Logout";
import { retrieveJWT } from "../connections/CookieJWT";

function Button() {
    const navigate = useNavigate()
    const onClick = () => {
        if(retrieveJWT() !== null)
            LogoutCall()
        navigate("../")
    }
    return <button className="btn" onClick={onClick}>Back to homepage</button>;
}

export default Button;
