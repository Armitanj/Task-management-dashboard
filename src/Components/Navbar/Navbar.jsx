import React from 'react'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { IoNotificationsOutline } from "react-icons/io5";
import './Navbar.css'


export default function Navbar({title, subTitle}) {

    return (
        <div className="navComp flex justify-between items-center w-[750px]">
            <div className='flex flex-col gap-2'>
                <h1 className='font-[poppins-medium] text-[24px]'>{title}</h1>
                <span className='text-[#54577A] font-[poppins-medium]'>{subTitle}</span>
            </div>
            <div className='flex items-center gap-9'>
                <Badge color='warning' variant='dot'>
                    <IoNotificationsOutline className='text-2xl text-[#8E92BC]' />
                </Badge>
                <Avatar>S</Avatar>
            </div>
        </div>
    )
}
