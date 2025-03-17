import React, { useState } from 'react'
import './Setting.css'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import { CategoryRounded, SearchOutlined, Sort } from '@mui/icons-material'
import { MdTune } from 'react-icons/md'

export default function Setting(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const [search, setSearch] = useState<string>("");


  return (
    <>
      <div className='flex flex-row bg-[#F7FAFC]'>

        {/* Menu bar */}
        <div className='hidden sm:block'>
          <Menubar />
        </div>

        <div className='w-full sm:min-w-[252px] '>

          <div className='flex flex-col bg-white'>

            {/* Nav bar */}
            <StyledEngineProvider injectFirst>
              <Navbar title="Settings" subTitle="" onToggleMenu={toggleMenu} />
            </StyledEngineProvider>
            <br />
            {/* Title */}
            <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2!'>
              <h1 className=' text-[24px]'>Settings</h1>
            </div>
          </div>

          <div className=''>

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
