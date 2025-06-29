import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

interface CourseCardSkeletonProps {
  darkMode?: boolean;
}

const CourseCardSkeleton: React.FC<CourseCardSkeletonProps> = ({ darkMode = false }) => (
  <Card sx={{ 
    width: 300,
    position: 'relative', 
    borderRadius: 3, 
    boxShadow: 3, 
    background: darkMode ? '#374151' : 'white',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  }}>
    {/* Image skeleton - exact same dimensions as CourseCard */}
    <Box sx={{ height: 140, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height="100%" 
        sx={{ 
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0',
          borderTopLeftRadius: 12, 
          borderTopRightRadius: 12 
        }} 
      />
    </Box>
    
    {/* Tag skeleton - exact same position as CourseCard */}
    <Box sx={{ position: 'absolute', left: 16, top: 125 }}>
      <Skeleton 
        variant="rectangular" 
        width={90} 
        height={24} 
        sx={{ 
          borderRadius: 12,
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0'
        }} 
      />
    </Box>
    
    {/* Favorite button skeleton - exact same position as CourseCard */}
    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
      <Skeleton 
        variant="circular" 
        width={32} 
        height={32} 
        sx={{ 
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0'
        }} 
      />
    </Box>
    
    {/* Content skeleton - exact same padding as CourseCard */}
    <CardContent sx={{ pt: 2, pb: 1, flex: 1 }}>
      {/* Title skeleton - matches h6 typography with single line */}
      <Skeleton 
        variant="text" 
        width="90%" 
        height={20} 
        sx={{ 
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0',
          mb: 1
        }} 
      />
      {/* Course code skeleton - just below title */}
      <Skeleton 
        variant="text" 
        width="60%" 
        height={16} 
        sx={{ 
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0',
          mb: 0.5
        }} 
      />
      {/* Semester skeleton - just below course code */}
      <Skeleton 
        variant="text" 
        width="50%" 
        height={16} 
        sx={{ 
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0'
        }} 
      />
    </CardContent>
    
    {/* Actions skeleton - exact same layout as CourseCard */}
    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pb: 2, pt: 0, mt: 'auto' }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {[1, 2, 3].map((i) => (
          <Skeleton 
            key={i}
            variant="circular" 
            width={32} 
            height={32} 
            sx={{ 
              bgcolor: darkMode ? '#4B5563' : '#f0f0f0'
            }} 
          />
        ))}
      </Box>
      <Skeleton 
        variant="circular" 
        width={32} 
        height={32} 
        sx={{ 
          bgcolor: darkMode ? '#4B5563' : '#f0f0f0'
        }} 
      />
    </CardActions>
  </Card>
);

export default CourseCardSkeleton; 