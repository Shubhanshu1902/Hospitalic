import React, { useEffect, useState } from "react";
import { retrieveUserId } from "../connections/CookieJWT";
import { useParams } from "react-router-dom";
import {
    GetAppByDoctorId,
    GetAppByLabId,
    GetAppByPatId,
} from "../connections/Appointment";
import { ListComp } from "./ListComp";

export const AppList = () => {
    const [list, setList] = useState([]);
    var userId = retrieveUserId();
    var type = useParams().type;

    const getData = () => {
        let data = [];
        if (type === "patient") {
            data = Promise.resolve(GetAppByPatId(userId));
            data.then(value => {
                setList(value);
            });
        } else if (type === "doctor") {
            data = Promise.resolve(GetAppByDoctorId(userId));
            data.then(value => {
                setList(value);
            });
        } else if (type === "lab") {
            data = Promise.resolve(GetAppByLabId(userId));
            data.then(value => {
                setList(value);
            });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    var i = 0;
    return (
        <div className="applist">
            {list &&
                list.map(elem =>
                    !((type === "doctor" || type === "patient") && elem.doctor_done || type==="lab" && elem.lab_done)? (
                        <ListComp
                            key={i++}
                            id={elem.id}
                            pname={elem.user1.first_name}
                            dname={elem.user2.first_name}
                            pid={elem.user1.id}
                            did={elem.user2.id}
                            time={elem.date}
                            lab_pres = {elem.lab_prescription}
                        />
                    ) : (
                        ""
                    )
                )}
        </div>
    );
};
