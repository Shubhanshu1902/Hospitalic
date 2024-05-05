import React from "react";
import "../css/Main.scss";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../connections/User";
import { Navbar } from "../dashboard/Navbar";
import { Topbar } from "../dashboard/Topbar";
import { ReportAll } from "./ReportAll";
import { Page404 } from "../Page404/Page404";

export const Reports = () => {
    const type = useParams().type;
    const navigate = useNavigate();
    if (!verify) navigate("404");

    return verify(type) ? (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />
                <ReportAll />
            </div>
        </div>
    ) : (
        <Page404 />
    );
};
