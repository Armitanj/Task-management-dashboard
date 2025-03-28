import React, { useEffect, useState } from 'react'
import './Task.css'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import TimeLimitTask from '../../Components/TaskComps/TimeLimitTask/TimeLimitTask'
import NewTask from '../../Components/TaskComps/NewTask/NewTask'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import { CategoryRounded, SearchOutlined, Sort } from '@mui/icons-material'
import { MdTune } from "react-icons/md";
import { getTasks } from '../../Api/TaskList'

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



const Task: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [search, setSearch] = useState<string>("");

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    getTasks().then((data) => setTasks(data as Tasks[]))
  }, [])

  const filteredTasks = (tasks: Tasks[]) => {
    return tasks.filter((task) => task.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }



  return (
    <>
      <div className='flex flex-row bg-[#F7FAFC]'>

        {/* Menu bar */}
        <div className='hidden sm:block'>
          <Menubar />
        </div>

        <div className='w-full sm:min-w-[252px] '>

          {/* Col of nav and search bar ↓ */}
          <div className='flex flex-col bg-white'>

            {/* Nav bar */}
            <StyledEngineProvider injectFirst>
              <Navbar title="Explore Task" subTitle="" onToggleMenu={toggleMenu} />
            </StyledEngineProvider>
            <br />

            {/* Title */}
            <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2!'>
              <h1 className=' text-[24px]'>Explore Task</h1>
            </div>

            {/* search bar */}
            <div className='flex justify-between justify-self-center w-[90%] ms-5! sm:ms-15! mt-5! ms:mt-auto pb-10!'>

              <div className="relative mt-4 w-full lg:w-[45%]">
                <SearchOutlined className="absolute right-4 top-2.5 text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Search Task"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-5! pr-4 py-2! border border-gray-300 rounded-lg focus:outline-none text-lg"
                />
              </div>
              <div className='hidden lg:block'>
                <div className="flex gap-4 mt-4 ">
                  <button className="flex items-center gap-2 bg-white border border-gray-300 px-5! py-2! rounded-lg hover:bg-gray-100 transition ">
                    <CategoryRounded className="text-xl" /> Category
                  </button>
                  <button className="flex items-center gap-2 bg-white border border-gray-300 px-5! py-2! rounded-lg hover:bg-gray-100 transition ">
                    <Sort className="text-xl" /> Sort By: Deadline
                  </button>
                </div>
              </div>
              <div className='lg:hidden flex items-center bg-white border border-gray-300 ms-4! px-5! py-2! rounded-lg hover:bg-gray-100 transition'>
                <MdTune className="text-xl" />
              </div>
            </div>
            {/* End of search bar */}
          </div>

          <div className='flex flex-col w-full!'>
          <div>
            <TimeLimitTask filteredTask={filteredTasks(tasks.filter((task) => task.isTimeLimit))} />
          </div>
          <div className=''>
            <NewTask filteredTask={filteredTasks(tasks.filter((task) => task.isTimeLimit))} />
          </div>
          </div>

        </div>


 </div>


        <MenubarMobile
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
     
    </>

  )
}

export default Task;