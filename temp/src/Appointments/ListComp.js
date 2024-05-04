import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useState } from "react";
import { Bookpop } from "./Bookpop";
import { useParams } from "react-router-dom";
import { TaskPop } from "./TaskPop";
import { TaskModal } from "./TaskModal";
import { LabModal } from "./LabModal";
import { LabPop } from "./LabPop";

export const ListComp = props => {
    const [x, setButtonPopup] = useState(false);
    var type = useParams().type;
    if (type === "patient")
        return (
            <div className="t1">
                <div className="t2">
                    <FontAwesomeIcon
                        icon="fas fa-arrow-alt-circle-right"
                        style={{ padding: "5px" }}
                    />
                    Appointment at Dr. {props.dname} on{" "}
                    {moment(props.time).format("MMM Do YY")}
                </div>
                {/* <button
                    className="prescbutton"
                    style={{ fontSize: "large", height: "40px" }}
                    onClick={() => setButtonPopup(true)}
                >
                    {" "}
                    View Prescription{" "}
                </button> */}
                <Bookpop trigger={x} setTrigger={setButtonPopup}>
                    <p style={{ fontSize: "large", padding: "3%" }}>
                        {props.text}
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
                    />{" "}
                    Appointment for {props.pname}
                </div>
                <button className="button" onClick={() => setButtonPopup(true)}>
                    {" "}
                    Assign Lab{" "}
                </button>
                <TaskPop trigger={x} setTrigger={setButtonPopup}>
                    <TaskModal
                        id={props.id}
                        trigger={x}
                        setTrigger={setButtonPopup}
                        patient={props.pname}
                    ></TaskModal>
                </TaskPop>
            </div>
        );
    else if (type === "lab")
        return(
            <div className="t1">
                <div className="t2">
                    <FontAwesomeIcon 
                        icon="fas fa-arrow-alt-circle-right"
                        style={{padding:"5px"}} />{" "} 
                    Upload report for patient {props.pname} appointed by {props.dname}
                </div>
            <button className="button" onClick={() => setButtonPopup(true)}>{" "}
                Upload Report {" "} 
            </button>
            <LabPop trigger={x} setTrigger={setButtonPopup}>
                <LabModal id={props.id} trigger={x} setTrigger={setButtonPopup} patient={props.pname} pid={props.pid} did={props.did}></LabModal>
            </LabPop>
        </div>
        );
    else return "";
};
