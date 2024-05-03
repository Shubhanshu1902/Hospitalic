import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieveUserId } from "../connections/CookieJWT";
import { GetUser } from "../connections/User";
// import main_logo from "../../icons/main_icon.png";

const RenderDate = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var today = new Date();
    var date = today.getDate();
    var month = months[today.getMonth()];
    var year = today.getFullYear();

    return (
        <div className="Date">
            {date}, {month} {year}
        </div>
    );
};

export const Topbar = () => {
    // TODO set username
    const userId = retrieveUserId();
    const [temp, setTemp] = useState([]);
    const [change, setChange] = useState(false);
    const [username,setUsername] = useState("")


    async function getUserName() {
        // console.log("test1",userId)
        const user = await GetUser(userId);
        setUsername(`${user.first_name} ${user.last_name}`)
    }
    // console.log("test2",userId)
    getUserName()
    
    const type = useParams().type;

    return (
        <div className="Topbar">
            <input type="search" placeholder="Search" className="search" />
            <div className="name_and_title">
                <div>{username}</div>
                <div style={{ fontWeight: 600 }}>{type}</div>
            </div>
            <RenderDate />
            <FontAwesomeIcon
                color="#828282"
                size="lg"
                icon="fa-solid fa-envelope"
            />
            <FontAwesomeIcon
                color="#828282"
                size="lg"
                icon="fa-solid fa-bell"
            />
            <FontAwesomeIcon
                color="#828282"
                size="lg"
                icon="fa-solid fa-right-from-bracket"
            />
        </div>
    );
};
