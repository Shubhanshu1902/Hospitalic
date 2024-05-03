import React from "react";
import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";
import '../css/Main.scss'
import { useParams } from "react-router-dom";

export const Dashboard = (props) => {
    
    return <div className="dashboard">
        <Navbar />
        <div className="AppContent">
            <Topbar />
            
        </div>
    </div>;
};
