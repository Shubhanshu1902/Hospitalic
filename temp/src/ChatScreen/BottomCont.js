import React, { useState } from "react";
import { RequestPop } from "./RequestPop";
import { RequestModal } from "./RequestModal";

export const BottomCont = (props) => {
    const[x, setButtonPopup] = useState(false);
    // console.log(props.patient)

    return (
        <div className="bottomCont">
            <div className="button" onClick={props.controllers.pan}>
                Pan
            </div>
            <div className="button" onClick={props.controllers.adjust}>
                Adjust
            </div>
            <div className="button" onClick={props.controllers.reset}>
                Reset
            </div>
            <div className="button" onClick={() => setButtonPopup(true)}>
                Request Radiologist
            </div>
            <RequestPop trigger={x} setTrigger={setButtonPopup}>
                <h3>Request Radiologist</h3>
                <RequestModal
                    trigger={x}
                    setTrigger={setButtonPopup}
                    reportId = {props.reportId}
                    patientId = {props.patientId}
                ></RequestModal>
            </RequestPop>
            {/* <div className="summary">Write summary and diagnosis</div> */}
        </div>
    );
};
