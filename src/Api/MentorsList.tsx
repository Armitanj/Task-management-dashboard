const mentors = [
    {
        id: 1,
        name: "Curious George",
        job: "UI/UX Design",
        profilePic: "https://i.pravatar.cc/150?img=1",
        tasksCompleted: 42,
        rating: 4.5,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 2,
        name: "Abraham Lincoln",
        job: "3D Design",
        profilePic: "https://i.pravatar.cc/150?img=2",
        tasksCompleted: 30,
        rating: 3.8,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 3,
        name: "Michael Brown",
        job: "Backend Developer",
        profilePic: "https://i.pravatar.cc/150?img=3",
        tasksCompleted: 55,
        rating: 4.9,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 4,
        name: "Sophia Johnson",
        job: "Web Developer",
        profilePic: "https://i.pravatar.cc/150?img=4",
        tasksCompleted: 27,
        rating: 4.2,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 5,
        name: "David Williams",
        job: "Mobile App Developer",
        profilePic: "https://i.pravatar.cc/150?img=5",
        tasksCompleted: 38,
        rating: 4.0,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 6,
        name: "Emma Jones",
        job: "Data Scientist",
        profilePic: "https://i.pravatar.cc/150?img=6",
        tasksCompleted: 45,
        rating: 4.7,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 7,
        name: "Daniel Miller",
        job: "DevOps Engineer",
        profilePic: "https://i.pravatar.cc/150?img=7",
        tasksCompleted: 50,
        rating: 4.8,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 8,
        name: "Olivia Davis",
        job: "Cyber Security Expert",
        profilePic: "https://i.pravatar.cc/150?img=8",
        tasksCompleted: 33,
        rating: 4.1,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 9,
        name: "William Anderson",
        job: "AI Engineer",
        profilePic: "https://i.pravatar.cc/150?img=9",
        tasksCompleted: 60,
        rating: 4.9,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    },
    {
        id: 10,
        name: "Ava Taylor",
        job: "Project Manager",
        profilePic: "https://i.pravatar.cc/150?img=10",
        tasksCompleted: 29,
        rating: 3.9,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
    }
];

export const getMentors = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mentors), 500); // Simulating network delay
    });
 };
