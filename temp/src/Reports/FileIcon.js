import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

export const FileIcon = props => {
    // console.log(props.obj.name);
    const type = props.type
    const navigate = useNavigate();
    const navigatePath = `../${type}/report/${props.obj.id}`

    const click = () => {
        navigate(navigatePath)
    }

    return (
        <div onClick = {click} className="pat-icon">
            <FontAwesomeIcon size="6x" color="blue" icon="fa-solid fa-file" />
            {props.obj.name}
        </div>
    );
};
