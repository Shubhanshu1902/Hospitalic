import React from "react";
import { Route } from "react-router-dom";
import TaskList from "./TaskList";
import { Navbar } from "../Dashboard/Navbar";
import { TopBar } from "../Dashboard/TopBar";

export const Tasks = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <TopBar />
                <TaskList />
            </div>
        </div>
    );
};
