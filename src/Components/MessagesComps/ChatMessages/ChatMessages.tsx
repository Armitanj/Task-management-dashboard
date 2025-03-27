import React from 'react';
import { LuSend } from "react-icons/lu";
import { ArrowLeft } from 'lucide-react';

interface Chat {
    lastText: string;
    name: string;
    avatar: string;
    id: string;
    status: string;
    senderId: string;
}

interface Props {
    selectedChat: Chat | null;
    onBack: () => void;
}

export default function ChatMessages({ selectedChat, onBack }: Props): JSX.Element {

    if (!selectedChat) {
        return <p className="text-gray-400 mt-73! justify-center hidden sm:block">...یک چت را انتخاب کنید</p>;
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
                            <p className="text-lg font-semibold">{selectedChat.name}</p>
                            <p className="text-gray-500 text-sm">{selectedChat.status}</p>
                        </div>
                    </div>

                    {/* بدنه چت */}
                    <div className="mt-4">
                        <div className=' h-[65vh]!'>
                            {selectedChat.senderId === '2' ? (
                                <div className=''>
                                    <p className=" bg-white px-6! py-4! rounded-3xl m-5! w-fit float-start">{selectedChat.lastText}</p>
                                </div>
                            ) : (
                                <div className=''>
                                    <p className="text-white bg-[#546FFF] px-6! py-4! rounded-3xl m-5! float-end">{selectedChat.lastText}</p>
                                </div>
                            )}

                        </div>
                        <div className='h-14 bg-white flex gap-6 px-5! mt-2!'>
                            <input type="text" placeholder='Message' className='w-full ps-4! text-lg focus:outline-0' />
                            <button className='bg-[#546FFF] hover:bg-[#546effd9] transition cursor-pointer rounded-2xl p-3! px-5! text-white text-xl'><LuSend /></button>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
}
