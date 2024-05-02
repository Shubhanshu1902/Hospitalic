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