import React, { useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskPop from "./TaskPop";
import TaskModal from "./TaskModal";

const TaskComp = props => {
    // var showPopup = useState() 

    const [x, setButtonPopup] = useState(false);

    return (
        <div className="t1">
            <div className="t2">
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Upload report
                for patient {props.pname} appointed by {props.dname}
            </div>
            <button className="button" onClick={() => setButtonPopup(true)}> Upload Report </button>
            <TaskPop trigger={x} setTrigger={setButtonPopup}>
                <TaskModal trigger={x} setTrigger={setButtonPopup} patient={props.pname}></TaskModal>
            </TaskPop>
        </div>
    );
};

export default TaskComp;
