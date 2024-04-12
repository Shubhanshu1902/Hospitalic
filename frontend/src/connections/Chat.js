import {retrieveJWT} from "./CookieJWT.js";

export async function SaveChatCall(
    reportId,
    username,
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
        username : username,
        msg : msg,
        // time : ,
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
    let chatEntities;
    let token = retrieveJWT();
//    let token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2YXRzYWwzIiwicm9sZXMiOlsiUGF0aWVudCJdLCJpYXQiOjE3MTI5MDUyMTIsImV4cCI6MTcxMjkwNTkxMn0.1rKv1Exuj0lFSkGPS5KVP8ir1BOVFX7cuoYF-IAdDhIj18tvXgc7qn7Fh4GzAjTpkmElpfN67uFgLCvx6xlUoQ";
    console.log("In Fetch Chat");
    await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        chatEntities = data;
    })
    .catch(error => {
        console.error('Error fetching chat entities:', error);
        chatEntities = [];
    });
    console.log(chatEntities);
    return chatEntities;
}