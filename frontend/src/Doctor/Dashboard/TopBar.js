import React from "react";
import main_logo from "../../icons/main_icon.png";

export const TopBar = () => {
    var userName = "Vatsal Dhama"
    var type = "Doctor"

    return (
        <div className="Topbar">
            {/* <img src={main_logo} alt="main_logo" className="image"/> */}

            {/* TopBar */}
            <input type="search" placeholder="Search" className="search" />

            <div className="name_and_title">
                <div>{userName}</div>
                <div style={{fontWeight: 600}}>{type}</div>
            </div>
        </div>
    );
};
