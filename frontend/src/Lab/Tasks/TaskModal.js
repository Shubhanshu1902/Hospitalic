import React, { useState } from "react";
import AWS from "aws-sdk";

const S3_BUCKET = "hospitalic1";
const REGION = "ap-south-1";

AWS.config.update({
    accessKeyId: "AKIAYS2NQIIRAKBGX467",
    secretAccessKey: "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",
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

    const getURLfromBUCKET = (s3bucket, fileName) => {
        const {
            config: { params, region },
        } = s3bucket;
        const regionString = region.includes("us-east-1") ? "" : "-" + region;
        return `https://${params.Bucket}.s3${regionString}.amazonaws.com/${fileName}`;
    };

    const uploadFile = file => {
        const file2 = new File([file], props.id, { type: file.type });

        const params = {
            ACL: "public-read",
            Body: file,
            Bucket: S3_BUCKET,
            Key: "" + props.id + ".dcm",
        };

        myBucket
            .putObject(params)
            .on("httpUploadProgress", evt => {
                setProgress(Math.round((evt.loaded / evt.total) * 100));
            })
            .send(err => {
                if (err) console.log(err);
            });
        
        const a = getURLfromBUCKET(myBucket,"" + props.id + ".dcm")
        console.log(a);
    };

    return props.trigger ? (
        <div>
            <div>Native SDK File Upload Progress is {progress}%</div>
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => uploadFile(selectedFile)}>
                {" "}
                Upload to S3
            </button>
        </div>
    ) : (
        ""
    );
};

export default TaskModal;
