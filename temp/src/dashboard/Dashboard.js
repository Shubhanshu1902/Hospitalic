import React from "react";
import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";
import '../css/Main.scss'
import { useParams } from "react-router-dom";
import { verify } from "../connections/User";
import { Page404 } from "../Page404/Page404";

export const Dashboard = (props) => {
    const type = useParams().type;


    return verify(type) ? <div className="dashboard">
        <Navbar />
        <div className="AppContent">
            <Topbar />
            
        </div>
    </div> : <Page404 />;
};
