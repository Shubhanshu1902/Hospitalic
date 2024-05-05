import React from "react";
import { Navbar } from "../Dashboard/Navbar";
import '../Doctor.scss'
import { TopBar } from "../Dashboard/TopBar";
import { Folder } from "akar-icons";

export const DocReportScreen = () => {
    return (
        <div className="apphome">
            <Navbar />
            <div className="appcontent">
                <TopBar />
                <Folder />
            </div>
        </div>
    );
};
