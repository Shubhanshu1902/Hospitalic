import React from "react";
import { Dashboard } from "akar-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faCog,
    faComment,
    faPhone,
    faReceipt,
    faTasks,
} from "@fortawesome/fontawesome-free-solid";
import { useNavigate } from "react-router-dom";
import main_logo from "../../icons/main_icon.png";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="main">
                {/* UPAR WALA BOX */}
                <div className="Box">
                    <div className="icon-box">
                        <img
                            src={main_logo}
                            alt="main_logo"
                            className="image"
                        />

                        <div>
                            <hr
                                style={{
                                    color: "#E0E0E0",
                                    backgroundColor: "#E0E0E0",
                                }}
                            />
                        </div>
                    </div>
                    <div className="text">Menu</div>
                    <div
                        className="text"
                        onClick={() => {
                            navigate("/patient/dashboard");
                        }}
                    >
                        <Dashboard strokeWidth={2} size={20} />
                        Dashboard
                    </div>
                    <div
                        className="text"
                        onClick={() => {
                            navigate("/patient/appointments");
                        }}
                    >
                        <FontAwesomeIcon icon={faTasks} />
                        Appointment
                    </div>
                    <div
                        className="text"
                        onClick={() => {
                            navigate("/patient/history");
                        }}
                    >
                        <FontAwesomeIcon icon={faClock} />
                        History
                    </div>

                    <div
                        className="text"
                        onClick={() => {
                            navigate("/patient/reports");
                        }}
                    >
                        <FontAwesomeIcon icon={faReceipt} />
                        Reports
                    </div>
                </div>

                {/* NEECHE WALA BOX */}
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
