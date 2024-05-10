import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bookpop } from '../Appointments/Bookpop';

const HisComp = (props) => {

    const [x, setButtonPopup] = useState(false);
    var type = useParams().type;
    // console.log(moment(props.time).format("MMM Do YY"))

    if (type === "patient")
        return (
            <div className="t1">
                <div className="t2">
                    <FontAwesomeIcon
                        icon="fas fa-arrow-alt-circle-right"
                        style={{ padding: "5px" }}
                    />
                    Appointment at Dr. {props.doctorname} on{" "}
                    {moment(props.time).format("MMM Do YY")}
                </div>
                <button
                    className="prescbutton"
                    style={{ fontSize: "large", height: "40px" }}
                    onClick={() => setButtonPopup(true)}
                >
                    {" "}
                    View Prescription{" "}
                </button>
                <Bookpop trigger={x} setTrigger={setButtonPopup}>
                    <p style={{ fontSize: "large", padding: "3%" }}>
                        Patient prescription = {props.text}
                    </p>

                    <p style={{ fontSize: "large", padding: "3%" }}>
                        Lab prescription = {props.text2}
                    </p>
                </Bookpop>
            </div>
        );
    else if (type === "doctor")
        return (
            <div className="t1">
                <div className="t2">
                    <FontAwesomeIcon
                        icon="fas fa-arrow-alt-circle-right"
                        style={{ padding: "5px" }}
                    />
                    Appointment for {props.patientname} on{" "} {moment(props.time).format("MMM Do YY")}
                </div>
                <button className="button" onClick={() => setButtonPopup(true)}>
                    {" "}
                    View Prescription{" "}
                </button>
                <Bookpop trigger={x} setTrigger={setButtonPopup}>
                    <p style={{ fontSize: "large", padding: "3%" }}>
                        Patient prescription = {props.text}
                    </p>

                    <p style={{ fontSize: "large", padding: "3%" }}>
                        Lab prescription = {props.text2}
                    </p>

                </Bookpop>
            </div>
        );
        else return " "
    }


export default HisComp