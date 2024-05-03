import Cookies  from 'universal-cookie'
import {jwtDecode} from "jwt-decode"

// STORE JWT TOKEN
const cookie = new Cookies();

export const login = (jwtToken) => {
    // console.log(jwtToken)
    localStorage.setItem('jwt-token', jwtToken);
} 

// retrieve JWT token
export const retrieveJWT = () => {
    return localStorage.getItem('jwt-token');
}

export const retrieveUserId = () => {
    const decode = jwtDecode(retrieveJWT());
    // console.log("decode", decode, retrieveJWT(), decode.userId);
    return decode.userId;
}