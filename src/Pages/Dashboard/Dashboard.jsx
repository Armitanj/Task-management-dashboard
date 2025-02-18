import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Menubar from '../../Components/Menubar/Menubar.jsx'
import RightSide from '../../Components/RightSide/RightSide.jsx'
import { StyledEngineProvider } from '@mui/material/styles';
import './Dashboard.css'
import RunningTask from '../../Components/RunningTask/RunningTask.jsx';
import Chart from '../../Components/Chart/Chart.jsx';




export default function Dashboard() {
    return (
        <div className='dashComponent flex  justify-between'>
            <div className=''>
                <Menubar />
            </div>
            <div className=''>
                <StyledEngineProvider injectFirst>
                    <Navbar title="Hi, Skylar Dias" subTitle="Let's finish your task today!" />
                </StyledEngineProvider>
                <br />
                <br />
                <div className='flex justify-between' >

                    <RunningTask />
                    
                    <Chart />
                </div>

            </div >
            <div className=''>
                <RightSide />
            </div>
        </div>
    )
}
