export async function GetUserId(
    username
){
    const url = "http://localhost:8081/user/get_user_by_username/"+username
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