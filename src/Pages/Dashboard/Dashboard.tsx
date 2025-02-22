import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Menubar from '../../Components/Menubar/Menubar'
import RightSide from '../../Components/RightSide/RightSide'
import { StyledEngineProvider } from '@mui/material/styles'
import './Dashboard.css'
import RunningTask from '../../Components/RunningTask/RunningTask'
import Chart from '../../Components/Chart/Chart'
import MonthlyMentors from '../../Components/MonthlyMentors/MonthlyMentors'

export default function Dashboard(): JSX.Element {
    return (
        <div className='dashComponent flex justify-between'>
            <div className=''>
                <Menubar />
            </div>
            <div className=''>
                <StyledEngineProvider injectFirst>
                    <Navbar title="Hi, Skylar Dias" subTitle="Let's finish your task today!" />
                </StyledEngineProvider>
                <br />
                <br />
                <div className='flex justify-between'>
                    <RunningTask runningTasks={5} totalTasks={10} />
                    <Chart title="Weekly Progress" data={[10, 20, 30, 40, 50, 60, 70]} />
                </div>
                <div className='mt-10!'>
                    <MonthlyMentors />
                </div>
            </div>
            <div className=''>
                <RightSide />
            </div>
        </div>
    )
}
