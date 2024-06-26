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
import { getURLfromBUCKET, uploadJSONtoS3 } from "../S3/s3";

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

    // ANNOTATIONS
    const [annotationMode, setAnnotationMode] = useState("polygon");
    const [annotations, setAnnotation] = useState([]);

    async function fetchData(a) {
        return fetch(a)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }

    const [list, setList] = useState([]);
    const [y, setY] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (report.id !== undefined) {
            let a = getURLfromBUCKET(`${report.id}.json`);
            fetchData(a)
                .then(list => setList(list))
                .catch(error => console.log(error));

            // console.log(a);
        }
    }, [report.id]);

    useEffect(() => {
        // console.log(Object.keys(list).length)
        if (list !== undefined && Object.keys(list).length !== 0) setAnnotation(list);
    }, [list]);

    const handleClick = () => {
        if (list === undefined || Object.keys(list).length === 0) setList(annotations);
        else {
            for (let i = 0; i < annotations.length; i++) {
                setList(list => [...list, annotations[i]]);
            }
        }
        setDone(true);
    };

    useEffect(() => {
        console.log(list)
        if (done == true) {
            uploadJSONtoS3(JSON.stringify(list), report.id);
            setDone(false);
        }
    }, [done]);

    // console.log(report);

    return verify(type) ? (
        <div className="dashboard">
            <Navbar />
            <div className="AppContent">
                <Topbar />
                <div className="chat">
                    <div className="reportCont">
                        <DicomLoader
                            viewerProps={viewerProps}
                            report={report}
                            annotations={annotations}
                            y={y}
                            annotationMode={annotationMode}
                            setAnnotation={setAnnotation}
                        />
                        {type != "lab" ? (
                            <Box controllers={controllers} report={report} />
                        ) : (
                            ""
                        )}
                    </div>
                    <BottomCont
                        controllers={controllers}
                        reportId={ids}
                        y={y}
                        setY={setY}
                        handleClick={handleClick}
                        setAnnotationMode={setAnnotationMode}
                        type={type}
                    />
                </div>
            </div>
        </div>
    ) : (
        <Page404 />
    );
};
