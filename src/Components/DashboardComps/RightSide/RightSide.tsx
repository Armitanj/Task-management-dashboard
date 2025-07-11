import Calendar from '../Calendar/Calendar';
import TodayTask from '../TodayTask/TodayTask';



export default function RightSide() {
  return (

    <div className='!w-[100%] sm:w-[436px] h-[100%] bg-[#F5F5F7] '>

      <Calendar />
      <div className=''>
        <TodayTask />
      </div>
    </div>

  )
}
