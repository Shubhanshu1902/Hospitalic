import React, { useState } from "react";
import AWS from "aws-sdk";


const S3_BUCKET = process.env.BUCKET_NAME;
const REGION = process.env.REGION;


AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
});

const TaskModal = props => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = e => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadFile = file => {
        const params = {
            ACL: "public-read",
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name,
        };

        const a = myBucket
            .putObject(params)
            .on("httpUploadProgress", evt => {
                setProgress(Math.round((evt.loaded / evt.total) * 100));
            })
            .send(err => {
                if (err) console.log(err);
            });

        console.log(a);
    };

    return (
        props.trigger ? <div>
            <div>Native SDK File Upload Progress is {progress}%</div>
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => uploadFile(selectedFile)}>
                {" "}
                Upload to S3
            </button>
        </div> : ("")
    );
};

export default TaskModal;