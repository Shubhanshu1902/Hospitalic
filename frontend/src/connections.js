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

async function RegisterCall(
uname,
pass,
fname,
lname,
genderr,
dobb,
addresss,
roleid
){
    const url = "http://localhost:8081/api/auth/register";
    let ret;
    await fetch(url,
    {
        method: "POST",
        body: JSON.stringify(
        {
        username: uname,
        password: pass,
        first_name: fname,
        last_name: lname,
        gender: genderr,
//        dob: dobb
        address : addresss,
        role :
        {
            id : "1"
        }
        }),
        headers: {
        "Content-type": "application/json",
        },
    })
    .then((data) => {
    ret = data.ok;
    return data.json();
    })
    .then((data) =>{
    console.log(data);
    })
    .catch((err) => {
    ret = false;
    console.log(err.message);
    });
    console.log("RET: ", ret);
    return ret;
}

async function fetchChatEntities(reportId, token) {
    const url = "http://localhost:8081/api/find_filter/${reportId}";
    let chatEntities;

    await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer ${token}"
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        chatEntities = data;
    })
    .catch(error => {
        console.error('Error fetching chat entities:', error);
        chatEntities = [];
    });

    return chatEntities;
}

export {
    LoginCall,
    RegisterCall
  };
  