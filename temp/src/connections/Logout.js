import { retrieveJWT } from "./CookieJWT";

export async function LogoutCall()
{
    const url = "http://localhost:8081/api/auth/logout";
    let token = retrieveJWT();
    console.log("In logout call");

    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        body: token,
    });

    if (!response.ok) {
        throw new Error(`logout failed: ${response.statusText}`);
    }
}