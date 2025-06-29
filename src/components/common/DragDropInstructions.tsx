import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface DragDropInstructionsProps {
  darkMode?: boolean;
}

const DragDropInstructions: React.FC<DragDropInstructionsProps> = ({ darkMode = false }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      p: 1,
      borderRadius: 1,
      backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
      border: `1px solid ${darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
    }}
  >
    <DragIndicatorIcon 
      sx={{ 
        fontSize: 16, 
        color: darkMode ? '#60A5FA' : '#3B82F6',
      }} 
    />
    <Typography
      variant="caption"
      sx={{
        color: darkMode ? '#60A5FA' : '#3B82F6',
        fontSize: '0.75rem',
        fontWeight: 500,
      }}
    >
      Drag and drop cards to reorder them
    </Typography>
  </Box>
);

export default DragDropInstructions; 