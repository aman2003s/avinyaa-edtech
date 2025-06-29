export const COURSE_STATUS_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'Summer 2024', label: 'Summer 2024' },
  { value: 'Winter 2024', label: 'Winter 2024' },
  { value: 'Closed', label: 'Closed' },
] as const;

export const COURSE_DIFFICULTY_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
] as const;

export const COURSE_CATEGORY_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'Computer Science', label: 'Computer Science' },
] as const;

export const COURSE_FAVORITE_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'true', label: 'Favorites' },
  { value: 'false', label: 'Not Favorites' },
] as const;

export const SORT_FIELDS = [
  { value: 'title', label: 'Title' },
  { value: 'courseCode', label: 'Course Code' },
  { value: 'credits', label: 'Credits' },
] as const;

export const SKELETON_COUNT = 6; 