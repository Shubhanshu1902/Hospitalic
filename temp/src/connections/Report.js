import {retrieveJWT} from "./CookieJWT";

export async function saveReport(
    name,
    pic_path,
    comments,
    doc_id,
    pat_id,
    lab_id
){
    const url = "http://localhost:8081/report/save";
    // http://localhost:8081/report/save
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "POST",
                body: JSON.stringify({
                    name:name,
                    photo_path:pic_path,
                    comments:comments,
                    user1:{
                        id:doc_id
                    },
                    user2:{
                        id:pat_id
                    },
                    lab:{
                        id:lab_id
                    }
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                // console.log(response);
                return (response.json());
            })
            .then(data => {
                // console.log(data);
                ret = data;
            })
        return ret;
    }
    catch(error){console.error(error);}
}
export async function GetAllDoctorPatientReport(
    doc_id,pat_id
) {
    const url = "http://localhost:8081/report/get_report_by_doctor_and_patient_id/" + doc_id + "/" + pat_id;
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
    } catch (error) {
        console.error(error);
    }
}
export async function GetAllLabReport(
    lab_id
) {
    const url = "http://localhost:8081/report/get_report_by_lab_id/" + lab_id;
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
    } catch (error) {
        console.error(error);
    }
}
export async function GetDoctorByPatientId(
    pat_id
) {
    const url = "http://localhost:8081/report/get_doctor_by_patient_id/" + pat_id;
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
    } catch (error) {
        console.error(error);
    }
}
export async function GetPatientByDoctorId(
    doc_id
) {
    const url = "http://localhost:8081/report/get_patient_by_doctor_id/" + doc_id;
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
    } catch (error) {
        console.error(error);
    }
}
export async function GetReportById(
    id
) {
    const url = "http://localhost:8081/report/get_by_id/" + id;
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
    } catch (error) {
        console.error(error);
    }
}

export async function GetReportByLabNPatId(
    lab_id,
    pat_id
) {
    const url = "http://localhost:8081/report/get_report_by_lab_and_patient_id/" + lab_id + "/" + pat_id;
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
    } catch (error) {
        console.error(error);
    }
}

export async function GetPatientByLabId(
    lab_id
) {
    const url = "http://localhost:8081/report/get_patient_by_lab_id/" + lab_id;
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
    } catch (error) {
        console.error(error);
    }
}

export async function RepAddComment(
    id,
    new_comment
){
    const url = "http://localhost:8081/report/add_comment/" + id;
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