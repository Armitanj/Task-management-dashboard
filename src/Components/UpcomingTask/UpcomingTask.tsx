import React, { useEffect, useState } from 'react'
import { getTasks } from '../../Api/TaskList'
import { Avatar, AvatarGroup, Card } from '@mui/material';
import { HiOutlineClock } from 'react-icons/hi';
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SwiperCore from 'swiper';


interface Tasks {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number;
  time: string;
  timeIcon: string;
  participants: [{ name: string; avatar: string }];

}
export default function UpcomingTask(): JSX.Element {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [swiper, setSwiper] = useState<SwiperCore>();

  useEffect(() => {
    getTasks().then((data) => setTasks(data as Tasks[]));
  }, [])

  return (
    <div className='p-6! w-[800px]!'>
      <div className='flex justify-between items-baseline'>
        <h2 className='text-2xl font-semibold mb-10!'>Upcoming Task</h2>
        <div className='flex gap-4'>
          <button onClick={() => swiper?.slidePrev()}>
            <ArrowBackIosRoundedIcon className='cursor-pointer' />
          </button>
          <button onClick={() => swiper?.slideNext()}>
            <ArrowForwardIosRoundedIcon className='cursor-pointer' />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 justify-evenly'>

        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesPerView={2}
          draggable={true}
          onSwiper={setSwiper}
        >
          {tasks.map((task) => (
            <SwiperSlide key={task.id}>
              <Card className='w-[350px] rounded-2xl! p-8! bg-white shadow-2xl mb-3!'>
                <img src={task.image} />
                <div className='py-3!'>
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p className="text-gray-500 w-70">{task.description}</p>
                </div>
                <div className='flex justify-between pb-3!'>
                  <span className='font-medium'>Progress</span>
                  <span className='font-medium'>{task.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700!">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${task.progress}` + '%' }}></div>
                </div>

                <div className='flex justify-between items-center mt-5!'>



                  <div className='flex items-center gap-3'>
                    <HiOutlineClock className='text-2xl' />
                    <span>{task.time}</span>
                  </div>

                  <AvatarGroup spacing="medium">
                    {task.participants.map((participant, index) => (
                      <Avatar key={index} sx={{ width: 24, height: 24 }} alt={participant.name} src={participant.avatar} />
                    ))}
                  </AvatarGroup>
                </div>

              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



    </div>
  )
}
