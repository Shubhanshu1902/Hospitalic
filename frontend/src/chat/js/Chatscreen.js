import React, {useState} from "react";
import "../css/Chatscreen.scss";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export const Chatscreen = () => {
    return(
        <div className="main">
            <Sidebar />
            <Chat />
        </div>
        
    );
};