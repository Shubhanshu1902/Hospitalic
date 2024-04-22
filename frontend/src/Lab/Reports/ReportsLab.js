import React from "react";
import { Navbar } from "../Dashboard/Navbar";
import { TopBar } from "../Dashboard/TopBar";
import { PatientIcon } from "./PatientIcon";

export const ReportsLab = () => {
    const patients = ["Pat1", "Pat2", "Pat3", "Pat4"]
    let key = 0;
    return (
        <div className="icons">
        {patients.map((name) => {
            // {console.log(name)}
            return <PatientIcon key={key++} name={name}  />
        })}
        </div>
        // <div className="dashboard">
        //     <Navbar />
        //     <div className="AppContent">
        //         <TopBar />
                
        //     </div>
        // </div>
    );
};
