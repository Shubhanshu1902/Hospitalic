import AWS from "aws-sdk";

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;

AWS.config.update({
    accessKeyId: process.env.REACT_APP_accessKeyId,
    secretAccessKey: process.env.REACT_APP_secretAccessKey,
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
});

export const getURLfromBUCKET = (fileName) => {
    const {
        config: { params, region },
    } = myBucket;
    const regionString = region.includes("us-east-1") ? "" : "-" + region;
    return `https://${params.Bucket}.s3${regionString}.amazonaws.com/${fileName}`;
};

export const uploadFileToS3 = (file,id) => {
    let params = {
        ACL: "public-read",
        Body: file,
        Bucket: S3_BUCKET,
        Key: "" + id + ".dcm",
    };

    myBucket
        .putObject(params)
        .on("httpUploadProgress", evt => {
        })
        .send(err => {
            if (err) {
                //console.log(err);
                return;
            }
        });
    }

export const uploadJSONtoS3 = (file, id) => {
    let params = {
        ACL: "public-read",
        Body: file,
        Bucket: S3_BUCKET,
        Key: "" + id + ".json",
    };

    myBucket
        .putObject(params)
        .on("httpUploadProgress", evt => {
        })
        .send(err => {
            if (err) {
                //console.log(err);
                return;
            }
        });
}