import Cookies  from 'universal-cookie'
import {jwtDecode} from "jwt-decode"


// STORE JWT TOKEN
const cookie = new Cookies();

export const login = (jwtToken,userId) => {
    const decode = jwtDecode(jwtToken);
    cookie.set("JWTtoken",jwtToken,{
        expires: new Date(decode.exp * 1000)
    });
    cookie.set("UserId",userId,{
        expires: new Date(decode.exp * 1000)
    });
} 

// retrieve JWT token
export const retrieveJWT = () => {
    console.log("testing",cookie.get("JWTtoken"))
    return cookie.get("JWTtoken")
}
export const retrieveUserId = () => {
    console.log("testing",cookie.get("UserId"))
    return cookie.get("UserId")
}