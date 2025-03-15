import React, { useEffect, useState } from 'react'
import { getTasks } from '../../../Api/TaskList';
import { Avatar, AvatarGroup, Card } from '@mui/material';
import { HiOutlineClock } from 'react-icons/hi';
import { SlOptions } from "react-icons/sl";
import './TodayTask.css'

interface TodayTask {
    id: number;
    title: string;
    description: string;
    image: string;
    progress: number;
    time: string;
    participants: [{ name: string; avatar: string; }];
    isToday: boolean;
}
export default function TodayTask(): JSX.Element {
    const [todayTask, setTodayTask] = useState<TodayTask[]>([]);

    useEffect(() => {
        getTasks().then((data) => { setTodayTask(data as TodayTask[]) })
    })
    return (
        <div className='p-6! '>
            <Card className='h-auto rounded-2xl! p-8! bg-[#F5F5F7] shadow-2xl mb-3!'>
                {todayTask.filter(task => task.isToday === true).map((task) => (
                    <div key={task.id}>
                        <div className='flex items-baseline justify-between'>
                            <div className='text-lg font-semibold mb-6!'>Today Task</div>
                            <SlOptions className='cursor-pointer' />
                        </div>
                        <img src={task.image} />
                        <div className='py-3!'>
                            <h3 className="text-lg font-semibold">{task.title}</h3>
                            <p className="text-gray-500 w-70">{task.description}</p>
                        </div>
                        <div className='flex justify-between pb-5!'>
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

                        <div className='flex justify-between mt-7! items-center'>
                            <div className='text-lg font-semibold my-6! '>Detail Task</div>
                            <span className='text-gray-500 text-sm'>{task.description}</span>
                        </div>
                    </div>
                ))}
                <div className='flex items-center gap-3 text-[15px] mt-1!'><div className='taskDetailsSpan'>1</div><p>Understanding the tools in Figma</p></div>
                <div className='flex items-center gap-3 text-[15px] my-5!'><div className='taskDetailsSpan'>2</div><p>Understand the basics of making designs</p></div>
                <div className='flex items-center gap-3 text-[15px]'><div className='taskDetailsSpan'>3</div><p>Design a mobile application with figma</p></div>
                <button className='bg-[#546FFF] w-full mt-12! rounded-xl p-3! text-white font-semibold hover:bg-[#546effdf] cursor-pointer transition delay-75 ease-in-out'>Go To Detail</button>
            </Card>
        </div>
    )
}
