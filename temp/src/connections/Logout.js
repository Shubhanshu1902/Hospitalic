import { retrieveJWT } from "./CookieJWT";

export async function LogoutCall()
{
    const url = "http://localhost:8081/api/auth/logout";
    let token = retrieveJWT();

    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        body: token,
    });

    localStorage.clear();
    if (!response.ok) {
        throw new Error(`logout failed: ${response.statusText}`);
    }
}