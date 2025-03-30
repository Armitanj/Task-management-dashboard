import React from 'react';
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

interface Props {
    selectedChat: Chat | null;
    onBack: () => void;
}


export default function ChatMessages({ selectedChat, onBack }: Props): JSX.Element {

    const allMessages = selectedChat ? getChatMessages(selectedChat.id as "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8") : [];

    if (!selectedChat) {
        return <p className="text-gray-900 hidden sm:block bg-gray-200 w-fit px-4! py-1! rounded-2xl mt-64! ms-73!">Select a chat to start messaging</p>;
    }

    return (
        <>
            {selectedChat && (
                <div>
                    {/* هدر چت */}
                    <div className="headerChat flex items-center gap-4 bg-white p-4!">
                        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <img src={selectedChat.avatar} alt="" className="w-14 h-14 rounded-full" />
                        <div>
                            <p className="text-lg font-semibold mb-1!">{selectedChat.name}</p>
                            <p className="text-gray-500 text-sm ">
                                {selectedChat.status == "Online" ?
                                (<div className='flex gap-3 items-center'><FaCircle className='text-green-400 text-xs!'/> {selectedChat.status}</div>) : <span className='text-gray-500'>Last Seen Recently</span>}

                            </p>
                        </div>
                    </div>

                    {/* بدنه چت */}
                    <div className="mt-4 ">
                        <div className=' h-[65vh]!'>


                            <div className="flex flex-col gap-2 p-5!">
                                {allMessages.map((chat, index) => (
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
                            <input type="text" placeholder='Message' className='w-full ps-4! text-lg focus:outline-0' />
                            <button className='bg-[#546FFF] hover:bg-[#546effd9] transition cursor-pointer rounded-2xl px-4! text-center my-1! text-white text-lg'><LuSend /></button>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}
