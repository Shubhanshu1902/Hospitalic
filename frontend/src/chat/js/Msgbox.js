import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Messages from "./Messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Msgbox = (props) => {  
    const msgs = {
        "1" : "abcd",
        "2" : "xyzw",
        "3" : "abcd",
        "4" : "yzw",
        "5" : "xyzw",
    }

    return (
        <div className="msgbox">
            <div className="title">
                <span>Discussion</span>
            </div>

            {Object.keys(msgs).map((keyname,i) => {
                return <Messages name={keyname} message={msgs[keyname]}/>
            })}

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
