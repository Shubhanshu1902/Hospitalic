import React, { useEffect, useState } from "react";
import { retrieveUserId } from "../connections/CookieJWT";
import { useParams } from "react-router-dom";
import { GetReportById, RepAddComment } from "../connections/Report";
import { getAcceptedequestByReportId } from "../connections/Request";
import hasbulla from "../icons/Untitled.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Get all accepted requests by id
// Get all not accpted requests by pat_id
export const Comments = () => {
    const ids = retrieveUserId();
    const reportId = useParams().reportid;
    const [data, setData] = useState([]);

    const [comments, setComments] = useState([]);
    const [cmnt, setCmnt] = useState("");

    useEffect(() => {
        async function fetchCommentFromReport() {
            let items = await GetReportById(reportId);
            // console.log("items", items);
            setData(items);
        }

        fetchCommentFromReport();
        // console.log("i fire once");
    }, []);

    useEffect(() => {
        let items = [];
        async function fetchCommentsFromRequest() {
            items = await getAcceptedequestByReportId(reportId);
            // console.log(items);
            // setData(items);
            for (let i = 0; i < items.length; i++) {
                setData(items[i]);
            }
        }

        fetchCommentsFromRequest();
    }, []);

    useEffect(() => {
        if (data.length != 0 && data.comment !== undefined) {
            setComments(comments => [
                ...comments,
                {
                    name: `${data.user1.first_name} ${data.user1.last_name}`,
                    comment: `${data.comment}`,
                },
            ]);
        }
    }, [data]);

    const handleKeyDown = event => {
        if (event.key === "Enter" && cmnt.trim()) {
            // console.log("ENTERED")
            RepAddComment(reportId, cmnt);
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

            {comments.map(obj => {
                return (
                    <div className="messages" key={key++}>
                        <div className="messageInfo">
                            <img src={hasbulla} alt="hasbulla" />
                            <p>{obj.name}</p>
                        </div>
                        <div className="messageContent">
                            <p>{obj.comment}</p>
                        </div>
                    </div>
                );
            })}
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
