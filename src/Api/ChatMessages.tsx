const chatMessages = {
    "1": [
        { senderId: "1", receiverId: "2", text: "Morning Angelie, I have question about My Task" },
        { senderId: "2", receiverId: "1", text: "Thank you very much. I'm glad you asked about the assignment" },
        { senderId: "1", receiverId: "2", text: "How to make a responsive display from the dashboard?" },
        { senderId: "1", receiverId: "2", text: "Is there a plugin to do this task?" },
        { senderId: "2", receiverId: "1", text: "No plugins. You just have to make it smaller according to the size of the phone." },
        { senderId: "2", receiverId: "1", text: "Thank you very much. I'm glad you asked about the assignment" },
    ],
    "2": [

        { senderId: "2", receiverId: "1", text: "Hi :)" },
        { senderId: "2", receiverId: "1", text: "Can we talk?" },
        { senderId: "1", receiverId: "2", text: "Sure! let me tell you about the news" },
    ],
    "3": [
        { senderId: "2", receiverId: "1", text: "Are you there?" },
        { senderId: "1", receiverId: "2", text: "Yeah I`m here" },
        { senderId: "2", receiverId: "1", text: "Nice let`s go" },
        { senderId: "1", receiverId: "2", text: "Go go" },
        { senderId: "2", receiverId: "1", text: "Thank’s. You are very helpful dude" },
    ],
    "4": [

        { senderId: "1", receiverId: "2", text: "Is there a plugin to do this task?" },
        { senderId: "2", receiverId: "1", text: "No plugins. You just have to make it smaller according to the size of the phone." },
        { senderId: "1", receiverId: "2", text: "Thanks!" },
        { senderId: "2", receiverId: "1", text: "Is there anything I can help? Just lwt me know." },
    ],
    "5": [
        { senderId: "1", receiverId: "2", text: "Hi" },
        { senderId: "2", receiverId: "1", text: "Bye." },
        { senderId: "1", receiverId: "2", text: "Sure! let me teach you about the way you should talk to me." },
    ],
    "6": [

        { senderId: "1", receiverId: "2", text: "lorem lorem" },
        { senderId: "1", receiverId: "2", text: "Is there a plugin to do this task?" },
        { senderId: "2", receiverId: "1", text: "No plugins. You just have to make it smaller according to the size of the phone." },
        { senderId: "2", receiverId: "1", text: "Okay. I know very well about it :)" },
    ],
    "7": [
        { senderId: "1", receiverId: "2", text: "Morning Angelie, I have question about My Task" },
        { senderId: "2", receiverId: "1", text: "Thank you very much. I'm glad you asked about the assignment" },
        { senderId: "1", receiverId: "2", text: "Is there a plugin to do this task?" },
        { senderId: "2", receiverId: "1", text: "No plugins. You just have to make it smaller according to the size of the phone." },
        { senderId: "1", receiverId: "2", text: "Sure! let me share about the info." },
    ],
    "8": [
        { senderId: "2", receiverId: "1", text: "Hi Dear" },
        { senderId: "1", receiverId: "2", text: "Hello sweetheart" },
        { senderId: "1", receiverId: "2", text: "Is there anything you wanna tell me?" },
        { senderId: "2", receiverId: "1", text: "Not really but I miss you so" },
        { senderId: "1", receiverId: "2", text: "Ohu, miss u too baby!" },
        { senderId: "1", receiverId: "2", text: "Tell me about when to hang out." },
    ]
};

export const getChatMessages = (chatId: keyof typeof chatMessages) => {
    return chatMessages[chatId] || [];
};

export default chatMessages;
