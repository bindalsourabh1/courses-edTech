import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../features/courses/coursesSlice';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);

  const handleMarkCompleted = (id) => {
    dispatch(markCourseCompleted(id));
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <p>You are not enrolled in any courses.</p>
      ) : (
        enrolledCourses.map((course) => (
          <div
            key={course.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={course.thumbnail} alt={course.name} width="100" style={{ marginRight: '15px' }} />
            <div style={{ flex: 1 }}>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: 2025-12-31</p>
              <div
                style={{
                  background: '#eee',
                  width: '100%',
                  height: '20px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    background: 'green',
                    height: '100%',
                    width: course.completed ? '100%' : '50%',
                    transition: 'width 0.5s',
                  }}
                ></div>
              </div>
              {!course.completed ? (
                <button onClick={() => handleMarkCompleted(course.id)}>Mark as Completed</button>
              ) : (
                <p style={{ color: 'green' }}>Course Completed!</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentDashboard;
