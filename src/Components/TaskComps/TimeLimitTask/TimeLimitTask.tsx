import React, { useEffect, useState } from 'react';
import { getTasks } from '../../../Api/TaskList';
import {
    Avatar,
    AvatarGroup,
    Card,
    CircularProgress,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import { HiOutlineClock } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddBox } from '@mui/icons-material';
import SwiperCore from 'swiper';
import CustomModal from '../../CustomModal';
import Input from '../../Input';

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

const TimeLimitTask: React.FC<{ filteredTask: Tasks[] }> = () => {
    const [localTasks, setLocalTasks] = useState<Tasks[]>([]);
    const [loading, setLoading] = useState(true);
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [selectedTask, setSelectedTask] = useState<Tasks | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        time: '',
    });

    // 📌 منو سه نقطه
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuTaskId, setMenuTaskId] = useState<number | null>(null);
    const openMenu = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, taskId: number) => {
        setAnchorEl(event.currentTarget);
        setMenuTaskId(taskId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuTaskId(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // شرط اول: چک کنیم اینپوت‌ها خالی نباشن
        if (!formData.title.trim() || !formData.description.trim() || !formData.time.trim()) {
            alert('لطفا همه فیلدها را پر کنید!');
            return;
        }

        // شرط دوم: تایم باید فقط عدد مثبت باشه
        const timeValue = Number(formData.time);
        if (isNaN(timeValue) || timeValue <= 0) {
            alert('مدت زمان باید یک عدد مثبت باشد!');
            return;
        }

        if (selectedTask) {
            // 📝 ویرایش تسک
            const updatedTasks = localTasks.map((task) =>
                task.id === selectedTask.id
                    ? { ...task, ...formData, time: timeValue.toString() }
                    : task
            );
            setLocalTasks(updatedTasks);
            localStorage.setItem('localTasks', JSON.stringify(updatedTasks));
        } else {
            // ➕ افزودن تسک (اضافه کردن به ابتدای لیست)
            const newTask: Tasks = {
                id: Date.now(),
                title: formData.title,
                description: formData.description,
                image: '/images/taskImages/task3.png',
                progress: 0,
                time: timeValue.toString(),
                timeIcon: '/clock-icon.png',
                participants: [
                    {
                        name: 'R',
                        avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
                    },
                ],
                isToday: false,
                isTimeLimit: true,
                isNew: false,
            };

            const updatedTasks = [newTask, ...localTasks]; // 👈 تسک جدید اول لیست
            setLocalTasks(updatedTasks);
            localStorage.setItem('localTasks', JSON.stringify(updatedTasks));
        }

        setOpenModal(false);
        setSelectedTask(null);
        setFormData({ title: '', description: '', time: '' });
    };


    const handleOpenModal = (task?: Tasks) => {
        if (task) {
            // حالت ویرایش
            setSelectedTask(task);
            setFormData({
                title: task.title,
                description: task.description,
                time: task.time,
            });
        } else {
            // حالت افزودن
            setSelectedTask(null);
            setFormData({ title: '', description: '', time: '' });
        }
        setOpenModal(true);
    };

    const handleDeleteTask = (id: number) => {
        const updatedTasks = localTasks.filter((task) => task.id !== id);
        setLocalTasks(updatedTasks);
        localStorage.setItem('localTasks', JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        setLoading(true);
        getTasks()
            .then((data) => {
                setLocalTasks(data as Tasks[]);
            })
            .finally(() => setLoading(false));

        const savedTasks = localStorage.getItem('localTasks');
        if (savedTasks) {
            setLocalTasks(JSON.parse(savedTasks));
        }
    }, []);

    const getCombinedTasks = () => {
        return [
            ...localTasks.filter((task) => task.isTimeLimit),
        ];
    };

    return (
        <>
            <div className="!p-6 w-full">
                <div className="flex justify-between items-baseline sm:w-auto">
                    <h2 className="text-xl sm:text-[22px] font-semibold !mb-8">
                        Time Limit
                    </h2>
                    <div className="flex items-center gap-5">
                        <button
                            onClick={() => handleOpenModal()}
                            className="cursor-pointer"
                        >
                            <AddBox />
                        </button>
                        <div className="flex gap-4">
                            <button onClick={() => swiper?.slidePrev()}>
                                <ArrowBackIosRoundedIcon className="cursor-pointer" />
                            </button>
                            <button onClick={() => swiper?.slideNext()}>
                                <ArrowForwardIosRoundedIcon className="cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-48">
                        <CircularProgress size={50} color="primary" />
                    </div>
                ) : (
                    <Swiper
                        key={getCombinedTasks()
                            .map((task) => task.id)
                            .join('-')}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        draggable
                        onSwiper={setSwiper}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3.3 },
                        }}
                    >
                        {getCombinedTasks().map((task) => (
                            <SwiperSlide
                                key={task.id}
                                className="w-full !sm:w-[330px] transform-none relative"
                            >
                                <Card
                                    style={{ transition: 'transform 200ms ease' }}
                                    className="transform !rounded-2xl !p-8 bg-white shadow-2xl !my-2 hover:[transform:scale(0.97)] relative"
                                >
                                    {/* سه نقطه */}
                                    <IconButton
                                        onClick={(e) => handleMenuClick(e, task.id)}
                                        style={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                        }}
                                        size="small"
                                    >
                                        <MoreVertIcon />
                                    </IconButton>

                                    <Menu
                                        anchorEl={anchorEl}
                                        open={openMenu && menuTaskId === task.id}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem
                                            onClick={() => {
                                                handleOpenModal(task);
                                                handleMenuClose();
                                            }}
                                        >
                                            <EditIcon fontSize="small" /> Edit
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                handleDeleteTask(task.id);
                                                handleMenuClose();
                                            }}
                                        >
                                            <DeleteIcon fontSize="small" color="error" /> Delete
                                        </MenuItem>
                                    </Menu>

                                    {/* تصویر و متن */}
                                    <img
                                        src={task.image}
                                        alt={task.title}
                                        className="rounded-md"
                                    />
                                    <div className="!py-3">
                                        <h3 className="text-lg font-semibold">
                                            {task.title}
                                        </h3>
                                        <p className="text-gray-500 w-72">
                                            {task.description}
                                        </p>
                                    </div>
                                    <div className="flex justify-between !pb-3">
                                        <span className="font-medium">
                                            Progress
                                        </span>
                                        <span className="font-medium">
                                            {task.progress}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 !dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{ width: `${task.progress}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center !mt-5">
                                        <div className="flex items-center gap-3">
                                            <HiOutlineClock className="text-2xl" />
                                            <span>{task.time} Hours</span>
                                        </div>
                                        <AvatarGroup spacing="medium">
                                            {task.participants.map(
                                                (participant, index) => (
                                                    <Avatar
                                                        key={index}
                                                        sx={{ width: 24, height: 24 }}
                                                        alt={participant.name}
                                                        src={participant.avatar}
                                                    />
                                                )
                                            )}
                                        </AvatarGroup>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* ➕✏️ Modal Add/Edit */}
            <CustomModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title={selectedTask ? `Edit Task` : 'Add Task'}
                className="!h-[400px]"
            >
                <form className="!w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 mb-6 !w-full">
                        <Input
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Duration"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            type="number"
                        />

                        <button
                            type="submit"
                            className="text-white sticky !bottom-2 !self-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-full h-max sm:w-auto !px-5 !py-2.5 !mt-3 text-center transition-all duration-300 cursor-pointer"
                        >
                            {selectedTask ? 'Save Changes' : 'Add Task'}
                        </button>
                    </div>
                </form>
            </CustomModal>
        </>
    );
};

export default TimeLimitTask;
