import React from "react";
import { retrieveUserId } from "../connections/CookieJWT";
import { DeleteById, verify } from "../connections/User";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../dashboard/Navbar";
import { Topbar } from "../dashboard/Topbar";
import { Page404 } from "../Page404/Page404";

export const DeleteUser = () => {
    const id = retrieveUserId();
    const type = useParams().type;
    const navigate = useNavigate();

    return verify(type) ? (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />

                {type === "patient" ? (
                    <button
                        style={{
                            background: "#f72f2f",
                            width: "200px",
                            height: "40px",
                            marginLeft: "40px",
                            marginTop: "40px",
                        }}
                        onClick={() => {
                            DeleteById(id);
                            navigate("../");
                            localStorage.clear();
                        }}
                    >
                        Delete Your Account
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    ) : (
        <Page404 />
    );
};
