import {retrieveJWT} from "./CookieJWT";

export async function GetUserId(
    username,token
){
    const url = "http://localhost:8081/user/get_user_by_username/"+username
    let ret;

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

export async function GetUser(
    id
){
    const url = "http://localhost:8081/user/get_by_id/"+id;
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