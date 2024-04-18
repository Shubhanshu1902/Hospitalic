import hasbulla from "../../icons/Untitled.jpeg"

const Messages = (props) => {
    return (
        <div className="messages">
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla"/>
                <p>senderid: {props.chat.sender_id}</p>
                <p>date time: {props.chat.time}</p>
            </div>
            <div className="messageContent">
                <p>{props.chat.msg}</p>
            </div>

        </div>
    );
}

export default Messages;
