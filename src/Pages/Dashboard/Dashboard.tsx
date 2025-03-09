import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Menubar from '../../Components/Menubar/Menubar'
import RightSide from '../../Components/RightSide/RightSide'
import { StyledEngineProvider } from '@mui/material/styles'
import './Dashboard.css'
import RunningTask from '../../Components/RunningTask/RunningTask'
import Chart from '../../Components/Chart/Chart'
import MonthlyMentors from '../../Components/MonthlyMentors/MonthlyMentors'
import UpcomingTask from '../../Components/UpcomingTask/UpcomingTask'

export default function Dashboard(): JSX.Element {
    return (
        <div className='dashComponent flex justify-between flex-col sm:flex-row items-center sm:items-start'>
            <div className='hidden sm:block'>
                <Menubar />
            </div>
            <div className=''>
                <StyledEngineProvider injectFirst>
                    <Navbar title="Hi, Skylar Dias" subTitle="Let's finish your task today!" />
                </StyledEngineProvider>
                <br />
                <br />
                <div className='flex gap-7 sm:gap-0 sm:justify-evenly flex-col sm:flex-row items-center'>
                    <RunningTask runningTasks={65} totalTasks={100} />
                    <Chart title="Activity" />
                </div>
                <div className='mt-6!'>
                    <MonthlyMentors />

                </div>
                <div className=''>
                    <UpcomingTask />
                </div>
            </div>
            <div className=''>
                <RightSide />
            </div>
        </div>
    )
}
