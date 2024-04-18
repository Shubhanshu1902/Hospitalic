import {retrieveJWT} from "./CookieJWT";

export async function saveReport(
    rad_id,
    pic_path,
    comments,
    chat_id,
    doc_id,
    pat_id,
    lab_id
){
    const url = "http://localhost:8081/report/save";
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "POST",
                body: JSON.stringify({
                    radiologist_id:rad_id,
                    photo_path:pic_path,
                    comments:comments,
                    chat:{
                        id:chat_id
                    },
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
                    "Content-type": "application.json",
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