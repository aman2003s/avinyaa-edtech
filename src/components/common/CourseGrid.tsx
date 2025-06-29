import React from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import CourseCard from './CourseCard';
import SortableCourseCard from './SortableCourseCard';
import CourseCardSkeleton from './CourseCardSkeleton';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';
import type { Course } from '../../types/course';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

interface CourseGridProps {
  courses: Course[];
  loading: boolean;
  error: string | null;
  darkMode?: boolean;
  onRetry?: () => void;
  onFavoriteClick?: (courseId: string) => void;
  onAddCourse?: () => void;
  hasFilters?: boolean;
  onClearFilters?: () => void;
  onReorder?: (courses: Course[]) => void;
  isDragModeEnabled?: boolean;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  loading,
  error,
  darkMode = false,
  onRetry,
  onFavoriteClick,
  onAddCourse,
  hasFilters = false,
  onClearFilters,
  onReorder,
  isDragModeEnabled = false,
}) => {
  const {
    items,
    setItems,
    activeId,
    sensors,
    handleDragStart,
    handleDragEnd,
    getActiveItem,
  } = useDragAndDrop(courses, onReorder);

  // Update items when courses prop changes
  React.useEffect(() => {
    setItems(courses);
  }, [courses, setItems]);

  if (loading) {
    return (
      <div className="gap-6 flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCardSkeleton key={index} darkMode={darkMode} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        error={error}
        onRetry={onRetry}
        darkMode={darkMode}
      />
    );
  }

  if (items.length === 0) {
    if (hasFilters) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <div className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            No courses match your current filters
          </div>
          {onClearFilters && (
            <button
              onClick={onClearFilters}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                } transition-colors duration-200`}
            >
              Clear All Filters
            </button>
          )}
        </div>
      );
    }

    return (
      <EmptyState
        onAddCourse={onAddCourse}
        darkMode={darkMode}
      />
    );
  }

  const activeItem = getActiveItem();

  // If drag mode is disabled, render regular cards
  if (!isDragModeEnabled) {
    return (
      <div className="gap-6 flex flex-wrap">
        {items.map((course, idx) => (
          <CourseCard
            key={course.id}
            {...course}
            darkMode={darkMode}
            index={idx}
            onFavoriteClick={() => onFavoriteClick?.(course.id)}
            onAction1Click={() => console.log('Action 1 clicked for', course.title)}
            onAction2Click={() => console.log('Action 2 clicked for', course.title)}
            onAction3Click={() => console.log('Action 3 clicked for', course.title)}
            onMenuClick={() => console.log('Menu clicked for', course.title)}
            isDragMode={false}
          />
        ))}
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map(item => item.id)} strategy={rectSortingStrategy}>
        <div className="gap-6 flex flex-wrap">
          {items.map((course, idx) => (
            <SortableCourseCard
              key={course.id}
              course={course}
              index={idx}
              darkMode={darkMode}
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeItem ? (
          <div className="transform rotate-3 scale-105">
            <CourseCard
              {...activeItem}
              darkMode={darkMode}
              index={0}
              onFavoriteClick={() => onFavoriteClick?.(activeItem.id)}
              onAction1Click={() => console.log('Action 1 clicked for', activeItem.title)}
              onAction2Click={() => console.log('Action 2 clicked for', activeItem.title)}
              onAction3Click={() => console.log('Action 3 clicked for', activeItem.title)}
              onMenuClick={() => console.log('Menu clicked for', activeItem.title)}
              isDragMode={true}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default CourseGrid; 