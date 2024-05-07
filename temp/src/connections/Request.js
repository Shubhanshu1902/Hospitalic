import {retrieveJWT} from "./CookieJWT";

export async function ReqAddComment(
    rep_id,
    rad_id,
    new_comment
){
    const url = `http://localhost:8081/requests/add_comment/${rep_id}/${rad_id}`;
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

export async function getAcceptedequestByReportId(report_id) {
    const url = `http://localhost:8081/requests/get_accepted_request_by_report_id/${report_id}`;
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

export async function getNotAcceptedRequestByPatientId(patient_id) {
    const url = `http://localhost:8081/requests/get_not_accepted_request_by_patient_id/${patient_id}`;
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

export async function getAcceptedRequestByPatientId(patient_id) {
    const url = `http://localhost:8081/requests/get_accepted_request_by_patient_id/${patient_id}`;
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

export async function approveRequestByRequestId(request_id) {
    const url = `http://localhost:8081/requests/approve_request_by_id/${request_id}`;
    let ret = false;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "POST",
                body:"",
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

export async function deleteRequestByRequestId(request_id) {
    const url = `http://localhost:8081/requests/delete_by_id/${request_id}`;
    let ret = false;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "DELETE",
                body:"",
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



