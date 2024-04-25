import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "../Dashboard/Navbar";
import { TopBar } from "../Dashboard/TopBar";
import AppList from "./AppList";
import "../Doctor.scss"

export const DocAppointments = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <TopBar />
                <AppList />
            </div>
        </div>
    );
};
