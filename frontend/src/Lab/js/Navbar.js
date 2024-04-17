import React from "react";
import { Dashboard } from "akar-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCog,
    faComment,
    faPhone,
    faReceipt,
    faTasks,
} from "@fortawesome/fontawesome-free-solid";
import main_logo from "../../icons/main_icon.png";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={main_logo} alt="main_logo" />
            <div>
                <hr
                    style={{
                        color: "#E0E0E0",
                        backgroundColor: "#E0E0E0",
                    }}
                />
            </div>
            <div className="main">
                <div className="Box">
                    <div className="text">Menu</div>
                    <div className="text">
                        <Dashboard strokeWidth={2} size={20} />
                        Dashboard
                    </div>
                    <div className="text">
                        <FontAwesomeIcon icon={faTasks} />
                        Tasks
                    </div>

                    <div className="text">
                        <FontAwesomeIcon icon={faReceipt} />
                        Reports
                    </div>
                </div>

                <div className="Box">
                    <div>
                        <hr
                            style={{
                                color: "#E0E0E0",
                                backgroundColor: "#E0E0E0",
                            }}
                        />
                    </div>
                    <div className="text">
                        <FontAwesomeIcon icon={faCog} /> Settings
                    </div>
                    <div className="text">
                        <FontAwesomeIcon icon={faPhone} />
                        Support
                    </div>
                </div>
                <div>
                    <hr
                        style={{
                            color: "#E0E0E0",
                            backgroundColor: "#E0E0E0",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
