import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FolderIcon = props => {
    const navigate = useNavigate();
    const onClickFolder = () => {
        navigate(`${props.id}`);
    };
    return (
        <div className="pat-icon" onClick={onClickFolder}>
            <FontAwesomeIcon size="6x" color="#7A7A7A" icon="fa-solid fa-folder" />
            {props.name}
        </div>
    );
};
