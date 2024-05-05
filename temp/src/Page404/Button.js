import { useNavigate } from "react-router-dom";
import "./Button.scss";

function Button() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate("../")
    }
    return <button className="btn" onClick={onClick}>Back to homepage</button>;
}

export default Button;
