# React Courses App

A responsive web application built with React, Redux Toolkit, and Tailwind CSS. This project showcases a list of courses with detailed information and a student dashboard for enrolled courses. The application features advanced state management, real-time (simulated) likes updates, and a modern, mobile-friendly UI.

## Features

* **Course Listing Page**
  - Displays a list of courses fetched from a dummy API
  - Search functionality to filter courses by name or instructor
  - Real-time (simulated) likes updates to showcase live data changes

* **Course Details Page**
  - Detailed view of selected course information
  - Expandable syllabus section
  - Enrollment option for courses with an open status

* **Student Dashboard**
  - Shows a list of enrolled courses
  - Displays course thumbnails, instructors, and a progress bar
  - Ability for students to mark courses as completed

* **Responsive Design**
  - Fully responsive UI using Tailwind CSS
  - Mobile-friendly navigation with a responsive navbar featuring a hamburger menu

## Project Structure

```
react-courses-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── store.js
    ├── dummyData.js
    ├── features/
    │   └── courses/
    │       └── coursesSlice.js
    └── components/
        ├── Navbar.jsx
        ├── CourseList.jsx
        ├── CourseDetails.jsx
        └── StudentDashboard.jsx
```

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/react-courses-app.git
   cd react-courses-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Running the Application

Start the development server using Vite:
```bash
npm run dev
```

Open your browser and navigate to the provided URL (typically http://localhost:3000) to view the application.

## Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Technologies Used

* React – For building the user interface
* Vite – A fast build tool and development server
* Redux Toolkit – For advanced state management
* React Router – For client-side routing
* Tailwind CSS – For utility-first responsive styling
* React Icons – For incorporating modern icons in the UI

## Advanced Features

* **Real-Time Likes Update**: The Course Listing page simulates real-time likes updates every 5 seconds using Redux async thunks

* **Responsive Navbar**: The navbar adjusts between full-width on larger screens and a centered layout on medium screens, with a hamburger menu for mobile devices

* **Course Enrollment & Completion**: Students can enroll in courses (if available) and mark them as completed from the Student Dashboard