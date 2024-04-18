import React from "react";
import { Navbar } from "./Navbar";
import "../Lab.scss";
import { TopBar } from "./TopBar";

export const LabDashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <TopBar />
            </div>
        </div>
    );
};
