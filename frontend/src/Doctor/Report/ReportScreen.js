import React from "react";
import { Navbar } from "../Dashboard/Navbar";
import '../Doctor.scss'
import { TopBar } from "../Dashboard/TopBar";

export const DocReportScreen = () => {
    return (
        <div className="apphome">
            <Navbar />
            <div className="appcontent">
                <TopBar />
            </div>
        </div>
    );
};
