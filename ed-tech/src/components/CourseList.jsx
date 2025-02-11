import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses, fetchLikes } from '../features/courses/coursesSlice';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses.courses);
  const status = useSelector((state) => state.courses.status);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
    const interval = setInterval(() => {
      dispatch(fetchLikes());
    }, 5000);
    return () => clearInterval(interval);
  }, [status, dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Course Listing</h1>

      {/* Search Box */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by course name or instructor"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Course List */}
      <div className="max-h-[500px] overflow-y-auto space-y-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            className="flex items-center bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{course.name}</h2>
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-600">Likes: {course.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
