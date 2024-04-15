import hasbulla from "../../icons/Untitled.jpeg"

const Messages = (props) => {
    return (
        <div className="messages">
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla"/>
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>{props.chat.msg}</p>
            </div>

        </div>
    );
}

export default Messages;
