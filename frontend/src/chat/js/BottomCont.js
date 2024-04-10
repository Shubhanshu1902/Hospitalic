import { useState } from "react";
import RequestPop from "./RequestPop";
import RequestModal from "./RequestModal";

const BottomCont = () => {
    const[x, setButtonPopup] = useState(false);

    return (
        <div className="bottomCont">
            <div className="button">Annotate</div>
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