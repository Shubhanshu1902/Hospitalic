import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    GetDoctorByPatientId,
    GetPatientByDoctorId,
    GetPatientByLabId,
} from "../connections/Report";
import { retrieveUserId } from "../connections/CookieJWT";
import { GetUser } from "../connections/User";
import { FolderIcon } from "./FolderIcon";

export const ReportAll = () => {
    const type = useParams().type;
    const [folderNames, setFolderNames] = useState([]);
    const ids = retrieveUserId();
    const [vals, setVals] = useState([]);
    const [data, setData] = useState([]);

    const ids_to_names = () => {
        // console.log("vals3", vals);
        for (let i = 0; i < vals.length; i++) {
            // console.log("val[i]", vals[i]);
            let user = [];
            async function fetchData() {
                user = await GetUser(vals[i]);
                setData(user);
            }
            fetchData();
        }
    };

    async function fetchData() {
        let items = [];

        if (type === "patient") {
            items = await GetDoctorByPatientId(ids);
        } else if (type === "doctor") {
            items = await GetPatientByDoctorId(ids);
        } else if (type === "lab") {
            items = await GetPatientByLabId(ids);
        } else if (type === "radiologist") {
        }
        setVals(items);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        ids_to_names();
    }, [vals]);

    useEffect(() => {
        if (data.first_name !== undefined) {
            setFolderNames(folderNames => [
                ...folderNames,
                { id: data.id, name: `${data.first_name} ${data.last_name}` },
            ]);
            
        }
    }, [data.first_name]);

    // console.log("folderNames", folderNames);
    let key = 0;
    return (
        <div className="icons">
            {folderNames.map(obj => {
                return <FolderIcon key={key++} name={obj.name} id={obj.id} />;
            })}
        </div>
    );
};