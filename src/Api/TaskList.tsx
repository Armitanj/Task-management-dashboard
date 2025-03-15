const tasks = [
  {
    id: 1,
    title: "Design Dashboard",
    description: "Creating dashboard UI",
    image: "/images/taskImages/task1.png",
    progress: 45,
    time: "3 Days Left",
    participants: [
      { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3" },
      { name: "Olivia Martinez", avatar: "https://i.pravatar.cc/150?img=6" }
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,

  },
  {
    id: 2,
    title: "Fix API Bugs",
    description: "Debugging API issues",
    image: "/images/taskImages/task2.png",
    progress: 70,
    time: "4 Days Left",
    participants: [
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=5" },
      { name: "Bob Smith", avatar: "https://i.pravatar.cc/150?img=2" },
      { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3" },
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,
  },
  {
    id: 3,
    title: "Develop Landing Page",
    description: "Creating a responsive landing page",
    image: "/images/taskImages/task3.png",
    progress: 30,
    time: "3 Hours",
    participants: [
      { name: "Emma Watson", avatar: "https://i.pravatar.cc/150?img=2" },
      { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3" },
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=5" },
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,
  },
  {
    id: 4,
    title: "Write Documentation",
    description: "Writing project documentation",
    image: "/images/taskImages/task4.png",
    progress: 60,
    time: "4 Hours",
    participants: [
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=5" },
      { name: "Olivia Martinez", avatar: "https://i.pravatar.cc/150?img=6" },
      { name: "Michael Lee", avatar: "https://i.pravatar.cc/150?img=4" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: false,
  },
  {
    id: 5,
    title: "Improve UX/UI",
    description: "Enhancing the user interface",
    image: "/images/taskImages/task5.png",
    progress: 80,
    time: "5 Hours",
    participants: [
      { name: "Michael Lee", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=5" },
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,
  },
  {
    id: 6,
    title: "Optimize Performance",
    description: "Improving website optimization",
    image: "/images/taskImages/task6.png",
    progress: 50,
    time: "6 Hours",
    participants: [
      { name: "David Clark", avatar: "https://i.pravatar.cc/150?img=7" },
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=5" },
      { name: "Olivia Martinez", avatar: "https://i.pravatar.cc/150?img=6" },
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,
  },
  {
    id: 7,
    title: "Setup CI/CD",
    description: "Automating deployment pipeline",
    image: "/images/taskImages/task1.png",
    progress: 40,
    time: "7 Hours",
    participants: [
      { name: "Olivia Martinez", avatar: "https://i.pravatar.cc/150?img=6" },
      { name: "Michael Lee", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },

    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,
  },
  {
    id: 8,
    title: "Test Application",
    description: "Performing integration testing",
    image: "/images/taskImages/task2.png",
    progress: 75,
    time: "8 Hours",
    participants: [
      { name: "William Johnson", avatar: "https://i.pravatar.cc/150?img=8" },
      { name: "Michael Lee", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=5" },
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: false,
  },
  {
    id: 9,
    title: "Deploy to Production",
    description: "Releasing the final build to production",
    image: "/images/taskImages/task3.png",
    progress: 90,
    time: "9 Hours",
    participants: [
      { name: "Sophia Brown", avatar: "https://i.pravatar.cc/150?img=10" },
      { name: "William Johnson", avatar: "https://i.pravatar.cc/150?img=8" }
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: true,
  },
  {
    id: 10,
    title: "Monitor System",
    description: "Setting up monitoring tools and logs",
    image: "/images/taskImages/task4.png",
    progress: 55,
    time: "10 Hours",
    participants: [
      { name: "Michael Lee", avatar: "https://i.pravatar.cc/150?img=10" },
      { name: "William Johnson", avatar: "https://i.pravatar.cc/150?img=4" }

    ],
    isToday: false,
    isTimeLimit: true,
    isNew: false,
  },
  {
    id: 11,
    title: "Creating Awesome Mobile Apps",
    description: "UI /UX Designer",
    image: "/images/todayTask/Image.png",
    progress: 90,
    time: "1 Hours",
    participants: [
      { name: "Michael Lee", avatar: "https://i.pravatar.cc/150?img=8" },
      { name: "William Johnson", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "David Clark", avatar: "https://i.pravatar.cc/150?img=7" },
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Emma Watson", avatar: "https://i.pravatar.cc/150?img=2" },

    ],
    isToday: true,
  },
  {
    id: 12,
    title: "Design Dashboard",
    description: "Creating an interactive dashboard UI",
    image: "/images/taskImages/task1.png",
    progress: 45,
    time: "1 Hour",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Curious George", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
      { name: "Abraham Lincoln", avatar: "https://randomuser.me/api/portraits/men/2.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 13,
    title: "Fix API Bugs",
    description: "Debugging and resolving API issues",
    image: "/images/taskImages/task2.png",
    progress: 70,
    time: "2 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Alice Johnson", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
      { name: "Bob Smith", avatar: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 14,
    title: "Develop Landing Page",
    description: "Creating a responsive landing page",
    image: "/images/taskImages/task3.png",
    progress: 30,
    time: "3 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Emma Watson", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
      { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/6.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 15,
    title: "Setup Database",
    description: "Configuring the project database",
    image: "/images/taskImages/task4.png",
    progress: 50,
    time: "4 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Sophia Brown", avatar: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 16,
    title: "Payment System",
    description: "Adding payment gateway integration",
    image: "/images/taskImages/task5.png",
    progress: 60,
    time: "5 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Michael Lee", avatar: "https://randomuser.me/api/portraits/men/8.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 17,
    title: "Improve Security",
    description: "Enhancing security measures for the app",
    image: "/images/taskImages/task6.png",
    progress: 75,
    time: "6 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "David Clark", avatar: "https://randomuser.me/api/portraits/men/9.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 18,
    title: "Write Unit Tests",
    description: "Creating unit tests for application",
    image: "/images/taskImages/task1.png",
    progress: 40,
    time: "7 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Olivia Martinez", avatar: "https://randomuser.me/api/portraits/women/10.jpg" }
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: true,
  },
  {
    id: 19,
    title: "Create Marketing Plan",
    description: "Product launch strategy",
    image: "/images/taskImages/task2.png",
    progress: 85,
    time: "8 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "William Johnson", avatar: "https://randomuser.me/api/portraits/men/11.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  },
  {
    id: 20,
    title: "Deploy Backend Services",
    description: "Deploying backend microservices",
    image: "/images/taskImages/task3.png",
    progress: 65,
    time: "9 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Sophia Brown", avatar: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    isToday: false,
    isTimeLimit: false,
    isNew: true,
  },
  {
    id: 21,
    title: "Analyze User Feedback",
    description: "Reviewing and analyzing user feedback",
    image: "/images/taskImages/task4.png",
    progress: 55,
    time: "10 Hours",
    timeIcon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    participants: [
      { name: "Michael Lee", avatar: "https://randomuser.me/api/portraits/men/8.jpg" }
    ],
    isToday: false,
    isTimeLimit: true,
    isNew: true,
  }
]

export const getTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasks), 500);
  })
}