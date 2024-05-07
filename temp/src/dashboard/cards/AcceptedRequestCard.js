import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { approveRequestByRequestId, deleteRequestByRequestId } from "../../connections/Request";

export const AcceptedRequestCard = (props) => {

    function handleRevokeRequest(id) {
        deleteRequestByRequestId(id)
    }

    const doctorname = props.request.report.user1.first_name + " " + props.request.report.user1.last_name;

    const radiologistname = props.request.user1.first_name + " " + props.request.user1.last_name;

    return (
    <div className="RequestCard">
        <div className="RequestCardInfo">
            <p>Report : {props.request.report.name}</p>
            <p>Request Id : {props.request.id}</p>
        </div>
        <div className="RequestCardInfo">
            <p>Radiologist : {radiologistname} </p>
            <p>Requesting doctor : {doctorname}</p>
        </div>
        
        <div className="RequestCardButtons">
            Revoke access
            <div onClick={()=> handleRevokeRequest(props.request.id)}>
                
            </div>
            <FontAwesomeIcon
                color="red"
                size="lg"
                icon="fa-solid fa-ban"

                onClick={()=> handleRevokeRequest(props.request.id)}
            />
        </div>


    </div>
    );
};