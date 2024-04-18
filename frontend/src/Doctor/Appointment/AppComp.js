import React, { useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppComp = props => {
    var showPopup = useState() 
    return (
        <div className="t1">
            <div className="t2">
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Appointment for {props.pname}
            </div>
            <button className="button"> Upload Report </button>
        </div>
    );
};

export default AppComp;
