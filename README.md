# React Courses App

A responsive web application built with React, Redux Toolkit, and Tailwind CSS. This project showcases a list of courses with detailed information and a student dashboard for enrolled courses. The application features advanced state management, real-time (simulated) likes updates, and a modern, mobile-friendly UI.
## Screenshots

### Desktop Views

#### Main Interface
![Main interface description](https://github.com/user-attachments/assets/cbc499e0-14c7-4e25-b785-ff1181ea0fb8)

#### Dashboard
![image](https://github.com/user-attachments/assets/b59311e1-9f7f-4375-8987-60db2c5f9f7c)

### Mobile Views

#### Home Screen
![Screenshot 2025-02-11 191152](https://github.com/user-attachments/assets/e7677777-a655-4388-bc03-10e91c9f46f9)

#### Mobile Dashboard
![image](https://github.com/user-attachments/assets/be051090-b2cd-411b-b7d1-7b7c2995373c)

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
ed-tech/
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
   cd ed-tech
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
