import React, { useEffect, useState } from "react";
import { GetUser } from "../connections/User";
import hasbulla from "../icons/Untitled.jpeg"


export const Messages = props => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        let sender = [];
        async function fetchdata() {
            // console.log(props.sender_id)
            sender = await GetUser(props.sender_id);
            // console.log(sender)
            setUser(sender)
        }

        fetchdata()
        }, []);

    // console.log(user)

    return (
        <div className="messages">
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla" />
                <p>{`${user.first_name} ${user.last_name}`}</p>
                {/* <p>date time: {props.chat.time}</p> */}
            </div>
            <div className="messageContent">
                <p>{props.chat.msg}</p>
            </div>
        </div>
    );
};
