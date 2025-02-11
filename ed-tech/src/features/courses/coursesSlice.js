// src/features/courses/coursesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dummyCourses from '../../dummyData';

// Async thunk to simulate fetching courses from an API.
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  await new Promise((res) => setTimeout(res, 500));
  return dummyCourses;
});

// Async thunk to simulate real-time likes update.
export const fetchLikes = createAsyncThunk(
  'courses/fetchLikes',
  async (_, { getState }) => {
    const { courses } = getState().courses;
    await new Promise((res) => setTimeout(res, 500));
    const updatedCourses = courses.map((course) => {
      const randomIncrement = Math.floor(Math.random() * 3); // 0, 1, 2
      return { ...course, likes: course.likes + randomIncrement };
    });
    return updatedCourses;
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    selectedCourse: null,
    enrolledCourses: [],
    status: 'idle',
  },
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    enrollCourse: (state, action) => {
      // Prevent duplicate enrollment.
      const exists = state.enrolledCourses.find((c) => c.id === action.payload.id);
      if (!exists) {
        state.enrolledCourses.push({ ...action.payload, completed: false });
      }
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find((c) => c.id === action.payload);
      if (course) {
        course.completed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchLikes.fulfilled, (state, action) => {
        state.courses = action.payload;
      });
  },
});

export const { setSelectedCourse, enrollCourse, markCourseCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;
