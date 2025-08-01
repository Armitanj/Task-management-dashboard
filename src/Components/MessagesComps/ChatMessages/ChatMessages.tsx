import { useEffect, useState } from 'react';
import { LuSend } from "react-icons/lu";
import { ArrowLeft } from 'lucide-react';
import { getChatMessages } from '../../../Api/ChatMessages';
import { FaCircle } from "react-icons/fa";


interface Chat {
    lastText: string;
    name: string;
    avatar: string;
    id: string;
    status: string;
    senderId: string;
    receiverId: string;
}
interface Message {
    senderId: string;
    receiverId: string;
    text: string;
}

interface Props {
    selectedChat: Chat | null;
    onBack: () => void;
}


export default function ChatMessages({ selectedChat, onBack }: Props): JSX.Element {

    const [messages, setMessages] = useState<{ [chatId: string]: Message[] }>({});
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (selectedChat && !messages[selectedChat.id]) {
            const initialMessages = getChatMessages(selectedChat.id as "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8");
            setMessages(prev => ({
                ...prev,
                [selectedChat.id]: initialMessages
            }));
        }
    }, [selectedChat]);

    if (!selectedChat) {
        return <p className="text-gray-900 hidden sm:block bg-gray-200 w-fit px-4! py-1! rounded-2xl mt-64! ms-73!">Select a chat to start messaging</p>;
    }

    const chatMessages = messages[selectedChat.id] || [];

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const newMsg: Message = {
            senderId: "1",
            receiverId: selectedChat.id,
            text: newMessage,
        };

        setMessages(prev => ({
            ...prev,
            [selectedChat.id]: [...(prev[selectedChat.id] || []), newMsg],
        }));

        setNewMessage("");
    };

    return (
        <>
            {selectedChat && (
                <div>
                    {/* هدر چت */}
                    <div className="flex items-center gap-4 bg-white p-4!">
                        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <img src={selectedChat.avatar} alt="" className="w-14 h-14 rounded-full" />
                        <div>
                            <p className="text-lg font-semibold mb-1!">{selectedChat.name}</p>
                            <p className="text-gray-500 text-sm ">
                                {selectedChat.status == "Online" ?
                                    (<div className='flex gap-3 items-center'><FaCircle className='text-green-400 text-xs!' />
                                     {selectedChat.status}</div>) : <span className='text-gray-500'>Last Seen Recently</span>}

                            </p>
                        </div>
                    </div>

                    {/* بدنه چت */}
                    <div className="mt-4 ">
                        <div className=' h-[65vh]! overflow-y-scroll'>


                            <div className="flex flex-col gap-2 p-5!">
                                {chatMessages.map((chat, index) => (
                                    <div key={index} className={`flex ${chat.senderId === '1' ? 'justify-end' : 'justify-start'}`}>
                                        <p
                                            className={`px-5! py-3! rounded-2xl   ${chat.senderId === '1'
                                                ? 'bg-white text-black'
                                                : 'bg-[#546FFF] text-white'
                                                }`}
                                        >
                                            {chat.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className='h-14 bg-white flex gap-6 px-5! mt-2!'>
                            <input type="text" placeholder='Message' className='w-full ps-4! text-lg focus:outline-0' value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)} />
                            <button className='bg-[#546FFF] hover:bg-[#546effd9] transition cursor-pointer rounded-2xl px-4! text-center my-1! text-white text-lg' onClick={handleSendMessage}><LuSend /></button>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}

