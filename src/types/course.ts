export interface Course {
  id: string;
  title: string;
  courseCode: string;
  semester: string;
  status: 'Closed' | 'Summer 2024' | 'Winter 2024' | 'Fall 2024' | 'Spring 2024';
  image?: string;
  favorite: boolean;
  closed: boolean;
  instructor?: string;
  credits?: number;
  description?: string;
  enrolledStudents?: number;
  maxStudents?: number;
  startDate?: string;
  endDate?: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface CourseContextType {
  courses: Course[];
  loading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  toggleFavorite: (courseId: string) => void;
  refreshCourses: () => Promise<void>;
} 