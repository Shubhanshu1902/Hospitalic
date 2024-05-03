import React, { useEffect } from "react";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { BookAppointment } from "../connections/Appointment";
import { GetAllDoctor } from "../connections/Appointment";
import moment from "moment";
import { retrieveUserId } from "../connections/CookieJWT";

export const Modal = (props) => {
    const [dateVar, setDateVar] = useState(new Date());
    const [user2, setUser2] = useState("");
    const [list, setList] = useState([]);
    var user1_id = retrieveUserId();
    const bookcall = () => {
        // console.log(moment(dateVar).format());
        // console.log(user2.id);
        BookAppointment(
            moment(dateVar).format("YYYY-MM-DD"),
            user1_id,
            user2.id
        );
        props.setTrigger(false);
    };

    const handleChange2 = user2 => {
        setUser2(user2);
        console.log(user2)
    };

    useEffect(() => {
        const data = Promise.resolve(GetAllDoctor());
        data.then(value => {
            setList(value);
        });
    }, []);

    // console.log(list);

    return props.trigger ? (
        <div className="hi">
            <div
                className="item1"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <h4>Choose your doctor</h4>
                <div className="dropdown" style={{ maxWidth: "300px" }}>
                    <Select
                        options={list}
                        value={user2}
                        getOptionLabel={opt => `${opt.first_name} ${opt.last_name}`}
                        getOptionValue={opt => opt.id}
                        onChange={handleChange2}
                    />
                </div>
            </div>
            <div
                className="item2"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <h4>Choose your date</h4>
                <DatePicker
                    selected={dateVar}
                    onChange={date => setDateVar(date)}
                />
            </div>
            <button
                className="invite"
                onClick={bookcall}
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%)",
                    height: "30%",
                    width: "10%",
                    fontSize: "large",
                }}
            >
                Book
            </button>
        </div>
    ) : (
        ""
    );
    return <div>Modal</div>;
};
