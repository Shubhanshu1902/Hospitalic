import { login } from "./CookieJWT";
import {GetUserId} from "./User";
export async function LoginCall(email, pass) {
    const url = "http://localhost:8081/api/auth/login";
    // console.log("hi here");
    // console.log(email,pass);
    var ret,jwt;
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            username: email,
            password: pass,
        }),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((data) => {
            // data = data.json();
            // console.log("Login data returned :", data);
            ret = data.ok;
            return data.json();
        })
        .then((data) => {
            // console.log(data);
            // console.log(Object.values(data));
            jwt = data["accessToken"];
            let id=0;
            const dt = Promise.resolve(GetUserId(email,jwt));
            dt.then(
                value => {
                    id = value['id'];
                    login(jwt,value['id']);
                }
            )
        })
        .catch((err) => {
            ret = false;
            // console.log(err);
            // console.log(err.message);
        });
    // console.log("RET: ", ret, "JWT: ", jwt);
    return [ret, jwt];
}