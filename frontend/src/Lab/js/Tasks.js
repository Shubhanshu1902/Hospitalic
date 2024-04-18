import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";
import TaskList from "./TaskList";

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
