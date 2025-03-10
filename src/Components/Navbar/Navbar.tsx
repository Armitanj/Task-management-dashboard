import React from 'react'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx"; import './Navbar.css'

interface NavbarProps {
    title: string;
    subTitle: string;
    onToggleMenu: () => void; // تابع callback برای تغییر وضعیت منو
}

export default function Navbar({ title, subTitle, onToggleMenu }: NavbarProps) {

    return (
        <div className="navComp flex justify-between items-center w-[100%]! px-10! pt-3!">
            <div>
                <div className='flex-col gap-2 hidden sm:block font-[poppins-medium]'>
                    <h1 className=' text-[24px]'>{title}</h1>
                    <span className='text-[#54577A]'>{subTitle}</span>
                </div>
                <RxHamburgerMenu onClick={onToggleMenu} className='block sm:hidden text-3xl cursor-pointer' />
            </div>

            <div className='flex items-center gap-9'>
                <Badge color='warning' variant='dot'>
                    <IoNotificationsOutline onClick={() => { console.log('Notifications clicked'); }} className='text-2xl text-[#8E92BC] cursor-pointer' />
                </Badge>
                <Avatar className='cursor-pointer'>S</Avatar>
            </div>
        </div>
    )
}
