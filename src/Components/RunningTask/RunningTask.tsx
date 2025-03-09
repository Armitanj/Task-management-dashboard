import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import './RunningTask.css'

// Define an interface for the props
interface RunningTaskProps {
  runningTasks: number;
  totalTasks: number;
}

export default function RunningTask({ runningTasks, totalTasks }: RunningTaskProps) {
  const progress = (runningTasks / totalTasks) * 100;

  return (
    <div className='RunningTaskComp bg-[#141522] w-[90%] sm:w-[194px] h-[124px] sm:h-[214px] rounded-2xl text-white flex flex-row sm:flex-col justify-around sm:justify-evenly pl-6!'>
      <div className='flex flex-col sm:flex-col gap-6 sm:gap-7 justify-center'>
        <h4>Running Task</h4>
        <span className='text-3xl'>{runningTasks}</span>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='flex'>
          <Box sx={{ width: 70, height: 70, border: '3px solid rgba(213, 213, 213, 0.355)', borderRadius: '50%', display: 'flex' }} alignItems='center' justifyContent='center'>
            <Typography className='typography'>{progress.toFixed(0)}%</Typography>
          </Box>
          <CircularProgress value={progress} variant='determinate' thickness={2} size={70} sx={{ marginLeft: '-4.4rem' }} />
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl'>{totalTasks}</span>
          <span className='text-[#8E92BC] text-sm'>Task</span>
        </div>
      </div>
    </div>
  )
}
