export async function BookAppointment(
    dt,
    user1_id,
    user2_id
){
    const url = "http://localhost:8081/appointment/save";
    console.log(user1_id + " "+ user2_id);
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
        },
    })
}
export async function AddRadiologist(
    report_id,
    radiologist_id
){
    const url = "http://localhost:8081/requests/save"
    await fetch(url,
        {
            method: "POST",
            body:JSON.stringify(
                {
                    report:
                        {
                            id:report_id.toString()
                        },
                        user:
                            {
                                id:radiologist_id.toString()
                            }


                }),
            headers: {
                "Content-type": "application/json",
            },
        })
}
export async function GetAllDoctor(){
    const url = "http://localhost:8081/user/get_all_doctor"
    let ret;
    await fetch(url,
    {
        method: "GET",
        headers: {"Content-type": "application/json"}
    })
    .then(response => {
        return(response.json());
    })
    .then(data => {
        ret = data;

    })
    return ret;
}

export async function GetAllRadiologist(){
    const url = "http://localhost:8081/user/get_all_radiologist"
    let ret;
    await fetch(url, 
    {
        method: "GET",
        headers: {"Content-type": "application.json"}
    })
    .then(response =>{
        return(response.json());
    })
    .then(data => {
        ret = data;
    })
    return ret;
}
