import React, { useEffect, useState } from 'react'
import { getTasks } from '../../../Api/TaskList'
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
    isToday: boolean;
    isTimeLimit: boolean;
    isNew: boolean;
}
const TimeLimitTask: React.FC<{ filteredTask: Tasks[] }> = ({ filteredTask }) => {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const [swiper, setSwiper] = useState<SwiperCore>();

    useEffect(() => {
        getTasks().then((data) => setTasks(data as Tasks[]));
    }, [])

    return (

        <div className='p-6! w-full'>
            <div className='flex justify-between items-baseline sm:w-auto'>
                <h2 className='text-xl sm:text-[22px] font-semibold mb-8! '>Time Limit</h2>
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
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    draggable={true}
                    onSwiper={setSwiper}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: { slidesPerView: 3.3 }
                    }}
                >
                    {filteredTask.filter(task => task.isTimeLimit === true).map((task) => (
                        <SwiperSlide key={task.id} className='w-full sm:w-[330px]!'>
                            <Card className=' rounded-2xl! p-8! bg-white shadow-2xl my-2!'>
                                <img src={task.image} />
                                <div className='py-3!'>
                                    <h3 className="text-lg font-semibold">{task.title}</h3>
                                    <p className="text-gray-500 w-72">{task.description}</p>
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


export default TimeLimitTask;