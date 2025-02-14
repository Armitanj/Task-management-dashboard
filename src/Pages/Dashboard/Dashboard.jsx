import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Menubar from '../../Components/Menubar/Menubar.jsx'
import RightSide from '../../Components/RightSide/RightSide.jsx'
import { StyledEngineProvider } from '@mui/material/styles';
import './Dashboard.css'




export default function Dashboard() {
    return (
        <div className='dashComponent flex  justify-between'>
            <div className=''>
                <Menubar />
            </div>
            <div className=''>
                <StyledEngineProvider injectFirst>
                    <Navbar title="Hi, Skylar Dias" subTitle="Let's finish your task today!"/>
                </StyledEngineProvider>

            </div >
            <div className=''>
                <RightSide />
            </div>
        </div>
    )
}
