import React from 'react'
import './RightSide.css'
import Calendar from '../Calendar/Calendar';
import TodayTask from '../TodayTask/TodayTask';


export default function RightSide() {
  return (
    <>
      <div className='rightSideComp bg-[#F5F5F7]!'>

        <Calendar />
        <div className=''>
          <TodayTask />
        </div>
      </div>

    </>
  )
}
