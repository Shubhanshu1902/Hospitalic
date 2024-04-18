import {retrieveJWT} from "./CookieJWT.js";

export async function SaveChatCall(
    reportId,
    sender_id,
    msg)
    {
    const url = "http://localhost:8081/chat/save"; // Adjust URL if needed
    let token = retrieveJWT();
    console.log("In Save Chat");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(
        {
          reportId : reportId,
          sender_id : sender_id,
          msg : msg,
        }),
    });

    if (!response.ok) {
      throw new Error(`Chat saving failed: ${response.statusText}`);
    }

    try {
      const responseData = await response.json();
      console.log("Chat saved successfully:", responseData);
      // Handle successful response (e.g., update UI)
    } catch (error) {
      console.error("Error parsing response:", error);
    }
  }

export async function FetchChatEntities(reportId) {
    const url = `http://localhost:8081/chat/find_filter/${reportId}`;
    let token = retrieveJWT();
    console.log("In Fetch Chat");

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const textData = await response.text();
        const dataList = JSON.parse(textData);

        return dataList;
    } catch (error) {
        console.error('Error fetching chat entities:', error);
        return []; // Return an empty array in case of error
    }
}