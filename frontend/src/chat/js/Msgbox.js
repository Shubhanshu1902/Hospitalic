import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Messages from "./Messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FetchChatEntities } from "../../connections/Chat";
import React, { useState, useEffect } from 'react';
const Msgbox = (props) => {
    const reportId = props.reportProps.reportId;
    { /* const chatlist = FetchChatEntities(reportId);
    console.log(typeof chatlist);
    const keys = Object.keys(chatlist);
    console.log(keys);
    console.log("Chatlist.data - ",chatlist.data);
    console.log("Chatlist - ",chatlist); */ }
    const [chatlist, setChatlist] = useState(null); // State to store the data

     useEffect(() => {
       FetchChatEntities(reportId)
         .then(response => {
           if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
           }
           return response.json(); // Call json only on successful response
         })
         .then(data => {
           setChatlist(data);
         })
         .catch(error => {
           console.error('Error fetching data:', error);
           // Handle errors appropriately (e.g., display an error message)
         });
     }, []);
         console.log("Chatlist - ",chatlist);
    return (
        <div className="msgbox">
            <div className="title">
                <span>Discussion</span>
            </div>
            {/* {chatlist.data && chatlist.data.map((item, index) => (
                <div key={item.id}>
                  <p>{item.msg}</p>
                </div>
              ))
            } */}
            <div className="input">
                <input type="text" placeholder= 'Input'/>
                <div className="sendArrow">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    );
}

export default Msgbox;
