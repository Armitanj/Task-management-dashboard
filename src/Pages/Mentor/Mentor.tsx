import React, { useEffect, useState } from 'react'
import Menubar from '../../Components/DashboardComps/Menubar/Menubar'
import Navbar from '../../Components/DashboardComps/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import './Mentor.css'
import MenubarMobile from '../../Components/DashboardComps/MenubarMobile/MenubarMobile'
import RecentMentors from '../../Components/MentorsComps/RecentMentors/RecentMentors'
import AllMentors from '../../Components/MentorsComps/AllMentors/AllMentors'
import { CategoryRounded, SearchOutlined, Sort } from '@mui/icons-material'
import { MdTune } from "react-icons/md";
import { getMentors } from '../../Api/MentorsList'

type Mentors = {
  id: number;
  name: string;
  job: string;
  profilePic: string;
  tasksCompleted: number;
  rating: number;
  reviews: number;
  isRecent?: boolean;
};

export default function Mentor(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mentors, setMentors] = useState<Mentors[]>([]);  
  const [search, setSearch] = useState('');

  const toggleMenu = () => setMenuOpen(prev => !prev);
  
  
      useEffect(() => {
        getMentors().then((data) => setMentors(data as Mentors[]));
      }, []);
  
    const filteredTasks = mentors.filter(mentor =>
      mentor.name.toLowerCase().includes(search.toLowerCase())
    );
  

  return (
    <>
      <div className='flex justify-between'>
        <div className='hidden sm:block'>
          <Menubar />
        </div>
        <div className='w-full sm:w-[80%]'>
          <StyledEngineProvider injectFirst>
            <Navbar title="Explore Mentors" subTitle="" onToggleMenu={toggleMenu} />
          </StyledEngineProvider>
          <br />
          <div className='flex-col gap-2 block sm:hidden font-[poppins-medium] mx-6! mt-2!'>
            <h1 className=' text-[24px]'>Explore Mentors</h1>
          </div>

           {/* search bar */}
                    <div className='flex justify-between justify-self-center w-[90%] ms-4! mt-4! ms:mt-auto'>
          
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


          <div className=''>
            <RecentMentors />
          </div>
          <div className=''>
            <AllMentors />
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
