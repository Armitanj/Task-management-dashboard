import React, { useEffect, useState } from 'react'
import { getTasks } from '../../../Api/TaskList'
import { Avatar, AvatarGroup, Card, Typography } from '@mui/material';
import { HiOutlineClock } from 'react-icons/hi';
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SwiperCore from 'swiper';
import CustomizedDialogs from '../../Modal/Modal';

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

    const [selectedTask, setSelectedTask] = useState<Tasks | null>(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = (task: Tasks) => {
        setSelectedTask(task);
        setOpenDialog(true);
        console.log("کلیک شد روی:", task.title);
        console.log("selectedTask", selectedTask); //یکی دیر اجرا میشه

    };

    const handleCloseDialog = () => {
        setSelectedTask(null);
        setOpenDialog(false);
    };


    useEffect(() => {
        getTasks().then((data) => setTasks(data as Tasks[]));
    }, [])

    console.log("Tasks time limit:", tasks);


    return (
        <>
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
                        {filteredTask.map((task) => (
                            <SwiperSlide key={task.id} className='w-full sm:w-[330px]!'>
                                <Card className=' rounded-2xl! p-8! bg-white shadow-2xl my-2! cursor-pointer' onClick={() => handleOpenDialog(task)}>
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
            {selectedTask && (
                <CustomizedDialogs
                    dialogTitle={selectedTask.title}
                    open={openDialog}
                    setOpen={setOpenDialog}
                    onClose={handleCloseDialog}
                    fullWidth
                    maxWidth="md"
                >
                    <div>
                        <img src={selectedTask.image} alt="task" className="w-full rounded-lg mb-4" />
                        <Typography gutterBottom>{selectedTask.description}</Typography>
                        <div className="flex justify-between pb-3">
                            <span className="font-medium">Progress</span>
                            <span className="font-medium">{selectedTask.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${selectedTask.progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex items-center gap-3">
                                <HiOutlineClock className="text-2xl" />
                                <span>{selectedTask.time}</span>
                            </div>
                            <AvatarGroup spacing="medium">
                                {selectedTask.participants.map((p, i) => (
                                    <Avatar key={i} sx={{ width: 24, height: 24 }} alt={p.name} src={p.avatar} />
                                ))}
                            </AvatarGroup>
                        </div>
                    </div>
                </CustomizedDialogs>
            )}
        </>


    )
}


export default TimeLimitTask;