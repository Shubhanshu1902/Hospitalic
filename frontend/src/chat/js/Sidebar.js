import main_logo from "../../icons/main_icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faMessage } from "@fortawesome/fontawesome-free-solid";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={main_logo} alt="main_logo"/>
            </div>
            <div className="menu">
                MENU
                <div className="items">Dashboard</div>
                <div className="items">Appointments</div>
                <div className="items">Patients</div>
                <div className="items">Messages</div>
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