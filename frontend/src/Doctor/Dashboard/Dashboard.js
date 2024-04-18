import React from "react";
import { Navbar } from "./Navbar";
import "../Doctor.scss";
import { TopBar } from "./TopBar";

export const DocDashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <TopBar />
            </div>
        </div>
    );
};
