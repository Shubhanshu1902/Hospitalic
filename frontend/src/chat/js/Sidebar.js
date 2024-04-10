import main_logo from "../../icons/main_icon.png"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faMessage } from "@fortawesome/fontawesome-free-solid";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={main_logo} alt="main_logo"/>
            </div>
            <div className="menu">
                MENU
                <div className="items" onClick={() => navigate("/dashboard")}>Dashboard</div>
                <div className="items" onClick={() => navigate("/appointments")}>Appointments</div>
                <div className="items">Patients</div>
                <div className="items" onClick={() => navigate("/chats")}>Messages</div>
                <div className="items">Files</div>
            </div>
            <hr
                style={{color: '#FFFFFF', width: '150px'}} 
            />
            <div className="general">
                GENERAL
                <div className="items">
                    {/* <FontAwesomeIcon
                        icon={faCog}
                    /> */}
                    Settings
                </div>
                <div className="items">Support</div>
            </div>
            <hr
                style={{color: '#FFFFFF', width: '150px'}} 
            />
        </div>
    );
}

export default Sidebar;