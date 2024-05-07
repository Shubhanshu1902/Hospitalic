import React from "react";
import { RequestCard } from "./cards/RequestCard";
import { getNotAcceptedRequestByPatientId } from "../connections/Request";
import { retrieveUserId } from "../connections/CookieJWT";
import { useState, useEffect } from "react";

export const AllRequests = () => {
    // const request = 
    const [requestList,setRequestList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNotAcceptedRequestByPatientId(retrieveUserId());
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
    }, [retrieveUserId()]);
    
    return (
        <div className="AllRequests">
            <h1 style={{ color: '#777777' }}> Access Requests</h1>
            {requestList.map((request,index) => {
                return (
                    <RequestCard key ={index} index={index+1} request = {request}></RequestCard>
                )
            })}
        </div>
    );
};
