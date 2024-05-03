import { jwtDecode } from "jwt-decode";
import {retrieveJWT} from "./CookieJWT";
import { useNavigate } from "react-router-dom";

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
                // console.log(response)
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

export const getRole = () => {
    const token = retrieveJWT();
    if(token === undefined) return "";
    let decode = jwtDecode(token)
    return decode.roles[0].toLowerCase();
} 

export const verify = (type) => {
    // console.log(getRole(),type)
    if(type === getRole()) return true
    else return false
}