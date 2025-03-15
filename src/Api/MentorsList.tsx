const mentors = [
    {
        id: 1,
        name: "Curious George",
        job: "UI/UX Design",
        description:`Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . `,
        profilePic: "https://i.pravatar.cc/150?img=1",
        tasksCompleted: 42,
        rating: 4.5,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isRecent: true,
        isMain: true,
    },
    {
        id: 2,
        name: "Abraham Lincoln",
        job: "3D Design",
        description:`Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX  . . . `,
        profilePic: "https://i.pravatar.cc/150?img=2",
        tasksCompleted: 30,
        rating: 3.8,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isMain: true,
    },
    {
        id: 3,
        name: "Michael Brown",
        job: "Backend Developer",
        description:`Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company . . .`,
        profilePic: "https://i.pravatar.cc/150?img=3",
        tasksCompleted: 55,
        rating: 4.9,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isMain: true,
    },
    {
        id: 4,
        name: "Sophia Johnson",
        job: "Web Developer",
        description: `Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . .`,
        profilePic: "https://i.pravatar.cc/150?img=4",
        tasksCompleted: 27,
        rating: 4.2,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isMain: true,
    },
    {
        id: 5,
        name: "David Williams",
        job: "Mobile App Developer",
        description:`Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . .`,
        profilePic: "https://i.pravatar.cc/150?img=5",
        tasksCompleted: 38,
        rating: 4.0,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isMain: true,
        isRecent: true,
    },
    {
        id: 6,
        name: "Emma Jones",
        job: "Data Scientist",
        description:`Hi, I'm Julia Philips. I'm a senior manager at Apple company . . .`,
        profilePic: "https://i.pravatar.cc/150?img=6",
        tasksCompleted: 45,
        rating: 4.7,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isMain: true,
    },
    {
        id: 7,
        name: "Daniel Miller",
        job: "DevOps Engineer",
        profilePic: "https://i.pravatar.cc/150?img=7",
        tasksCompleted: 50,
        rating: 4.8,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isRecent: true,
    },
    {
        id: 8,
        name: "Olivia Davis",
        job: "Cyber Security Expert",
        profilePic: "https://i.pravatar.cc/150?img=8",
        tasksCompleted: 33,
        rating: 4.1,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isRecent: true,
    },
    {
        id: 9,
        name: "William Anderson",
        job: "AI Engineer",
        profilePic: "https://i.pravatar.cc/150?img=9",
        tasksCompleted: 60,
        rating: 4.9,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isRecent: true,
    },
    {
        id: 10,
        name: "Ava Taylor",
        job: "Project Manager",
        profilePic: "https://i.pravatar.cc/150?img=10",
        tasksCompleted: 29,
        rating: 3.9,
        reviews: Math.floor(Math.random() * (200 - 10 + 1)) + 10,
        isRecent: true,
    }
];

export const getMentors = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mentors), 500); // Simulating network delay
    });
 };
