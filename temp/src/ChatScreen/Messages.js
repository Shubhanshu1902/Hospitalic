import React, { useEffect, useState } from "react";
import { GetUser } from "../connections/User";
import hasbulla from "../icons/Untitled.jpeg"
import { retrieveUserId } from "../connections/CookieJWT";


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
        <div className={user.id === retrieveUserId() ? "messages" : "messages other"}>
            <div className="messageInfo">
                <img src={hasbulla} alt="hasbulla" />
                {user.id !== retrieveUserId() ? <p>{`${user.first_name} ${user.last_name}`}</p> : ""}
                {/* <p>date time: {props.chat.time}</p> */}
            </div>
            <div className="messageContent">
                <p className={user.id !== retrieveUserId() ? "p" : "p other"}>{props.chat.msg}</p>
            </div>
        </div>
    );
};
