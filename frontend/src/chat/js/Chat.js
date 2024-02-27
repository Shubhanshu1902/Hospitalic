import Report from "./Report.js" 
import Navbar from "./Navbar.js"
import Msgbox from "./Msgbox.js";
import ReportContainer from "./ReportContainer.js";
import BottomCont from "./BottomCont.js";

const Chat = () => {
    return (
        <div className="chat">
            <Navbar />
            <ReportContainer />
            <BottomCont />
        </div>
    );
}

export default Chat;