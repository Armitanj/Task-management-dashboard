import React, { useState } from 'react'
import './Message.css'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import GeneralMessages from '../../Components/MessagesComps/GeneralMessages/GeneralMessages'
import ChatMessages from '../../Components/MessagesComps/ChatMessages/ChatMessages'



interface Chat {
  lastText: string;
  name: string;
  avatar: string;
  id: string;
  status: string;
  senderId: string;
  receiverId:string;
}


export default function Message(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <>
      <div className='flex flex-row bg-[#F7FAFC] '>

        {/* Menu bar */}
        <div className='hidden sm:block'>
          <Menubar />
        </div>

        <div className='w-full'>

          <div className='flex flex-col bg-white sm:border-s sm:border-s-[#8e92bc70]'>

            {/* Nav bar */}
            <StyledEngineProvider injectFirst>
              <Navbar title="Messages" subTitle="" onToggleMenu={toggleMenu} />
            </StyledEngineProvider>
            <br />
            {/* Title */}
            <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2!'>
              <h1 className=' text-[24px] pb-5!'>Messages</h1>
            </div>
          </div>

          <div className="flex flex-row sm:border-s sm:border-s-[#8e92bc70] border-t border-t-[#8e92bc70]">
            <div className={`w-full sm:w-[352px] bg-white sm:border-e sm:border-e-[#8e92bc70] ${selectedChat ? 'hidden sm:block' : 'block'}`}>    
              <GeneralMessages setSelectedChat={setSelectedChat}/>
            </div>

            <div className="w-full">  
              <ChatMessages selectedChat={selectedChat} onBack={() => setSelectedChat(null)}/>
            </div>
          </div>

        </div>


      </div>


      <MenubarMobile
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

    </>
  )
}