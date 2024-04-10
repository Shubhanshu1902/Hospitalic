import Report from "./Report.js";
import Navbar from "./Navbar.js";
import Msgbox from "./Msgbox.js";
import ReportContainer from "./ReportContainer.js";
import BottomCont from "./BottomCont.js";
import InsightViewer, { useImage, useInteraction } from "@lunit/insight-viewer";
import { useViewport } from "@lunit/insight-viewer/viewport";
import { useRef } from "react";

const Chat = () => {
    const MOCK_IMAGE =
        "wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000002.dcm";

    const { image } = useImage({ wadouri: MOCK_IMAGE });
    const viewerRef = useRef(null);
    const { viewport, setViewport, resetViewport } = useViewport({
        image,
        viewerRef,
    });

    const { interaction, setInteraction } = useInteraction({
        mouseWheel: "scale", // Dicom Image scale is changed by mouse wheel events.
        primaryDrag: "pan", // The Dicom Image is moved by the left mouse drag.
    });

    const controllers = {
        pan: () => {
            setInteraction(prev => ({ ...prev, primaryDrag: "pan" }));
        },
        reset: resetViewport, // Set to the initial viewport of the Dicom Image.
        adjust: () => {
            setInteraction(prev => ({ ...prev, primaryDrag: "adjust" }));
        },
    };

    const viewerProps = {
        image,
        viewerRef,
        viewport,
        interaction,
        onViewportChange: setViewport,
    };

    return (
        <div className="chat">
            <Navbar />
            <ReportContainer viewerProps = {viewerProps} />
            <BottomCont controllers= {controllers} />
        </div>
    );
};

export default Chat;
