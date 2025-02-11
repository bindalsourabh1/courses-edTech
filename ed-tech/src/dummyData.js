const dummyCourses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description:
        'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open', // 'Open', 'Closed', or 'In Progress'
      thumbnail: 'https://via.placeholder.com/150',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content:
            'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content:
            'Creating a simple mobile app using React Native components.',
        },
      ],
      students: [
        { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
      ],
      likes: 10,
    },
    {
      id: 2,
      name: 'Advanced React',
      instructor: 'Jane Smith',
      description: 'Deep dive into advanced topics in React.',
      enrollmentStatus: 'In Progress',
      thumbnail: 'https://via.placeholder.com/150',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic React knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'React Hooks',
          content: 'Understanding and using React Hooks.',
        },
        {
          week: 2,
          topic: 'Context API',
          content: 'Managing global state with Context API.',
        },
      ],
      students: [{ id: 103, name: 'Charlie Brown', email: 'charlie@example.com' }],
      likes: 5,
    },
    {
      id: 3,
      name: 'Node.js for Beginners',
      instructor: 'Mike Johnson',
      description: 'Introduction to Node.js and backend development.',
      enrollmentStatus: 'Closed',
      thumbnail: 'https://via.placeholder.com/150',
      duration: '6 weeks',
      schedule: 'Fridays, 5:00 PM - 7:00 PM',
      location: 'Offline',
      prerequisites: ['Basic JavaScript knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Node.js Basics',
          content: 'Understanding Node.js and its architecture.',
        },
        {
          week: 2,
          topic: 'Express.js',
          content: 'Building APIs with Express.js.',
        },
      ],
      students: [{ id: 104, name: 'Dana White', email: 'dana@example.com' }],
      likes: 8,
    },
  ];
  
  export default dummyCourses;
  