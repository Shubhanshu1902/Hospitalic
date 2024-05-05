import React from "react";
import { Navbar } from "../Dashboard/Navbar";
import { TopBar } from "../Dashboard/TopBar";
import { PatientIcon } from "./PatientIcon";

export const ReportsLab = () => {
    const patients = [
        {
            id : 1,
            name : "pat1"
        },
        {
            id : 2,
            name : "pat2"
        },
        {
            id : 3,
            name : "pat3"
        },
        {
            id : 4,
            name : "pat4"
        },
    ]
    let key = 0;
    return (
        <div className="icons">
        {patients.map((obj) => {
            // {console.log(name)}
            return <PatientIcon key={key++} name={obj.name} id={obj.id}/>
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
