import React from "react";
import { Dashboard, Trophy } from "akar-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate, useParams } from "react-router-dom";
import main_logo from "../icons/main_icon.png";

export const Navbar = props => {
    let type = useParams().type;
    const docPat = [
        {
            name: "Appointments",
            icon: "fa-solid fa-tasks",
            path: `../${type}/appointments`,
            key: 1,
        },

        {
            name: "Done Appointments",
            icon: "fas fa-calendar-alt",
            path: `../${type}/doneappointments`,
            key: 2,
        },
    ];

    const lab = [
        {
            name: "Tasks",
            icon: "fa-solid fa-tasks",
            path: `../${type}/appointments`,
            key: 1,
        },
    ];

    var ls = [];
    if (type === "lab") {
        // console.log("IN LAB")
        ls = lab;
    } else if (type === "doctor" || type === "patient") {
        ls = docPat;
    }

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
                            navigate(`../${type}/dashboard`);
                        }}
                    >
                        <Dashboard strokeWidth={2} size={20} />
                        Dashboard
                    </div>

                    {ls.map(temp => {
                        return (
                            <div
                                className="text"
                                onClick={() => {
                                    navigate(temp.path);
                                }}
                                key={temp.key}
                            >
                                <FontAwesomeIcon icon={temp.icon} />
                                {temp.name}
                            </div>
                        );
                    })}

                    <div
                        className="text"
                        onClick={() => {
                            navigate(`../${type}/reports`);
                        }}
                    >
                        <FontAwesomeIcon icon="fas fa-receipt" />
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
                    <div
                        className="text"
                        onClick={() => {
                            navigate(`../${type}/settings`);
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-gear" />
                        Settings
                    </div>
                    <div className="text">
                        <FontAwesomeIcon icon="fa-solid fa-phone" />
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
