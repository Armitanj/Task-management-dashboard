import React, { useEffect, useState } from 'react';
import { getMentors } from '../../../Api/MentorsList';
import { Avatar, Card, CircularProgress } from "@mui/material";
import { Star, ClipboardCheck } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



type Mentors = {
  id: number;
  name: string;
  job: string;
  description: string;
  profilePic: string;
  tasksCompleted: number;
  rating: number;
  reviews: number;
  isRecent?: boolean;
  isMain?: boolean;
};

const AllMentors: React.FC<{ filteredMentor: Mentors[] }> = ({ filteredMentor }) => {
  const [mentors, setMentors] = useState<Mentors[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMentors().then((data) => {
      setMentors(data as Mentors[])
    }).finally(
      () => setLoading(false)
    );

  }, [])

  console.log("Mentors", mentors);

  if (!loading && filteredMentor.length === 0) {
    return (
      <div className='h-full !py-12'>
        <h2 className='text-xl sm:text-[22px] font-semibold !mb-8 !pl-7'>Mentors</h2>
        <p className="text-gray-500 text-center w-full h-full !py-8">
          There is no mentor!
        </p>
      </div>
    )
  }

  return (
    <div className="!p-6" >
      <h2 className="text-xl sm:text-[22px] font-semibold !mb-8">Mentors</h2>
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <CircularProgress />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4  w-full'>
          {
            filteredMentor.filter(mentor => mentor.isMain === true).map((mentor) => (
              <Card style={{ transition: 'transform 200ms ease' }} key={mentor.id} className="!p-5 !my-2 shadow-xl !rounded-2xl bg-white transform
  hover:[transform:scale(0.97)]">
                <div className='flex items-center gap-5 justify-between'>

                  <Avatar className="!w-17 !h-17">
                    <img src={mentor.profilePic} alt={mentor.name} className="rounded-full" />
                  </Avatar>
                  <div className='flex-1'>
                    <h3 className="text-lg font-semibold">{mentor.name}</h3>
                    <p className="text-gray-500">{mentor.job}</p>

                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mt-3!">{mentor.description}</p>
                </div>
                <div className='flex items-center mt-5! justify-between'>
                  <div className="flex items-center text-sm mt-2">
                    <ClipboardCheck className="w-4 h-4 text-emerald-500 mr-2!" />
                    <span>{mentor.tasksCompleted} Task</span>
                  </div>
                  <div className="flex flew-row items-center! text-sm">
                    <Star className="w-4 h-4 text-yellow-600 mr-2!"></Star>
                    <span>{mentor.rating} ({mentor.reviews} Reviews)</span>
                  </div>

                </div>
              </Card>
            ))
          }
        </div>
      )
      }


    </div>
  );
}

export default AllMentors;