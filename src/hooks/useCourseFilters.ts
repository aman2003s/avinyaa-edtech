import { useState, useMemo } from 'react';
import type { Course } from '../types/course';
import type { FilterOptions, SortOptions } from '../components/common/DashboardControls';

export const useCourseFilters = (courses: Course[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    status: '',
    difficulty: '',
    category: '',
    favorite: '',
  });
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: 'title',
    direction: 'asc',
  });

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter((course: Course) => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          course.title.toLowerCase().includes(searchLower) ||
          course.courseCode.toLowerCase().includes(searchLower) ||
          (course.instructor && course.instructor.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Status filter
      if (filterOptions.status && course.status !== filterOptions.status) {
        return false;
      }

      // Difficulty filter
      if (filterOptions.difficulty && course.difficulty !== filterOptions.difficulty) {
        return false;
      }

      // Category filter
      if (filterOptions.category && course.category !== filterOptions.category) {
        return false;
      }

      // Favorite filter
      if (filterOptions.favorite) {
        const isFavorite = filterOptions.favorite === 'true';
        if (course.favorite !== isFavorite) {
          return false;
        } 
      }

      return true;
    });

    // Sort courses
    filtered.sort((a: Course, b: Course) => {
      let aValue: any = a[sortOptions.field as keyof Course];
      let bValue: any = b[sortOptions.field as keyof Course];

      // Handle string comparison
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortOptions.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOptions.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [courses, searchQuery, filterOptions, sortOptions]);

  const hasActiveFilters = (): boolean => {
    return Boolean(
      searchQuery ||
      filterOptions.status !== '' ||
      filterOptions.difficulty !== '' ||
      filterOptions.category !== '' ||
      filterOptions.favorite !== ''
    );
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setFilterOptions({
      status: '',
      difficulty: '',
      category: '',
      favorite: '',
    });
    setSortOptions({
      field: 'title',
      direction: 'asc',
    });
  };

  return {
    searchQuery,
    setSearchQuery,
    filterOptions,
    setFilterOptions,
    sortOptions,
    setSortOptions,
    filteredAndSortedCourses,
    hasActiveFilters,
    clearAllFilters,
  };
}; 