import React, { useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskComp = props => {
    var showPopup = useState() 
    return (
        <div className="t1">
            <div className="t2">
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Upload report
                for patient {props.pname} appointed by {props.dname}
            </div>
            <button className="button"> Upload Report </button>
        </div>
    );
};

export default TaskComp;
