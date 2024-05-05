import {retrieveJWT} from "./CookieJWT";

export async function AddComment(
    id,
    new_comment
){
    const url = "http://localhost:8081/requests/add_comment/" + id;
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "POST",
                body:new_comment,
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                return (response.json());
            })
            .then(data => {
                ret = data;
            })
        return ret;
    }
    catch(error){
        console.error(error);
    }
}
export async function GetReportIdByRadiologistId(
    id
){
    const url = "http://localhost:8081/requests/get_report_id_by_radiologist_id/" + id;
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                return (response.json());
            })
            .then(data => {
                ret = data;
            })
        return ret;
    }
    catch(error){
        console.error(error);
    }
}

export async function getReportByPatAndRad(rad_id,pat_id) {
    const url = `http://localhost:8081/requests/get_report_by_radiologist_and_patient/${rad_id}/${pat_id}`;
    let ret = false;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                return (response.json());
            })
            .then(data => {
                ret = data;
            })
        return ret;
    }
    catch(error){
        console.error(error);
    }
}

export async function getPatientIdByRadiologistId(rad_id,pat_id) {
    const url = `http://localhost:8081/requests/get_patient_id_by_radiologist_id/${rad_id}`;
    let ret = false;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                return (response.json());
            })
            .then(data => {
                ret = data;
            })
        return ret;
    }
    catch(error){
        console.error(error);
    }
}
