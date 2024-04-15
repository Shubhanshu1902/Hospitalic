import { useState, useEffect } from 'react';
import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Messages from "./Messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FetchChatEntities } from "../../connections/Chat";

const Msgbox = (props) => {
    const reportId = props.reportProps.reportId;

    const [chatList, setChatList] = useState([]);

    // Fetch chat entities when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch chat entities using async/await
                const data = await FetchChatEntities(reportId);
                setChatList(data); // Set the fetched chatList to state
            } catch (error) {
                console.error('Error fetching chat entities:', error);
            }
        };
        const intervalId = setInterval(fetchData, 5000); // Fetch messages every 5 seconds

        return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
    }, [reportId]); // Dependency array ensures effect runs when reportId changes

    console.log(chatList);

    return (
        <div className="msgbox">
            <div className="title">
                <span>Discussion</span>
            </div>

            <div className="chat-messages">
                {chatList.map((chat, index) => (
                    <Messages chat = {chat}/>
                ))}
            </div>

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
