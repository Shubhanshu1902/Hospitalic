import Messages from "./Messages";

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
            </div>
        </div>
    );
}

export default Msgbox;