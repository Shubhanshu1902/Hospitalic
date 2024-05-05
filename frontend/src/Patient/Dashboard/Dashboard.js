import React from "react";
import { Navbar } from "./Navbar";
import { TopBar } from "./Topbar";
import '../Patient.scss'

export const Dashboard = () => {
    return (
        <div className="apphome">
            <Navbar />
            <div className="appcontent">
                <TopBar />
            </div>
        </div>
    );
};
