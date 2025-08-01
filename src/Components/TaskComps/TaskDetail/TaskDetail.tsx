import React, { useEffect, useState } from 'react'
import MenubarMobile from '../../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import { getTasks } from '../../../Api/TaskList'
import Menubar from '../../Menubar/Menubar';
import Navbar from '../../DashboardComps/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../../Searchbar/Search';

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

const TaskDetail: React.FC = () => {
  const [_tasks, setTasks] = useState<Tasks[]>([])
  const [search, setSearch] = useState<string>("")
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navigate = useNavigate(); // برای دکمه Back

  useEffect(() => {
    getTasks().then((data) => setTasks(data as Tasks[]))
  }, [])

  // const filteredTasks = tasks.filter((task) =>
  //   task.title.toLowerCase().includes(search.toLowerCase())
  // )

  return (
    <>
      {/* ✅ Desktop content */}
      <div className="hidden md:flex flex-row bg-[#F7FAFC]">
        {/* Menu bar */}
        <div className='hidden sm:block'>
          <Menubar />
        </div>

        <div className='w-full sm:min-w-[252px] '>
          {/* Col of nav and search bar ↓ */}
          <div className='flex flex-col bg-white'>
            {/* Nav bar */}
            <StyledEngineProvider injectFirst>
              <Navbar title="Detail Task" subTitle="" onToggleMenu={toggleMenu} />
            </StyledEngineProvider>
            <br />

            {/* search bar */}
            <Search search={search} setSearch={setSearch} />
            {/* End of search bar */}
          </div>

          <div className='flex p-6! gap-5'>
            <div className='bg-white rounded-xl w-[70%]'>
              <img src="/images/detailTask/detailTask.png" alt="img" className='w-full' />
              <h1 className='text-3xl font-semibold mt-3!'>Creating Awesome Mobile Apps</h1>
              <div className='flex gap-4 my-4!'>
                <p className='text-gray-600'>UI UX Design . Apps Design</p><span className='text-blue-400 cursor-pointer hover:text-blue-300 transition-all'>+ Get Mentors</span>
              </div>
              <div className='flex gap-4 mb-4!'>
                <h5>200 Students Involved</h5><h6>1 Hour</h6>
              </div>

              <h3 className='text-2xl font-semibold'>Description</h3>
              <p className='my-4! '>Follow the video tutorial above. Understand how to use each tool in the Figma application...</p>

              <h3 className='text-2xl font-semibold'>Essence of Assessment</h3>
              <div className='flex flex-col gap-4 my-4!'>
                <p>Understanding the tools in Figma</p>
                <p>Understand the basics of making designs</p>
                <p>Designing a mobile application using figma</p>
                <p>Presenting the design flow</p>
              </div>
            </div>
            <div className='bg-white rounded-xl w-[30%] p-5!'>
              <h5 className='font-semibold mt-2!'>Assigned Assignments</h5>
              <h3 className='text-2xl font-semibold my-4!'>Creating Awesome Mobile Apps</h3>
              <p className='text-gray-600'>UI UX Design . Apps Design</p>
              <h3 className='text-xl font-semibold my-5!'>Detail Student</h3>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                  <p className="text-gray-600">Student's class</p>
                  <p className="text-gray-600">Student Class</p>
                  <p className="text-gray-600">Student Number</p>
                </div>
                <div className='flex flex-col gap-3 text-end'>
                  <p>Skylar Dias</p>
                  <p>MIPA 2</p>
                  <p>10</p>
                </div>
              </div>
              <h3 className='text-xl font-semibold my-5!'>File Task</h3>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                  <p className="text-gray-600">Last Modified</p>
                  <p className="text-gray-600">File submissions</p>
                </div>
                <div className=''>
                  <p>1 July 2022</p>
                </div>
              </div>
              <div className='w-full h-40 border border-dashed mt-7! mb-3! rounded-xl p-4! border-blue-500'>
                <input type="file" placeholder='' />
              </div>
              <span className='text-gray-600 text-sm'>*drag or browser from device</span>
              <Link to='/'>
                <button className='bg-[#546FFF] w-full mt-14! rounded-xl p-3! text-white font-semibold hover:bg-[#546effdf] cursor-pointer transition delay-75 ease-in-out'>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile under construction */}
      <div className="flex md:hidden flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center  !px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">🚧 Under Construction 🚧</h1>
          <p className="text-base text-gray-600 mb-6">
            This page is not available on mobile yet. Please open it on a desktop device.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="!px-3 !py-1 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition !mt-3 cursor-pointer"
          >
            ← Go Back
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MenubarMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default TaskDetail;
