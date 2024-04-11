import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Messages from "./Messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Msgbox = () => {
    return (
        <div className="msgbox">
            <div className="title">
                <span>Discussion</span>
            </div>
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />

            <div className="input">
                <input type="text" placeholder= 'Input'/>
                <div className="sendArrow">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    );
}

export default Msgbox;
