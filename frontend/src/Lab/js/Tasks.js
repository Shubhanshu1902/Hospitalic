import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";

export const Tasks = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <TopBar />
                <div className="tasks">
                    Tasks
                </div>
            </div>
        </div>
    );
};
