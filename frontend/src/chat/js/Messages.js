import { useState } from "react";
import { GetUser } from "../../connections/User";
import hasbulla from "../../icons/Untitled.jpeg"

const Messages = (props) => {
    const sender = Promise.resolve(GetUser(props.sender_id))
    const [name,setName] = useState({})

    sender.then(
        value => {
            setName(value)
        }
    )

    if(name != {}) 
        var p = name.fname + " " + name.lname;
    // console.log(p);

    return (
        <div className="messages">
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla"/>
                <p>{p}</p>
                {/* <p>date time: {props.chat.time}</p> */}
            </div>
            <div className="messageContent">
                <p>{props.chat.msg}</p>
            </div>

        </div>
    );
}

export default Messages;
