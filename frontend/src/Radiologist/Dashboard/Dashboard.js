import React from "react";
import { Navbar } from "./Navbar";
import "../Radiologist.scss";
import { TopBar } from "./TopBar";

export const RadioDashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <TopBar />
            </div>
        </div>
    );
};
