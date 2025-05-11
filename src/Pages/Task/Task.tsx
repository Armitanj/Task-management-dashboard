import React, { useEffect, useState } from 'react'
import './Task.css'
import Menubar from '../../Components/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import TimeLimitTask from '../../Components/TaskComps/TimeLimitTask/TimeLimitTask'
import NewTask from '../../Components/TaskComps/NewTask/NewTask'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import { getTasks } from '../../Api/TaskList'
import Search from '../../Components/Searchbar/Search'

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

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )
  

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
            <Search search={search} setSearch={setSearch} />
            {/* End of search bar */}
          </div>

          <div className='flex flex-col w-full!'>
            <div>
              <TimeLimitTask filteredTask={filteredTasks.filter((task) => task.isTimeLimit )} />
            </div>
            <div className=''>
              <NewTask filteredTask={filteredTasks.filter((task) => task.isNew)} />
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