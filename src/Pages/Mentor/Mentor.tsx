import React from 'react'
import Menubar from '../../Components/Menubar/Menubar'
import Navbar from '../../Components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'

import './Mentor.css'

export default function Mentor(): JSX.Element {
  return (
    <div className='dashComponent flex justify-between'>
      <div className=''>
        <Menubar />
      </div>
      <div className=''>
        <StyledEngineProvider injectFirst>
          <Navbar title="Explore Mentors" subTitle="" />
        </StyledEngineProvider>
      </div>
      <div className=''>
      </div>
    </div>
  )
}
