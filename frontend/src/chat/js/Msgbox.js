import { useState, useEffect } from "react";
import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Messages from "./Messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FetchChatEntities } from "../../connections/Chat";
import { SaveChatCall } from "../../connections/Chat";
const Msgbox = props => {
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
                console.error("Error fetching chat entities:", error);
            }
        };
        const intervalId = setInterval(fetchData, 5000); // Fetch messages every 5 seconds

        return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
    }, [reportId]); // Dependency array ensures effect runs when reportId changes

    console.log(chatList);

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = event => {
        if (event.key === "Enter" && inputValue.trim()) {
            SaveChatCall(reportId, "1", inputValue); //Change the senderid with cookie's sender id
            setInputValue("");
        }
    };

    const handleArrow = event => {
        SaveChatCall(reportId, "1", inputValue); //Change the senderid with cookie's sender id
        setInputValue("");
    };
    return (
        <div className="msgbox">
            <div className="title">
                <span>Discussion</span>
            </div>

            <div className="chat-messages">
                {chatList.map((chat, index) => {
                    console.log(chat);
                    return <Messages sender_id = {chat.sender_id} chat={chat} />;
                })}
            </div>

            <div className="input">
                <input
                    type="text"
                    placeholder="Input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <div className="sendArrow">
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        onClick={handleArrow}
                    />
                </div>
            </div>
        </div>
    );
};

export default Msgbox;
