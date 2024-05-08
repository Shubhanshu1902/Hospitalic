import React from "react";
import { AcceptedRequestCard } from "./cards/AcceptedRequestCard";
import { getAcceptedRequestByPatientId } from "../connections/Request";
import { retrieveUserId } from "../connections/CookieJWT";
import { useState, useEffect } from "react";

export const AllAcceptedRequests = () => {
    // const request = 
    const [requestList,setRequestList] = useState([]);
    const ids = retrieveUserId()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAcceptedRequestByPatientId(retrieveUserId());
                if(data !== undefined)
                setRequestList(data);
            }
            catch (error) {
                console.error("Error fetching Request entities:",error);
            }
        };

        fetchData(); 
        const intervalId = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [ids]);
    
    return (
        <div className="AllRequests">
            <h1 style={{ color: '#777777' }}> Accepted Access Requests</h1>
            {requestList.map((request,index) => {
                return (
                    <AcceptedRequestCard key ={index} index={index+1} request = {request}></AcceptedRequestCard>
                )
            })}
        </div>
    );
};
