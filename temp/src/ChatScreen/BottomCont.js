import React, { useState } from "react";
import { RequestPop } from "./RequestPop";
import { RequestModal } from "./RequestModal";
import { ToggeleSwitch } from "./ToggeleSwitch";

export const BottomCont = props => {
    const [x, setButtonPopup] = useState(false);
    // console.log(props.patient)
    return (
        <div className="bottomCont">
            <ToggeleSwitch label="Drawing Mode" setX={props.setY} />
            {props.y === 0 ? (
                <div style={{ display: "flex", gap: "20px" }}>
                    <div className="button" onClick={props.controllers.pan}>
                        Pan
                    </div>
                    <div className="button" onClick={props.controllers.adjust}>
                        Adjust
                    </div>
                    <div className="button" onClick={props.controllers.reset}>
                        Reset
                    </div>
                </div>
            ) : (
                <div style={{ display: "flex", gap: "20px" }}>
                    <div
                        className="button"
                        onClick={() => {
                            if (
                                props.type !== "patient" ||
                                props.type !== "lab"
                            )
                                props.setAnnotationMode("polygon");
                        }}
                    >
                        Polygon
                    </div>
                    <div
                        className="button"
                        onClick={() => {
                            if (
                                props.type !== "patient" ||
                                props.type !== "lab"
                            )
                                props.setAnnotationMode("ruler");
                        }}
                    >
                        Ruler
                    </div>
                    <div
                        className="button"
                        onClick={() => {
                            if (
                                props.type !== "patient" ||
                                props.type !== "lab"
                            )
                                props.setAnnotationMode("area");
                        }}
                    >
                        Area
                    </div>

                    <div
                        className="button"
                        onClick={() => {
                            if (
                                props.type !== "patient" ||
                                props.type !== "lab"
                            )
                                props.handleClick();
                        }}
                    >
                        Done
                    </div>
                </div>
            )}

            <div className="button" onClick={() => setButtonPopup(true)}>
                Request Radiologist
            </div>
            <RequestPop trigger={x} setTrigger={setButtonPopup}>
                <h3>Request Radiologist</h3>
                <RequestModal
                    trigger={x}
                    setTrigger={setButtonPopup}
                    reportId={props.reportId}
                    patientId={props.patientId}
                ></RequestModal>
            </RequestPop>
            {/* <div className="summary">Write summary and diagnosis</div> */}
        </div>
    );
};
