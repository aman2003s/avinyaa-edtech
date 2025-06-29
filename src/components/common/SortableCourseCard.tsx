import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CourseCard from './CourseCard';
import type { Course } from '../../types/course';

interface SortableCourseCardProps {
  course: Course;
  index: number;
  darkMode?: boolean;
}

const SortableCourseCard: React.FC<SortableCourseCardProps> = ({
  course,
  index,
  darkMode = false,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: course.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  // Disable all interactions when in drag mode
  const handleFavoriteClick = () => {
    // Disabled in drag mode
  };

  const handleActionClick = () => {
    // Disabled in drag mode
  };

  const handleMenuClick = () => {
    // Disabled in drag mode
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        width: '100%',
        maxWidth: '300px',
        minWidth: '300px',
        height: 'fit-content',
      }}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <CourseCard
        {...course}
        darkMode={darkMode}
        index={index}
        onFavoriteClick={handleFavoriteClick}
        onAction1Click={handleActionClick}
        onAction2Click={handleActionClick}
        onAction3Click={handleActionClick}
        onMenuClick={handleMenuClick}
        isDragMode={true}
      />
    </div>
  );
};

export default SortableCourseCard; 