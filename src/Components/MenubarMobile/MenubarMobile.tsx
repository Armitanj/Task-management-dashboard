import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { TbUserHexagon } from "react-icons/tb";
import { TbMessageDots } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import './MenubarMobile.css';

interface MenubarMobileProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MenubarMobile({ isOpen, onClose }: MenubarMobileProps) {

    const location = useLocation(); // گرفتن مسیر فعلی
    const [activePath, setActivePath] = React.useState<string>(location.pathname); // مسیر فعال

    return (
        <>
            {/* منوی کشویی */}
            <div
                className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                {/* محتوای منو (لینک‌ها، لوگو و غیره) */}
                <div className='MenuComp'>
                    <div className="flex items-center justify-center gap-4">
                        <img src="../../images/Vector.png" alt="logo" />
                        <h1 className='text-3xl font-[poppins-semiBold]'>Nuegas</h1>
                    </div>
                    <ul className='menuUl flex flex-col justify-between gap-6 font-[poppins-medium]'>
                        <Link to="/" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/" ? "active" : ""}`} onClick={() => setActivePath("/")}>
                            <li className='flex justify-center items-center gap-3'><HiOutlineViewGrid className='text-2xl' />  Overview</li>
                        </Link>
                        <Link to="/task" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/task" ? "active" : ""}`} onClick={() => setActivePath("/")}>
                            <li className='flex justify-center items-center gap-3'><IoMdBook className='text-2xl' />  Task</li>
                        </Link>
                        <Link to="/mentor" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/mentor" ? "active" : ""}`} onClick={() => setActivePath("/")}>
                            <li className='flex justify-center items-center gap-3'><TbUserHexagon className='text-2xl' />  Mentors</li>
                        </Link>
                        <Link to="/message" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/message" ? "active" : ""}`} onClick={() => setActivePath("/")}>
                            <li className='flex justify-center items-center gap-3'><TbMessageDots className='text-2xl' />  Message</li>
                        </Link>
                        <Link to="/setting" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/setting" ? "active" : ""}`} onClick={() => setActivePath("/")}>
                            <li className='flex justify-center items-center gap-3'><IoSettingsOutline className='text-2xl' />  Settings</li>
                        </Link>

                    </ul>
                </div>
            </div>

            {/* لایه‌ی تیره در پس‌زمینه برای وقتی که منو باز است */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50! z-40"
                    onClick={onClose}
                />
            )}
        </>
    );
}
