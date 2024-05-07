import React from "react";
import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";
import '../css/Main.scss'
import { useParams } from "react-router-dom";
import { verify } from "../connections/User";
import { Page404 } from "../Page404/Page404";
import { AllRequests } from "./AllRequests";
import { Appointment } from "../Appointments/Appointment";
import { BookApp } from "../Appointments/BookApp";
import { AppList } from "../Appointments/AppList";
import { AllAcceptedRequests } from "./AllAcceptedRequests";

export const Dashboard = (props) => {
    const type = useParams().type;


    return verify(type) ? 
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />

                {type === "patient" ? <AllRequests /> : ""}
                {type === "patient" ? <AllAcceptedRequests /> : ""}
                {/* {type !== "radiologist" ? <AppList /> : ""} */}
            </div>
        </div> 
    : <Page404 />;
};
