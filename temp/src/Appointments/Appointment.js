import React from "react";
import { Topbar } from "../dashboard/Topbar";
import { Navbar } from "../dashboard/Navbar";
import "../css/Main.scss";
import { AppList } from "./AppList";
import { BookApp } from "./BookApp";
import { getRole, verify } from "../connections/User";
import { useNavigate, useParams } from "react-router-dom";
import { Page404 } from "../Page404/Page404";

export const Appointment = () => {
    const type = useParams().type;
    const navigate = useNavigate();
    if (!verify(type)) navigate("404");

    return verify(type) ? (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />
                {type=="patient" ? <BookApp /> : ""}
                <AppList />
            </div>
        </div>
    ) : (
        <Page404 />
    );
};
