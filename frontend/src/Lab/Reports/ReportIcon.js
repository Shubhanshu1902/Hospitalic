import { faFile } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ReportIcon = (props) => {
    return (
        <div className="pat-icon">
            <FontAwesomeIcon size="6x" color="blue" icon={faFile} />
            {props.name}
        </div>
    );
};
