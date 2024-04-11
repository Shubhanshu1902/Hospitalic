import Cookies  from 'universal-cookie'
import {jwtDecode} from "jwt-decode"


// STORE JWT TOKEN
const cookie = new Cookies();

export const login = (jwtToken) => {
    const decode = jwtDecode(jwtToken);
    cookie.set("JWTtoken",jwtToken,{
        expires: new Date(decode.exp * 1000)
    });
} 

// retrieve JWT token
export const retrieveJWT = () => {
    console.log("testing",cookie.get("JWTtoken"))
    return cookie.get("JWTtoken")
}