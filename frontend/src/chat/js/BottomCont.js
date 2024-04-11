import { useState } from "react";
import RequestPop from "./RequestPop";
import RequestModal from "./RequestModal";
import InsightViewer, { useImage, useInteraction } from "@lunit/insight-viewer";
import { useViewport } from "@lunit/insight-viewer/viewport";

const BottomCont = () => {
    const[x, setButtonPopup] = useState(false);

    return (
        <div className="bottomCont">
            <div className="button" onClick={props.controllers.pan}>Pan</div>
            <div className="button" onClick={props.controllers.adjust}>Adjust</div>
            <div className="button" onClick={props.controllers.reset}>Reset</div>
            <div className="button" onClick={() => setButtonPopup(true)}>Request Radiologist</div>
            <RequestPop trigger={x} setTrigger={setButtonPopup}>
                <h3>Request Radiologist</h3>
                <RequestModal></RequestModal>
            </RequestPop>
            <div className="summary">Write summary and diagnosis</div>
        </div>
    );
}

export default BottomCont;
