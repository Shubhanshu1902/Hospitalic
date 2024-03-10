import hasbulla from "../../icons/Untitled.jpeg"

const Messages = (props) => {
    return (
        <div className="messages">
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla"/>
                <span>{props.name}</span>
            </div>
            <div className="messageContent">
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default Messages;
