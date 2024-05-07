import React, { useEffect, useState } from "react";
import { MsgBox } from "./MsgBox";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";

export const Box = props => {
    const [clicked, setClicked] = useState(0);
    const type = useParams().type;

    useEffect(() => {
        if (type === "patient") setClicked(1);
    }, []);
    return (
        <div className="Box">
            <div className="top-btn">
                {type === "doctor" || type === "radiologist" ? (
                    <button
                        className={clicked === 0 ? "box-btn active" : "box-btn"}
                        onClick={() => {
                            setClicked(0);
                        }}
                    >
                        Chats
                    </button>
                ) : (
                    ""
                )}
                {type === "doctor" ||
                type === "radiologist" ||
                type === "patient" ? (
                    <button
                        className={clicked === 1 ? "box-btn active" : "box-btn"}
                        onClick={() => {
                            setClicked(1);
                        }}
                    >
                        Comments
                    </button>
                ) : (
                    ""
                )}
            </div>

            {clicked === 0 ? (
                <MsgBox controllers={props.controllers} report={props.report} />
            ) : (
                <Comments />
            )}
        </div>
    );
};
