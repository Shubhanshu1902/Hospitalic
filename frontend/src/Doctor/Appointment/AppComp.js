import React, { useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskModal from "./TaskModal";
import TaskPop from "./TaskPop";

const AppComp = props => {

    const [x, setButtonPopup] = useState(false);

    return (
        <div className="t1">
            <div className="t2">
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Appointment for {props.pname}
            </div>
            <button className="button" onClick={() => setButtonPopup(true)}> Assign Lab </button>
            <TaskPop trigger={x} setTrigger={setButtonPopup}>
                <TaskModal id={props.id} trigger={x} setTrigger={setButtonPopup} patient={props.pname} app_id={props.appid}></TaskModal>
            </TaskPop>
        </div>
    );
};

export default AppComp;
