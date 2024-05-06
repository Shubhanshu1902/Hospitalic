import React, { useState } from "react";
import AWS from "aws-sdk";
import { saveReport } from "../connections/Report";
import { retrieveUserId } from "../connections/CookieJWT";
import { updateLabStatus } from "../connections/Appointment";

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

export const LabModal = props => {
    const [name,setName] = useState("")

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
                if (err) {//console.log(err); 
                    return}
            });
        
        
        const a = getURLfromBUCKET(myBucket,"" + props.id + ".dcm")
        updateLabStatus(props.id);
        // console.log(a,props.pid, props.did);
        saveReport(name,a,"",""+props.did, ""+props.pid, ""+retrieveUserId());
        props.setTrigger(false)
    };

  return props.trigger ? (

    <div style={{display:"flex", flexDirection:"column", height:"20vh", padding:"10px", gap:"20px", fontSize:"larger", justifyContent:"space-around"}}>
      <div>UPLOAD REPORT</div>
      <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
      <input type="file" onChange={handleFileInput} style={{fontSize:"large"}} />
      <button style={{width:"50%", height:"15%", alignSelf:"center", fontSize:"large"}} onClick={() => uploadFile(selectedFile)}> 
        {" "} Upload to S3
      </button>
    </div>

  ) : (
    " "
  );
}
