import { faFolder } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const PatientIcon = props => {
    return (
        <div className="pat-icon">
            <FontAwesomeIcon size={70} className="fonticon" icon={faFolder} />
            {props.name}
        </div>
    );
};
