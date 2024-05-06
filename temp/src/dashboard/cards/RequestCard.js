import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { approveRequestByRequestId, deleteRequestByRequestId } from "../../connections/Request";

export const RequestCard = (props) => {

    function handleAcceptRequest(id) {
        console.log("accept request triggered")
        approveRequestByRequestId(id)
    }

    function handleCancelRequest(id) {
        console.log("cancel request triggered")
        deleteRequestByRequestId(id)
    }

    return (
    <div>
        <p>{props.index}</p>
        <p>report name : {props.request.report.name}</p>
        <p>request id : {props.request.id}</p>
        <p>radiologist username : {props.request.user1.first_name} {props.request.user1.last_name}</p>
        <p>requesting doctor username : {props.request.report.user1.first_name} {props.request.report.user1.last_name}</p>
        <hr></hr>
        
        <FontAwesomeIcon
            color="green"
            size="lg"
            icon="fa-solid fa-check"

            onClick={()=> handleAcceptRequest(props.request.id)}
        />
        <FontAwesomeIcon
            color="red"
            size="lg"
            icon="fa-solid fa-xmark"

            onClick={()=> handleCancelRequest(props.request.id)}
        />
        
        <hr></hr>
        <br></br>

    </div>
    );
};