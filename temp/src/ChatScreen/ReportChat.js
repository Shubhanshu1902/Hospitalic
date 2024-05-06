import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../connections/User";
import { Navbar } from "../dashboard/Navbar";
import { Topbar } from "../dashboard/Topbar";
import { GetReportById } from "../connections/Report";
import InsightViewer, { useImage, useInteraction } from "@lunit/insight-viewer";
import { useViewport } from "@lunit/insight-viewer/viewport";
import { BottomCont } from "./BottomCont";
import { DicomLoader } from "./DicomLoader";
import { MsgBox } from "./MsgBox";
import { Page404 } from "../Page404/Page404";
import { Comments } from "./Comments";
import { Box } from "./Box";

export const ReportChat = () => {
    const type = useParams().type;
    const ids = useParams().reportid;
    const navigate = useNavigate();
    if (!verify) navigate("../404");
    const [report, setReport] = useState([]);

    async function fetchdata() {
        const item = await GetReportById(ids);
        setReport(item);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const link = `wadouri:${report.photo_path}`;
    const { image } = useImage({ wadouri: link });
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

    return verify(type) ? (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />
                <div className="chat">
                    <div className="reportCont">
                        <DicomLoader viewerProps={viewerProps} />
                        {type != "lab" ? (
                            <Box controllers={controllers} report={report} />
                        ) : (
                            ""
                        )}
                    </div>
                    <BottomCont controllers={controllers} reportId={ids} />
                </div>
            </div>
        </div>
    ) : (
        <Page404 />
    );
};
