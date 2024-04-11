export async function BookAppointment(
    dt,
    user1_id,
    user2_id
){
    const url = "http://localhost:8081/appointment/save";
    await fetch(url,
    {
        method: "POST",
        body:JSON.stringify(
        {
            date:dt,
            user1:
            {
                id: user1_id.toString()
            },
            user2:
            {
                id:user2_id.toString()
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
