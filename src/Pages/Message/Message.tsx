import React from 'react'
import './Message.css'
import Menubar from '../../Components/Menubar/Menubar'
import Navbar from '../../Components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'

export default function Message(): JSX.Element {
  return (
    <div className='dashComponent flex justify-between'>
      <div className=''>
        <Menubar />
      </div>
      <div className=''>
        <StyledEngineProvider injectFirst>
          <Navbar title="Message" subTitle="" />
        </StyledEngineProvider>
      </div>
      <div className=''>
      </div>
    </div>
  )
}
