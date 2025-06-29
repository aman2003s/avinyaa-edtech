import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';

interface EmptyStateProps {
  onAddCourse?: () => void;
  darkMode?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddCourse, darkMode = false }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
      textAlign: 'center',
      minHeight: 400,
      color: darkMode ? '#E5E7EB' : '#374151'
    }}
  >
    <SchoolIcon 
      sx={{ 
        fontSize: 64, 
        color: darkMode ? '#6B7280' : '#9CA3AF',
        mb: 2 
      }} 
    />
    
    <Typography 
      variant="h5" 
      component="h3" 
      sx={{ 
        fontWeight: 600, 
        mb: 2,
        color: darkMode ? '#E5E7EB' : '#374151'
      }}
    >
      No courses available
    </Typography>
    
    <Typography 
      variant="body1" 
      sx={{ 
        mb: 3,
        color: darkMode ? '#9CA3AF' : '#6B7280',
        maxWidth: 400
      }}
    >
      It looks like there are no courses available at the moment. 
      Check back later or contact your administrator for more information.
    </Typography>
    
    {onAddCourse && (
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddCourse}
        sx={{
          bgcolor: darkMode ? '#3B82F6' : '#2563EB',
          color: 'white',
          '&:hover': {
            bgcolor: darkMode ? '#2563EB' : '#1D4ED8',
          }
        }}
      >
        Add Course
      </Button>
    )}
  </Box>
);

export default EmptyState; 