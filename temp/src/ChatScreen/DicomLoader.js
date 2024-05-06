import React, { useState } from "react";
import InsightViewer from "@lunit/insight-viewer";
import { AnnotationOverlay } from '@lunit/insight-viewer/annotation'

export const DicomLoader = props => {
    const style = {
        width: "700px",
        height: "700px",
    };

    const [annotationMode, setAnnotationMode] = useState("polygon");
    const [annotations, setAnnotation] = useState([]);


    // steps
    // create file during report creation
    // read the file 
    // parse it and add new things
    // reupload the file with same name
    // make a popup for dicom drawing board
    return (
        <div style={style}>
            <button
                style={{ marginRight: "8px" }}
                onClick={() => setAnnotationMode("polygon")}
            >
                polygon
            </button>
            <button
                style={{ marginRight: "8px" }}
                onClick={() => setAnnotationMode("ruler")}
            >
                ruler
            </button>
            <button onClick={() => setAnnotationMode("area")}>area</button>
            {/* <InsightViewer {...props.viewerProps}> */}
            <InsightViewer image={props.viewerProps.image}>

                <AnnotationOverlay
                    isDrawing
                    mode={annotationMode}
                    annotations={annotations}
                    onChange={annotations => setAnnotation(annotations)}
                />
            </InsightViewer>
        </div>
    );
};
