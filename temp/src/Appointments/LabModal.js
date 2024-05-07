import React, { useState } from "react";
import { saveReport } from "../connections/Report";
import { retrieveUserId } from "../connections/CookieJWT";
import { updateLabStatus } from "../connections/Appointment";
import { getURLfromBUCKET, uploadFileToS3, uploadJSONtoS3 } from "../S3/s3";





export const LabModal = props => {
    const [name, setName] = useState("");

    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = e => {
        setSelectedFile(e.target.files[0]);
    };


    const uploadFile = file => {
        const file2 = new File([file], props.id, { type: file.type });

        uploadFileToS3(file2,props.id);
        uploadJSONtoS3("{}",props.id);
        
        const a = getURLfromBUCKET("" + props.id + ".dcm");
        updateLabStatus(props.id);
        // console.log(a,props.pid, props.did);
        saveReport(
            name,
            a,
            "",
            "" + props.did,
            "" + props.pid,
            "" + retrieveUserId()
        );
        props.setTrigger(false);
    };

    return props.trigger ? (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "20vh",
                padding: "10px",
                gap: "20px",
                fontSize: "larger",
                justifyContent: "space-around",
            }}
        >
            <p>{props.lab_pres}</p>
            <div>UPLOAD REPORT</div>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                placeholder="Report Name"
            />
            <input
                type="file"
                onChange={handleFileInput}
                style={{ fontSize: "large" }}
            />
            <button
                style={{
                    width: "50%",
                    height: "15%",
                    alignSelf: "center",
                    fontSize: "large",
                }}
                onClick={() => uploadFile(selectedFile)}
            >
                {" "}
                Upload
            </button>
        </div>
    ) : (
        " "
    );
};
