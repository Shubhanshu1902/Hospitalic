import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    GetDoctorByPatientId,
    GetPatientByDoctorId,
} from "../connections/Report";
import { retrieveUserId } from "../connections/CookieJWT";
import { GetUser } from "../connections/User";

export const ReportAll = () => {
    const type = useParams().type;
    const [folderNames, setFolderNames] = useState([]);
    const ids = retrieveUserId();
    const [vals, setVals] = useState([]);
    const [temp, setTemp] = useState("");
    const [data, setData] = useState([]);

    const ids_to_names = () => {
        for (let i = 0; i < vals.length; i++) {
            console.log(vals[i]);
            var user = Promise.resolve(GetUser(vals[i]));
            user.then(value => {
                setTemp(value);
            });

            setFolderNames(folderNames => [...folderNames, temp.first_name]);
            console.log(temp);
        }

        // console.log(folderNames);
    };

    async function fetchData() {
        let items = [];

        if (type === "patient") {
            items = await GetDoctorByPatientId(ids);
            console.log("items",items)
        } else if (type === "doctor") {
            items = await GetPatientByDoctorId(ids);
        } else if (type === "lab") {
        } else if (type === "radiologist") {
        }

        setVals(items)
        console.log("vals",vals)
        ids_to_names(vals);

    }

    useEffect(() => {
        fetchData()
    }, []);

    // console.log(vals);

    return <div className="icons">temp</div>;
};
