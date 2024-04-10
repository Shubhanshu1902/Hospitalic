import InsightViewer, { useImage, useInteraction } from "@lunit/insight-viewer";
import { useViewport } from "@lunit/insight-viewer/viewport";


const BottomCont = (props) => {
    return (
        <div className="bottomCont">
            <div className="button" onClick={props.controllers.pan}>Pan</div>
            <div className="button" onClick={props.controllers.adjust}>Adjust</div>
            <div className="button" onClick={props.controllers.reset}>Reset</div>

            <div className="button">Request Radiologist</div>
            <div className="summary">Write summary and diagnosis</div>
        </div>
    );
}

export default BottomCont;