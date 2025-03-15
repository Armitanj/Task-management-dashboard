import React, { useState } from 'react'
import './Message.css'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'

export default function Message(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  return (
    <div className='dashComponent flex justify-between'>
      <div className=''>
        <Menubar />
      </div>
      <div className=''>
        <StyledEngineProvider injectFirst>
          <Navbar title="Message" subTitle="" onToggleMenu={toggleMenu} />
        </StyledEngineProvider>
      </div>
      <div className=''>
      </div>
      <MenubarMobile
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </div>
  )
}
