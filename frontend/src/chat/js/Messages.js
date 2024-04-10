import hasbulla from "../../icons/Untitled.jpeg"

const Messages = () => {
    return (
        <div className="messages">
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla"/>
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
            </div>

        </div>
    );
}

export default Messages;
