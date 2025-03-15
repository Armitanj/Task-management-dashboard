import React, { useState } from 'react'
import './Task.css'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import TimeLimitTask from '../../Components/TaskComps/TimeLimitTask/TimeLimitTask'
import NewTask from '../../Components/TaskComps/NewTask/NewTask'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'


export default function Task(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  return (
    <>
      <div className='flex justify-between '>
        <div className='hidden sm:block'>
          <Menubar />
        </div>
        <div className='w-full sm:w-[80%]'>
          <StyledEngineProvider injectFirst>
            <Navbar title="Explore Task" subTitle="" onToggleMenu={toggleMenu} />
          </StyledEngineProvider>
          <br />
          <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2!'>
            <h1 className=' text-[24px]'>Explore Task</h1>
          </div>

          {/* search bar */}


          <div className=''>
            <TimeLimitTask />
          </div>
          <div className=''>
            <NewTask />
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
