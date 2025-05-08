import React, { useEffect, useState } from 'react'
import MenubarMobile from '../../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import { getTasks } from '../../../Api/TaskList'
import Menubar from '../../Menubar/Menubar';
import Navbar from '../../DashboardComps/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { CategoryRounded, SearchOutlined, Sort } from '@mui/icons-material';
import { MdTune } from 'react-icons/md';
import { Link } from 'react-router-dom';


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
console.log('filteredTasks', filteredTasks(tasks));


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
              <Navbar title="Detail Task" subTitle="" onToggleMenu={toggleMenu} />
            </StyledEngineProvider>
            <br />


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
              <p className='my-4! '>Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.</p>
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
                <input type="file" placeholder=''/>
              </div>
                <span className='text-gray-600 text-sm'>*drag or browser from device</span>
              <Link to='/'>
                <button className='bg-[#546FFF] w-full mt-14! rounded-xl p-3! text-white font-semibold hover:bg-[#546effdf] cursor-pointer transition delay-75 ease-in-out'>Submit</button>
              </Link>
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


export default TaskDetail;