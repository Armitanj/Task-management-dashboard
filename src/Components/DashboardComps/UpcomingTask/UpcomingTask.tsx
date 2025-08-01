import { useEffect, useState } from 'react'
import { getTasks } from '../../../Api/TaskList'
import { Avatar, AvatarGroup, Card, CircularProgress } from '@mui/material';
import { HiOutlineClock } from 'react-icons/hi';
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SwiperCore from 'swiper';


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
}
// interface UpcomingTaskProps {
//   pageTitle: string;

// }

export default function UpcomingTask(): JSX.Element {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // شروع لودینگ
    getTasks()
      .then((data) => {
        setTasks(data as Tasks[]);
      })
      .finally(() => {
        setLoading(false); // پایان لودینگ
      });
  }, []);

  return (
    <div className='!p-6 sm:w-[850px] items-center justify-center! !-mt-4'>
      <div className='flex justify-between  items-baseline sm:w-auto'>
        <h2 className='text-xl sm:text-[22px] font-semibold !mb-6'>Upcoming Task</h2>
        <div className='flex gap-4'>
          <button onClick={() => swiper?.slidePrev()}>
            <ArrowBackIosRoundedIcon className='cursor-pointer' />
          </button>
          <button onClick={() => swiper?.slideNext()}>
            <ArrowForwardIosRoundedIcon className='cursor-pointer' />
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress size={50} color="primary" />
        </div>
      ) : (
        <div className='flex flex-wrap gap-5 justify-evenly'>
          <Swiper
            spaceBetween={15}
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
            {tasks.filter(task => task.isToday === false).map((task) => (
              <SwiperSlide key={task.id}>
                <Card style={{ transition: 'transform 200ms ease' }} className='sm:w-[350px] !rounded-2xl !p-8 bg-white shadow-2xl !my-2 transform
  hover:[transform:scale(0.97)] md:!ml-6'>
                  <img src={task.image} />
                  <div className='py-3!'>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-500 w-72">{task.description}</p>
                  </div>
                  <div className='flex justify-between pb-3!'>
                    <span className='font-medium'>Progress</span>
                    <span className='font-medium'>{task.progress}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700!">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${task.progress}` + '%' }}></div>
                  </div>

                  <div className='flex justify-between items-center mt-5!'>



                    <div className='flex items-center gap-3'>
                      <HiOutlineClock className='text-2xl' />
                      <span>{task.time}</span>
                    </div>

                    <AvatarGroup spacing="medium">
                      {task.participants.map((participant, index) => (
                        <Avatar key={index} sx={{ width: 24, height: 24 }} alt={participant.name} src={participant.avatar} />
                      ))}
                    </AvatarGroup>
                  </div>

                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

    </div>
  )
}
