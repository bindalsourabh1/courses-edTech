// src/components/CourseDetails.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { enrollCourse } from '../features/courses/coursesSlice';

const CourseDetails = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const course = useSelector((state) => state.courses.courses.find((c) => c.id === courseId));
  const dispatch = useDispatch();
  const [showSyllabus, setShowSyllabus] = useState(false);

  if (!course) {
    return <div>Course not found</div>;
  }

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };

  const handleEnroll = () => {
    dispatch(enrollCourse(course));
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Location:</strong> {course.location}
      </p>
      <p>
        <strong>Pre-requisites:</strong> {course.prerequisites.join(', ')}
      </p>
      <button onClick={toggleSyllabus} style={{ marginBottom: '10px' }}>
        {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
      </button>
      {showSyllabus && (
        <div>
          <h3>Syllabus</h3>
          {course.syllabus.map((item) => (
            <div key={item.week} style={{ marginBottom: '10px' }}>
              <p>
                <strong>Week {item.week}:</strong> {item.topic}
              </p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}
      {course.enrollmentStatus === 'Open' && (
        <button onClick={handleEnroll} style={{ marginTop: '10px' }}>
          Enroll in Course
        </button>
      )}
      {
        course.enrollmentStatus === 'Closed' && (
          <p className="text-3xl">Course enrollment is closed</p>
        )
      }
      
    </div>
  );
};

export default CourseDetails;
