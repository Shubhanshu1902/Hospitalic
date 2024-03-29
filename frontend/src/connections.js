async function LoginCall(email, pass) {
    const url = "http://localhost:8081/api/auth/login";
    let ret, jwt;
    console.log("hi here");
    console.log(email,pass);

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
            console.log(data);
            jwt = data["token"];
        })
        .catch((err) => {
            ret = false;
            console.log(err);
            console.log(err.message);
        });
    console.log("RET: ", ret, "JWT: ", jwt);
    return [ret, jwt];
}

export {
    LoginCall
  };
  