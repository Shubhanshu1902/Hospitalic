import InsightViewer from "@lunit/insight-viewer";
import React, { useEffect, useRef, useState } from "react";

export const DicomLoader = props => {
    const style = {
        width: "700px",
        height: "700px",
    };

    return (
        <div style={style}>
            <InsightViewer {...props.viewerProps} />
        </div>
    );
};
