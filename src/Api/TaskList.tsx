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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: false
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
    isToday: true
  }
]

export const getTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasks), 500);
  })
}