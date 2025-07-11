import * as React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { TbUserHexagon } from "react-icons/tb";
import { TbMessageDots } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import './Menubar.css'


export default function Menubar() {

  const location = useLocation(); // گرفتن مسیر فعلی
  const [activePath, setActivePath] = React.useState<string>(location.pathname); // مسیر فعال

  React.useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className='w-[252px] h-full bg-[#fff] !p-6 '>
      <div className="flex items-center justify-center gap-4">
        <img src="../../images/Vector.png" alt="logo" />
        <h1 className='text-3xl !font-[poppins-semiBold]'>Nuegas</h1>
      </div>
      <ul className='menuUl flex flex-col justify-between gap-6 font-[poppins-medium]'>
        <Link to="/" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/" ? "active" : ""}`}>
          <li className='flex justify-center items-center gap-3'><HiOutlineViewGrid className='text-xl' />  Overview</li>
        </Link>
        <Link to="/task" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/task" ? "active" : ""}`}>
          <li className='flex justify-center items-center gap-3'><IoMdBook className='text-xl' />  Task</li>
        </Link>
        <Link to="/mentor" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/mentor" ? "active" : ""}`}>
          <li className='flex justify-center items-center gap-3'><TbUserHexagon className='text-xl' />  Mentors</li>
        </Link>
        <Link to="/message" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/message" ? "active" : ""}`}>
          <li className='flex justify-center items-center gap-3'><TbMessageDots className='text-xl' />  Message</li>
        </Link>
        <Link to="/setting" className={`item rounded-2xl flex gap-4 hover:bg-gray-100 hover:text-black transition ease-in-out ${activePath === "/setting" ? "active" : ""}`}>
          <li className='flex justify-center items-center gap-3'><IoSettingsOutline className='text-xl' />  Settings</li>
        </Link>

      </ul>
    </div>
  );
}