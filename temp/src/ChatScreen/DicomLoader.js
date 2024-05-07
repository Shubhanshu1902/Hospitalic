import React, { useEffect, useState } from "react";
import InsightViewer from "@lunit/insight-viewer";
import { AnnotationOverlay } from "@lunit/insight-viewer/annotation";
import { getURLfromBUCKET, uploadJSONtoS3 } from "../S3/s3";

export const DicomLoader = props => {
    const style = {
        width: "700px",
        height: "700px",
    };

    return (
        <div style={style}>
            {props.y === 1 ? (
                <InsightViewer image={props.viewerProps.image}>
                    <AnnotationOverlay
                        isDrawing
                        mode={props.annotationMode}
                        annotations={props.annotations}
                        onChange={annotations =>
                            props.setAnnotation(annotations)
                        }
                    />
                </InsightViewer>
            ) : (
                <InsightViewer {...props.viewerProps} />
            )}
        </div>
    );
};
