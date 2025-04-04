import chatMessages from "./ChatMessages";

type Message = {
  senderId: string;
  receiverId: string;
  text: string;
};

type ChatMessages = {
  [key: string]: Message[];
};

type ChatItem = {
  senderId: string;
  receiverId: string;
  name: string;
  avatar: string;
  id: string;
  status: string;
  lastText?: string;
};
const lastMessages = Object.entries(chatMessages as ChatMessages).map(([chatId, messages = []]: [string, Message[] | undefined]) => {
  const lastMessage = messages?.length ? messages[messages.length - 1] : undefined;

  return {
    chatId,
    lastMessage: lastMessage
      ? lastMessage.text.slice(0, 20) + (lastMessage.text.length > 20 ? "..." : "")
      : "No messages here yet..."
  };
});


const chatList: ChatItem[] = [
  { senderId: "2", receiverId: "1", name: "Mr. Mae Watsica", avatar: "../../../images/avatars/img (1).png", id: "1", status: "Online" },
  { senderId: "1", receiverId: "2", name: "Miss Maxine Walker", avatar: "../../../images/avatars/img (2).png", id: "2", status: "Online" },
  { senderId: "2", receiverId: "1", name: "Sandra Pagac", avatar: "../../../images/avatars/img (3).png", id: "3", status: "Online" },
  { senderId: "2", receiverId: "1", name: "Mary Hayes", avatar: "../../../images/avatars/img (4).png", id: "4", status: "Online" },
  { senderId: "1", receiverId: "2", name: "Ms. Danielle Mraz", avatar: "../../../images/avatars/img (1).png", id: "5", status: "Last Seen Recently" },
  { senderId: "2", receiverId: "1", name: "Horace Kertzmann", avatar: "../../../images/avatars/img (2).png", id: "6", status: "Online" },
  { senderId: "1", receiverId: "2", name: "Dawn Durgan IV", avatar: "../../../images/avatars/img (3).png", id: "7", status: "Last Seen Recently" },
  { senderId: "2", receiverId: "1", name: "Mabel Jacobi", avatar: "../../../images/avatars/img (4).png", id: "8", status: "Online" },
  { senderId: "1", receiverId: "2", name: "Matthew Steuber", avatar: "../../../images/avatars/img (1).png", id: "9", status: "Last Seen Recently" },
  { senderId: "2", receiverId: "1", name: "Sandra Satterfield", avatar: "../../../images/avatars/img (2).png", id: "10", status: "Online" },
  { senderId: "1", receiverId: "2", name: "Marion Lemke", avatar: "../../../images/avatars/img (4).png", id: "11", status: "Last Seen Recently" },
  { senderId: "2", receiverId: "1", name: "Alberta Gleason", avatar: "../../../images/avatars/img (3).png", id: "12", status: "Last Seen Recently" }, { senderId: "2", receiverId: "1", name: "Mrs. Leslie Strosin", avatar: "../../../images/avatars/img (2).png", id: "13", status: "Online" }, { senderId: "1", receiverId: "2", name: "Jody Sauer Sr.", avatar: "../../../images/avatars/img (1).png", id: "14", status: "Online" }];

// به‌روزرسانی `lastText` در `ChatList` با مقدار واقعی آخرین پیام
const updatedChatList: ChatItem[] = chatList.map(chat => {
  const lastMessageData = lastMessages.find(msg => msg.chatId === chat.id) ?? { lastMessage: "No messages here yet..." };

  return {
    ...chat,
    lastText: lastMessageData.lastMessage
  };
});

export default updatedChatList;
