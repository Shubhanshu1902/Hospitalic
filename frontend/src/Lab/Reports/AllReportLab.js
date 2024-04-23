import React from "react";
import { ReportIcon } from "./ReportIcon";

export const AllReportLab = () => {
    const report_names = [
        {
            id : 1,
            name : "Leg"
        },
        {
            id : 2,
            name : "Hand"
        },
        {
            id : 3,
            name : "Nose"
        },
        {
            id : 4,
            name : "Chest"
        },

    ]

    let key = 0;
    return <div className="icons">
        {report_names.map((obj) => {
            // {console.log(name)}
            return <ReportIcon key={key++} name={obj.name} id={obj.id}/>
        })}
    </div>;
};
