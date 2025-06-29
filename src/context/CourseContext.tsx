import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Course, CourseContextType } from '../types/course';
import { sampleCourses } from '../data/sampleCourses';

const CourseContext = createContext<CourseContextType | undefined>(undefined);

interface CourseProviderProps {
  children: ReactNode;
}

export const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate API delay
  const simulateApiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Simulate random API failures (10% chance)
  const simulateApiFailure = () => Math.random() < 0.1;

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await simulateApiDelay(1500);
      
      // Simulate random API failure
      if (simulateApiFailure()) {
        throw new Error('Failed to fetch courses. Please try again later.');
      }
      
      // Simulate successful API response
      setCourses(sampleCourses);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (courseId: string) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? { ...course, favorite: !course.favorite }
          : course
      )
    );
  };

  const refreshCourses = async () => {
    await fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const value: CourseContextType = {
    courses,
    loading,
    error,
    fetchCourses,
    toggleFavorite,
    refreshCourses,
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
}; 