import React from 'react'
import './Task.css'
import Menubar from '../../Components/Menubar/Menubar'
import Navbar from '../../Components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'

export default function Task(): JSX.Element {
  return (
    <div className='dashComponent flex justify-between'>
      <div className=''>
        <Menubar />
      </div>
      <div className=''>
        <StyledEngineProvider injectFirst>
          <Navbar title="Explore Task" subTitle="" />
        </StyledEngineProvider>
      </div>
      <div className=''>
      </div>
    </div>
  )
}
