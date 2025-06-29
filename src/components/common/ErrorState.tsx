import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
  darkMode?: boolean;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry, darkMode = false }) => (
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
    <ErrorOutlineIcon 
      sx={{ 
        fontSize: 64, 
        color: darkMode ? '#EF4444' : '#DC2626',
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
      Oops! Something went wrong
    </Typography>
    
    <Typography 
      variant="body1" 
      sx={{ 
        mb: 3,
        color: darkMode ? '#9CA3AF' : '#6B7280',
        maxWidth: 400
      }}
    >
      {error}
    </Typography>
    
    {onRetry && (
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={onRetry}
        sx={{
          bgcolor: darkMode ? '#3B82F6' : '#2563EB',
          color: 'white',
          '&:hover': {
            bgcolor: darkMode ? '#2563EB' : '#1D4ED8',
          }
        }}
      >
        Try Again
      </Button>
    )}
  </Box>
);

export default ErrorState; 