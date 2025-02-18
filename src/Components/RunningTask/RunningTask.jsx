import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import './RunningTask.css'

export default function RunningTask() {
    return (
        <div className='RunningTaskComp bg-[#141522] w-[194px] h-[214px] rounded-2xl text-white flex flex-col justify-evenly'>
            <h4>Running Task</h4>
            <span className='text-3xl'>65</span>
            <div className='flex gap-5  items-center'>
                <div className='flex '>


                    <Box sx={{ width: 70, height: 70, border: '3px solid rgba(213, 213, 213, 0.355)', borderRadius: '50%', display: 'flex' }} alignItems='center' justifyContent='center'><Typography className='font-[poppins-light]'>45%</Typography></Box>

                    <CircularProgress value={45} variant='determinate' thickness={2} size={70} sx={{ marginLeft: '-4.4rem'}} />
                </div>
            

                <div className='flex flex-col'>
                    <span className='text-2xl'>100</span>
                    <span className='text-[#8E92BC] text-sm'>Task</span>
                </div>
            </div>
        </div>
    )
}
