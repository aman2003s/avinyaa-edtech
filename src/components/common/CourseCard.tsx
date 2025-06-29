import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePopupContext } from '../../context/PopupContext';
import { generateRandomColor } from '../../utils/colorUtils';

export type CourseCardProps = {
  color?: string;
  image?: string;
  title: string;
  courseCode: string;
  semester: string;
  status: 'Closed' | 'Summer 2024' | 'Winter 2024' | 'Fall 2024' | 'Spring 2024';
  favorite?: boolean;
  closed?: boolean;
  darkMode?: boolean;
  index?: number;
  onFavoriteClick?: () => void;
  onAction1Click?: () => void;
  onAction2Click?: () => void;
  onAction3Click?: () => void;
  onMenuClick?: () => void;
  isDragMode?: boolean;
};

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  courseCode,
  semester,
  status,
  favorite = false,
  darkMode = false,
  index,
  isDragMode = false,
}) => {
  const { openPopup } = usePopupContext();
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleButtonClick = (buttonType: 'volume' | 'assignment' | 'description' | 'favorite') => {
    openPopup({
      buttonType,
      courseTitle: title,
      courseCode: courseCode,
    });
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleViewDetails = () => {
    handleMenuClose();
    openPopup({
      buttonType: 'menu',
      courseTitle: title,
      courseCode: courseCode,
      menuAction: 'view details',
    });
  };

  const handleRemove = () => {
    handleMenuClose();
    openPopup({
      buttonType: 'menu',
      courseTitle: title,
      courseCode: courseCode,
      menuAction: 'remove',
    });
  };

  return (
    <Card sx={{ 
      width: '100%',
      maxWidth: 300,
      position: 'relative', 
      borderRadius: 3, 
      boxShadow: 3, 
      background: darkMode ? '#374151' : 'white',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      cursor: isDragMode ? 'grab' : 'pointer',
      '&:hover': {
        transform: isDragMode ? 'none' : 'translateY(-4px) scale(1.02)',
        boxShadow: isDragMode ? 3 : 8,
        '& .favorite-button': {
          transform: isDragMode ? 'none' : 'scale(1.1)',
        }
      }
    }}>
      {image ? (
        <Box sx={{ overflow: 'hidden', borderTopLeftRadius: 12, borderTopRightRadius: 12, height: { xs: 120, sm: 140 } }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            sx={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      ) : (
        <Box sx={{ height: { xs: 120, sm: 140 }, background: generateRandomColor(index || 0), borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
      )}
      {/* Tag */}
      <Box sx={{ position: 'absolute', left: { xs: 12, sm: 16 }, top: { xs: 105, sm: 125 } }}>
        <Chip 
          label={status} 
          size="small" 
          sx={{ 
            bgcolor: darkMode ? '#4B5563' : 'white',
            border: image ? '2px solid #bbb' : `2px solid ${generateRandomColor(index || 0)}`,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            '& .MuiChip-label': {
              color: darkMode ? '#E5E7EB' : (image ? 'text.primary' : generateRandomColor(index || 0)),
            }
          }} 
        />
      </Box>
      
      {/* Drag Indicator */}
      {isDragMode && (
        <Box sx={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          right: 0,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: darkMode 
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%)'
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          zIndex: 1,
        }}>
          <DragIndicatorIcon 
            sx={{ 
              fontSize: 20, 
              color: '#FFFFFF',
              opacity: 1,
            }} 
          />
        </Box>
      )}
      
      {/* Favorite button */}
      <IconButton
        onClick={() => handleButtonClick('favorite')}
        className="favorite-button"
        disabled={isDragMode}
        sx={{ 
          position: 'absolute', 
          top: { xs: 6, sm: 8 }, 
          right: { xs: 6, sm: 8 }, 
          width: { xs: 28, sm: 32 }, 
          height: { xs: 28, sm: 32 }, 
          bgcolor: darkMode ? '#4B5563' : 'white', 
          boxShadow: 1, 
          borderRadius: '50%',
          border: 'none',
          transition: 'transform 0.2s ease',
          opacity: isDragMode ? 0.5 : 1,
          '&:hover': {
            bgcolor: darkMode ? '#4B5563' : 'white',
            border: 'none',
          },
          '&:active': {
            bgcolor: darkMode ? '#4B5563' : 'white',
            border: 'none',
          },
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
      >
        {favorite ? (
          <FavoriteIcon sx={{ color: 'red', fontSize: { xs: 18, sm: 20 }, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.3)' } }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: generateRandomColor(index || 0), transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.3)' } }} />
        )}
      </IconButton>
      <CardContent sx={{ pt: 2, pb: 1, flex: 1, px: { xs: 2, sm: 3 } }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 600, 
            color: image ? '#000000' : generateRandomColor(index || 0),
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: darkMode ? '#9CA3AF' : 'text.secondary',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            mb: 0.5
          }}
        >
          {courseCode}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: darkMode ? '#9CA3AF' : '#6B7280',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            fontWeight: 500,
            minHeight: '1.25rem'
          }}
        >
          {semester}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 1.5, sm: 2 }, pb: 2, pt: 0, mt: 'auto' }}>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton 
            onClick={() => handleButtonClick('volume')} 
            disabled={isDragMode}
            sx={{ 
              width: { xs: 28, sm: 32 }, 
              height: { xs: 28, sm: 32 },
              opacity: isDragMode ? 0.5 : 1,
              '&:disabled': {
                cursor: 'not-allowed',
              },
            }}
          >
            <VolumeUpIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: darkMode ? '#E5E7EB' : 'inherit' }} />
          </IconButton>
          <IconButton 
            onClick={() => handleButtonClick('assignment')} 
            disabled={isDragMode}
            sx={{ 
              width: { xs: 28, sm: 32 }, 
              height: { xs: 28, sm: 32 },
              opacity: isDragMode ? 0.5 : 1,
              '&:disabled': {
                cursor: 'not-allowed',
              },
            }}
          >
            <AssignmentIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: darkMode ? '#E5E7EB' : 'inherit' }} />
          </IconButton>
          <IconButton 
            onClick={() => handleButtonClick('description')} 
            disabled={isDragMode}
            sx={{ 
              width: { xs: 28, sm: 32 }, 
              height: { xs: 28, sm: 32 },
              opacity: isDragMode ? 0.5 : 1,
              '&:disabled': {
                cursor: 'not-allowed',
              },
            }}
          >
            <DescriptionIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: darkMode ? '#E5E7EB' : 'inherit' }} />
          </IconButton>
        </Box>
        <IconButton 
          onClick={handleMenuClick} 
          disabled={isDragMode}
          sx={{ 
            width: { xs: 28, sm: 32 }, 
            height: { xs: 28, sm: 32 },
            opacity: isDragMode ? 0.5 : 1,
            '&:disabled': {
              cursor: 'not-allowed',
            },
          }}
          aria-controls={menuOpen ? 'course-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? 'true' : undefined}
        >
          <MoreVertIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: darkMode ? '#E5E7EB' : 'inherit' }} />
        </IconButton>
        <Menu
          id="course-menu"
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'course-menu-button',
          }}
          PaperProps={{
            sx: {
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              minWidth: 150,
            },
          }}
        >
          <MenuItem onClick={handleViewDetails}>
            <ListItemIcon>
              <VisibilityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>View Details</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleRemove}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Remove</ListItemText>
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
};

export default CourseCard; 