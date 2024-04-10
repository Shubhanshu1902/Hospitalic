import Sidebar from "../../chat/js/Sidebar";
import "../css/Dashboard.scss";
import Home from "./Home";

const Dash = () => {
    return(
        <div className="dash">
            <Sidebar></Sidebar>
            <Home></Home>
        </div>
    );
};

export default Dash;