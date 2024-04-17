import React from "react";
import { useParams } from "react-router-dom";

export const ReportAdd = () => {
    const params = useParams()
    console.log(params.appointmentId)
    return <div>ReportAdd {params.appointmentId}</div>;
};
