import React from 'react'
import './Message.css'
import Menubar from '../../Components/Menubar/Menubar'
import Navbar from '../../Components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import RightSide from '../../Components/RightSide/RightSide'

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
        <RightSide content="Right Side Content" />
      </div>
    </div>
  )
}
