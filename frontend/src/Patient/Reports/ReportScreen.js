import React from "react";
import { TopBar } from "../Dashboard/Topbar";
import { Navbar } from "../Dashboard/Navbar";
import '../Patient.scss'

export const ReportScreen = () => {
    return (
        <div className="apphome">
            <Navbar />
            <div className="appcontent">
                <TopBar />
            </div>
        </div>
    );
};
