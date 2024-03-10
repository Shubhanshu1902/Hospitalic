import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell, faSignOutAlt } from "@fortawesome/fontawesome-free-solid"

const Navbar = () => {

    const date = new Date().toLocaleDateString();

    return (
        <div className="navbar">
            <div className="search">
                Search
            </div>
            <div className="name">
                John Doe
                <h4>General Doctor</h4>
            </div>
            <div className="date">
                {date}
            </div>
            <div className="icons">
                <FontAwesomeIcon 
                    icon={faEnvelope}
                    style={{scale:"1.75"}} 
                />
                <FontAwesomeIcon 
                    icon={faBell}
                    style={{scale:"1.75"}} 
                />
                <FontAwesomeIcon 
                    icon={faSignOutAlt }
                    style={{scale:"1.75"}}
                />
            </div>
        </div>
    );
}

export default Navbar;