import React from "react";
import main_logo from "../../icons/main_icon.png";

export const TopBar = () => {
    var userName = "Vatsal Dhama"
    var type = "Radiologist"

    return (
        <div className="Topbar">
            <input type="search" placeholder="Search" className="search" />

            <div className="name_and_title">
                <div>{userName}</div>
                <div style={{fontWeight: 600}}>{type}</div>
            </div>
        </div>
    );
};
