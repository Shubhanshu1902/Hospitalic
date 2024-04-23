import React from "react";
import { Navbar } from "../Dashboard/Navbar";
import '../Radiologist.scss'
import { TopBar } from "../Dashboard/TopBar";

export const RadReportScreen = () => {
    return (
        <div className="apphome">
            <Navbar />
            <div className="appcontent">
                <TopBar />
            </div>
        </div>
    );
};
