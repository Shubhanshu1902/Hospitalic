export async function fetchChatEntities(reportId, token) {
    const url = "http://localhost:8081/api/find_filter/${reportId}";
    let chatEntities;

    await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer ${token}"
        },
    })
    .then(response => {
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

    return chatEntities;
}