import Cookies  from 'universal-cookie'
import {jwtDecode} from "jwt-decode"

// STORE JWT TOKEN
const cookie = new Cookies();

export const login = (jwtToken,userId) => {
    localStorage.setItem('jwt-token', token);
} 

// retrieve JWT token
export const retrieveJWT = () => {
    return localStorage.getItem('jwt-token');
}

export const retrieveUserId = () => {
    const decode = jwtDecode(retrieveJWT());
    return decode.userId;
}