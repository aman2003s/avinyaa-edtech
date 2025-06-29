import React, { useState } from 'react';
import DashboardControls from '../common/DashboardControls';
import CourseGrid from '../common/CourseGrid';
import DragDropInstructions from '../common/DragDropInstructions';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useCourseContext } from '../../context/CourseContext';
import { useCourseFilters } from '../../hooks/useCourseFilters';
import type { Course } from '../../types/course';

interface DashboardProps {
  darkMode?: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode = false }) => {
  const { courses, loading, error, fetchCourses, toggleFavorite } = useCourseContext();
  const [isDragModeEnabled, setIsDragModeEnabled] = useState(false);
  
  const {
    searchQuery,
    setSearchQuery,
    filterOptions,
    setFilterOptions,
    sortOptions,
    setSortOptions,
    filteredAndSortedCourses,
    hasActiveFilters,
    clearAllFilters,
  } = useCourseFilters(courses);

  const handleFavoriteClick = (courseId: string) => {
    if (!isDragModeEnabled) {
      toggleFavorite(courseId);
    }
  };

  const handleAddCourse = () => {
    console.log('Add course clicked');
  };

  const handleReorder = (reorderedCourses: Course[]) => {
    if (isDragModeEnabled) {
      // Here you would typically update the course order in your backend
      // For now, we'll just log the new order
      console.log('Courses reordered:', reorderedCourses.map(c => c.title));
      
      // You could also update the context if needed
      // updateCourseOrder(reorderedCourses);
    }
  };

  const toggleDragMode = () => {
    setIsDragModeEnabled(!isDragModeEnabled);
  };

  return (
    <section className={`flex-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-400'} rounded-xl lg:rounded-2xl shadow-md transition-colors duration-300 flex flex-col h-full border`}>
      <div className={`flex justify-between items-center p-3 sm:p-4 lg:p-6 border-b-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'} flex-shrink-0`}>
        <h2 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Dashboard</h2>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Drag and Drop Instructions */}
          {!loading && !error && filteredAndSortedCourses.length > 0 && isDragModeEnabled && (
            <DragDropInstructions darkMode={darkMode} />
          )}
          <div className="flex gap-1 sm:gap-2">
            <IconButton 
              onClick={toggleDragMode}
              sx={{
                backgroundColor: isDragModeEnabled 
                  ? (darkMode ? '#3B82F6' : '#2563EB') 
                  : 'transparent',
                color: isDragModeEnabled 
                  ? 'white' 
                  : (darkMode ? '#E5E7EB' : '#374151'),
                borderRadius: 1,
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                '&:hover': {
                  backgroundColor: isDragModeEnabled 
                    ? (darkMode ? '#2563EB' : '#1D4ED8') 
                    : (darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            </IconButton>
            <IconButton 
              sx={{
                backgroundColor: 'transparent',
                color: darkMode ? '#E5E7EB' : '#374151',
                borderRadius: 1,
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                '&:hover': {
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <MoreVertIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            </IconButton>
          </div>
        </div>
      </div>
      
      {/* Search, Filter, and Sort Controls */}
      <DashboardControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterOptions={filterOptions}
        onFilterChange={setFilterOptions}
        sortOptions={sortOptions}
        onSortChange={setSortOptions}
        onClearAll={clearAllFilters}
        darkMode={darkMode}
      />
      
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 scroll-smooth">
        <CourseGrid
          courses={filteredAndSortedCourses}
          loading={loading}
          error={error}
          darkMode={darkMode}
          onRetry={fetchCourses}
          onFavoriteClick={handleFavoriteClick}
          onAddCourse={handleAddCourse}
          hasFilters={hasActiveFilters()}
          onClearFilters={clearAllFilters}
          onReorder={handleReorder}
          isDragModeEnabled={isDragModeEnabled}
        />
    </div>
  </section>
);
};

export default Dashboard; 