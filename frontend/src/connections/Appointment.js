import {retrieveJWT} from "./CookieJWT";

export async function BookAppointment(
    dt,
    user1_id,
    user2_id
){
    const url = "http://localhost:8081/appointment/save";
    console.log(user1_id + " "+ user2_id);
    let token = retrieveJWT();
    try{
        await fetch(url,
            {
                method: "POST",
                body:JSON.stringify(
                    {
                        date:dt.toString(),
                        user1:
                            {
                                id: user1_id
                            },
                        user2:
                            {
                                id:user2_id
                            }
                    }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
    }
    catch(error){
        console.error(error);
    }
}
export async function AddRadiologist(
    report_id,
    radiologist_id
){
    const url = "http://localhost:8081/requests/save"
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        report:
                            {
                                id: report_id.toString()
                            },
                        user:
                            {
                                id: radiologist_id.toString()
                            }


                    }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
    }
    catch(error){
        console.error(error);
    }
}
export async function GetAllDoctor(){
    const url = "http://localhost:8081/user/get_all_doctor"
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

export async function GetAllRadiologist(){
    const url = "http://localhost:8081/user/get_all_radiologist"
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "GET",
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
    catch(error){
        console.error(error);
    }
}

export async function GetAppByPatId(
    id
){
    const url = "http://localhost:8081/appointment/get_appointment_by_patient_id/" + id;
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "GET",
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
    catch(error){
        console.error(error);
    }
}
export async function GetAppByLabId(
    id
){
    const url = "http://localhost:8081/appointment/get_appointment_by_lab_id/" + id;
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "GET",
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
    catch(error){
        console.error(error);
    }

}
export async function AssignLab(
    appointment_id,lab_id
){
    const url = "http://localhost:8081/appointment/assign_lab/" + lab_id + "/" + appointment_id
    let ret;
    let token = retrieveJWT();
    try {
        await fetch(url,
            {
                method: "POST",
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