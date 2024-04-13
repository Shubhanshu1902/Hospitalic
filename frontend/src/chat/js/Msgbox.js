import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Messages from "./Messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FetchChatEntities } from "../../connections/Chat";

const Msgbox = (props) => {
    const reportId = props.reportProps.reportId;
    const chatlist = FetchChatEntities(reportId);
    console.log(typeof chatlist);
    const keys = Object.keys(chatlist);
    console.log(keys);
    console.log(chatlist);
    return (
        <div className="msgbox">
            <div className="title">
                <span>Discussion</span>
            </div>

            {/* <div>
            {chatlist.map((item) => (
                <h2>{item.msg}</h2>
            ))}
            </div> */}

            

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
