import { useMemo, useState, useEffect } from 'react';
import ChatList from '../../../Api/ChatList';
import { SearchOutlined } from '@mui/icons-material';
// import { CircularProgress } from '@mui/material';

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
    setSelectedChat: (chat: Chat) => void;
}

export default function GeneralMessages({ setSelectedChat }: Props): JSX.Element {
    const [search, setSearch] = useState<string>("");
    // const [loading, setLoading] = useState<boolean>(true);
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            const loadedChats = ChatList.map(chat => ({
                ...chat,
                lastText: chat.lastText ?? "No messages here yet..."
            }));
            setChats(loadedChats);
            // setLoading(false);
        });
    }, []);

    const filteredChats = useMemo(() => {
        return chats.filter((chat) =>
            chat.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, chats]);

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center h-[73vh]">
    //            <CircularProgress />
    //         </div>
    //     );
    // }

    return (
        <>
            {/* search bar */}
            <div className='flex justify-between justify-self-center w-[90%]  mt-7! pb-5!'>

                <div className="relative mt-4 w-screen">
                    <SearchOutlined className="absolute right-4 top-2.5 text-gray-500 text-xl" />
                    <input
                        type="text"
                        placeholder="Search Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-5! pr-4 py-2! border border-gray-300 rounded-lg focus:outline-none text-lg"
                    />
                </div>

            </div>
            {/* End of search bar */}
            <div className='flex'>
                <div className={`overflow-y-scroll h-[73vh] !w-full`}>
                    {filteredChats.map((chat) => (
                        <div key={chat.id} className='flex flex-row gap-5 hover:bg-[#FAFAFA] transition m-4! p-5! rounded-lg cursor-pointer'
                            onClick={() => setSelectedChat(chat)}>
                            <div>
                                <img src={chat.avatar} alt='img' className='w-[56px]' />
                            </div>
                            <div>
                                <p>{chat.name}</p>
                                <p className='text-[#8e92bc7c]'>{chat.lastText}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}
