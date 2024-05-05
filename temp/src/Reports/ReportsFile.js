import React, { useEffect, useState } from "react";
import "../css/Main.scss";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../connections/User";
import { Navbar } from "../dashboard/Navbar";
import { Topbar } from "../dashboard/Topbar";
import { GetAllDoctorPatientReport, GetReportByLabNPatId } from "../connections/Report";
import { retrieveUserId } from "../connections/CookieJWT";
import { FileIcon } from "./FileIcon";
import { Page404 } from "../Page404/Page404";
import { getReportByPatAndRad } from "../connections/Request";

export const ReportsFile = () => {
    const type = useParams().type;
    const userId = useParams().userid;
    const navigate = useNavigate();
    if (!verify) navigate("404");
    const ids = retrieveUserId();
    const [fileName, setFileName] = useState([]);
    const [data, getData] = useState([]);
    const [vals, setVals] = useState([]);

    async function fetchData() {
        let items = [];
        if (type === "patient") {
            items = await GetAllDoctorPatientReport(userId, ids);
        } else if(type === "doctor") {
            items = await GetAllDoctorPatientReport(ids,userId);
        } else if(type === "lab") {
            items = await GetReportByLabNPatId(ids,userId);
        } else if(type === "radiologist") {
            items = await getReportByPatAndRad(ids,userId);
        }

        setVals(items);
    }

    useEffect(() => {
        fetchData();
    }, []);

    let key = 0;

    return verify(type) ? (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />
                <div className="icons">
                    {vals.map(obj => {
                        // console.log(obj);
                        return <FileIcon key={key++} obj={obj} type={type}/>;
                    })}
                </div>
            </div>
        </div>
    ) : (
        <Page404 />
    );
};
