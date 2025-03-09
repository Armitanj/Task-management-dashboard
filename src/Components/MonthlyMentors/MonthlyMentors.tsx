import React, { useEffect, useState } from 'react';
import { getMentors } from '../../Api/MentorsList';
import { Avatar, Card } from "@mui/material";
import { Star, ClipboardCheck } from "lucide-react";
import './MonthlyMentors.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SwiperCore from 'swiper';

type Mentors = {
  id: number;
  name: string;
  job: string;
  profilePic: string;
  tasksCompleted: number;
  rating: number;
  reviews: number;
};

function MonthlyMentors(): JSX.Element {
  const [mentors, setMentors] = useState<Mentors[]>([]);
  const [swiper, setSwiper] = useState<SwiperCore>();

  useEffect(() => {
    getMentors().then((data) => setMentors(data as Mentors[]));
  }, []);

  return (
    <div className="p-6! w-120 sm:w-[800px] items-center">
      <div className='flex justify-between items-baseline w-[100%] sm:w-auto '>
        <h2 className="text-2xl font-semibold mb-8!">Monthly Mentors</h2>
        <div className='flex gap-4'>
          <button onClick={() => swiper?.slidePrev()}>
            <ArrowBackIosRoundedIcon className='cursor-pointer' />
          </button>
          <button onClick={() => swiper?.slideNext()}>
            <ArrowForwardIosRoundedIcon className='cursor-pointer' />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        draggable={true}
        onSwiper={setSwiper}
        breakpoints={{
          0: {
            slidesPerView: 1!,
          },
          640: {
            slidesPerView: 1!,
          },
          768: {
            slidesPerView: 2!,
          }
        }}
      >
        {mentors.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <Card className="p-5! w-[90] sm:w-[350px] my-2! flex items-center gap-4 shadow-xl rounded-2xl! bg-white">
              <Avatar className="w-17! h-17!">
                <img src={mentor.profilePic} alt={mentor.name} className="rounded-full" />
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{mentor.name}</h3>
                <p className="text-gray-500">{mentor.job}</p>
                <div className='flex items-center gap-5 mt-2!'>
                  <div className="flex items-center text-sm mt-2">
                    <ClipboardCheck className="w-4 h-4 text-emerald-500 mr-2!" />
                    <span>{mentor.tasksCompleted} Task</span>
                  </div>
                  <div className="flex flew-row items-center! text-sm">
                    <Star className="w-4 h-4 text-yellow-600 mr-2!"></Star>
                    <span>{mentor.rating} ({mentor.reviews} Reviews)</span>
                  </div>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MonthlyMentors;