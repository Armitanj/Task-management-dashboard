import React, { useState } from 'react'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import './Mentor.css'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import RecentMentors from '../../Components/MentorsComps/RecentMentors/RecentMentors'
import AllMentors from '../../Components/MentorsComps/AllMentors/AllMentors'

export default function Mentor(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  return (
    <>
      <div className='flex justify-between'>
        <div className='hidden sm:block'>
          <Menubar />
        </div>
        <div className='w-full sm:w-[80%]'>
          <StyledEngineProvider injectFirst>
            <Navbar title="Explore Mentors" subTitle="" onToggleMenu={toggleMenu} />
          </StyledEngineProvider>
          <br />
          <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2!'>
            <h1 className=' text-[24px]'>Explore Mentors</h1>
          </div>

          {/* search bar */}


          <div className=''>
            <RecentMentors />
          </div>
          <div className=''>
            <AllMentors />
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
