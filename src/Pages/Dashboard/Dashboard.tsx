import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Menubar from '../../Components/Menubar/Menubar'
import RightSide from '../../Components/RightSide/RightSide'
import MenubarMobile from '../../Components/MenubarMobile/MenubarMobile'; 
import { StyledEngineProvider } from '@mui/material/styles'
import './Dashboard.css'
import RunningTask from '../../Components/RunningTask/RunningTask'
import Chart from '../../Components/Chart/Chart'
import MonthlyMentors from '../../Components/MonthlyMentors/MonthlyMentors'
import UpcomingTask from '../../Components/UpcomingTask/UpcomingTask'
import './../../index.css'


export default function Dashboard(): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className='dashComponent flex justify-between flex-col sm:flex-row items-center sm:items-start'>
            <div className='hidden sm:block'>
                <Menubar />
            </div>
            <div className='w-full'>
                <StyledEngineProvider injectFirst>
                    <Navbar title="Hi, Skylar Dias" subTitle="Let's finish your task today!" onToggleMenu={toggleMenu} />
                </StyledEngineProvider>
                <br />
                <br />

                <div className='bg-[#FCFCFC] sm:bg-auto justify-center!'>


                <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6!'>
                    <h1 className=' text-[24px]'>Hi, Skylar Dias</h1>
                    <span className='text-[#54577A]'>Let's finish your task today!</span>
                </div>
                <br />
                <div className='flex gap-7 sm:gap-0 sm:justify-evenly flex-col sm:flex-row items-center '>
                    <RunningTask runningTasks={65} totalTasks={100} />
                    <Chart title="Activity" />
                </div>
                <div className=''>
                    <MonthlyMentors />

                </div>
                <div className=''>
                    <UpcomingTask />
                </div>
            </div>
            </div>
            <div className='flex justify-center'>
                <RightSide />
            </div>
            <MenubarMobile
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
        </div>
    )
}
