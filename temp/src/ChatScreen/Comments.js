import React, { useEffect, useState } from "react";
import { retrieveUserId } from "../connections/CookieJWT";
import { useParams } from "react-router-dom";
import { GetReportById, RepAddComment } from "../connections/Report";
import {
    getAcceptedequestByReportId,
    ReqAddComment,
} from "../connections/Request";
import hasbulla from "../icons/Untitled.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Get all accepted requests by id
// Get all not accpted requests by pat_id
export const Comments = () => {
    const ids = retrieveUserId();
    const type = useParams().type;
    const reportId = useParams().reportid;
    const [data, setData] = useState([]);

    const [comments, setComments] = useState([]);
    const [cmnt, setCmnt] = useState("");

    useEffect(() => {
        async function fetchCommentFromReport() {
            let items = await GetReportById(reportId);
            // console.log("items", items);
            if (items.length != 0 && items.comments !== "") {
                setComments(comments => [
                    ...comments,
                    {
                        id: items.user1.id,
                        name: `${items.user1.first_name} ${items.user1.last_name}`,
                        comment: `${items.comments}`,
                    },
                ]);
            }
            // setData(items);
        }

        fetchCommentFromReport();
        // console.log("i fire once");
    }, []);

    useEffect(() => {
        async function fetchCommentsFromRequest() {
            let items = await getAcceptedequestByReportId(reportId);
            // console.log(items);
            // setData(items);
            for (let i = 0; i < items.length; i++) {
                setData(items[i]);
            }
        }

        fetchCommentsFromRequest();
    }, []);

    useEffect(() => {
        // console.log(data.comments)
        if (data.length != 0 && data.comments !== "") {
            setComments(comments => [
                ...comments,
                {
                    id: data.user1.id,
                    name: `${data.user1.first_name} ${data.user1.last_name}`,
                    comment: `${data.comments}`,
                },
            ]);
        }
    }, [data]);

    const handleKeyDown = event => {
        if (event.key === "Enter" && cmnt.trim()) {
            // console.log("ENTERED")
            if (type === "doctor") RepAddComment(reportId, cmnt);
            else if (type === "radiologist")
                ReqAddComment(reportId, retrieveUserId(), cmnt);
            setCmnt("");
        }
    };

    const handleArrow = event => {
        // console.log("CLICKED")
        RepAddComment(reportId, cmnt);
        setCmnt("");
    };

    // console.log("comments", comments);
    let key = 0;

    return (
        <div className="msgbox">
            <div className="title">
                <span>Final Comments</span>
            </div>
            <div className="all-msg">
                {comments.map(obj => {
                    return (
                        <div className={obj.id === retrieveUserId() || type === "patient" ? "messages" : "messages other"} key={key++}>
                            <div className="messageInfo">
                                <img src={hasbulla} alt="hasbulla" />
                                {obj.id !== retrieveUserId() ? <p>{obj.name}</p> : ""}
                            </div>
                            <div className="messageContent">
                                <p className={obj.id !== retrieveUserId() && type !== "patient" ? "p" : "p other"}>{obj.comment}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="input">
                <input
                    placeholder="Your Input"
                    onChange={event => setCmnt(event.target.value)}
                    value={cmnt}
                    onKeyDown={handleKeyDown}
                />

                <div className="sendArrow">
                    <FontAwesomeIcon
                        icon="fa-solid fa-paper-plane"
                        onClick={handleArrow}
                    />
                </div>
            </div>
        </div>
    );
};
