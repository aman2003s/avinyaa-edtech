import React, { useState } from 'react';
import { 
  Button, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText,
  IconButton 
} from '@mui/material';
import { 
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon,
  Notifications as NotificationsIcon,
  Edit as EditIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

interface ProfileCardProps {
  darkMode?: boolean;
}

const languages = [
  { code: 'En', name: 'English', flag: '🇺🇸' },
  { code: 'Hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'Fr', name: 'French', flag: '🇫🇷' },
  { code: 'Jp', name: 'Japanese', flag: '🇯🇵' },
  { code: 'Zh', name: 'Chinese', flag: '🇨🇳' },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ darkMode = false }) => {
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  
  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    handleLanguageClose();
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleEditProfile = () => {
    handleProfileClose();
    // Add edit profile logic here
    console.log('Edit Profile clicked');
  };

  const handleLogout = () => {
    handleProfileClose();
    // Add logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <IconButton 
          className="w-10 h-10 shadow hover:shadow-md transition-all"
          sx={{
            backgroundColor: darkMode ? '#4B5563' : 'white',
            color: darkMode ? '#D1D5DB' : '#4B5563',
            '&:hover': {
              backgroundColor: darkMode ? '#6B7280' : '#F3F4F6',
            },
          }}
        >
          <NotificationsIcon />
        </IconButton>
        
        <Button
          onClick={handleLanguageClick}
          className="h-10 shadow hover:shadow-md transition-all"
          sx={{
            backgroundColor: darkMode ? '#4B5563' : 'white',
            color: darkMode ? '#D1D5DB' : '#374151',
            textTransform: 'none',
            borderRadius: '20px',
            px: 1,
            py: 0.5,
            minWidth: 'auto',
            '&:hover': {
              backgroundColor: darkMode ? '#6B7280' : '#F3F4F6',
            },
          }}
          endIcon={<ExpandMoreIcon />}
        >
          <LanguageIcon sx={{ mr: 0.5, fontSize: 20 }} />
          {selectedLanguage.code}
        </Button>
        
        <Menu
          anchorEl={languageAnchorEl}
          open={Boolean(languageAnchorEl)}
          onClose={handleLanguageClose}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              minWidth: 150,
              backgroundColor: darkMode ? '#374151' : 'white',
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {languages.map((language) => (
            <MenuItem
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              selected={selectedLanguage.code === language.code}
              sx={{
                color: darkMode ? '#E5E7EB' : '#374151',
                '&:hover': {
                  backgroundColor: darkMode ? '#4B5563' : '#F3F4F6',
                },
                '&.Mui-selected': {
                  backgroundColor: darkMode ? '#3B82F6' : '#DBEAFE',
                  '&:hover': {
                    backgroundColor: darkMode ? '#2563EB' : '#BFDBFE',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <span style={{ fontSize: '16px' }}>{language.flag}</span>
              </ListItemIcon>
              <ListItemText 
                primary={language.name}
                secondary={language.code}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
                secondaryTypographyProps={{
                  fontSize: '0.75rem',
                  color: darkMode ? '#9CA3AF' : '#6B7280',
                }}
              />
            </MenuItem>
          ))}
        </Menu>
      </div>
      
      <button 
        onClick={handleProfileClick}
        className={`h-10 ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-50'} rounded-full p-0.5 shadow hover:shadow-md transition-all flex items-center gap-0.5`}
      >
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" />
        </div>
        <span className={`material-icons ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-thin`}>expand_more</span>
      </button>

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            minWidth: 150,
            backgroundColor: darkMode ? '#374151' : 'white',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleEditProfile}
          sx={{
            color: darkMode ? '#E5E7EB' : '#374151',
            '&:hover': {
              backgroundColor: darkMode ? '#4B5563' : '#F3F4F6',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <EditIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Edit Profile"
            primaryTypographyProps={{
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          />
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{
            color: darkMode ? '#E5E7EB' : '#374151',
            '&:hover': {
              backgroundColor: darkMode ? '#4B5563' : '#F3F4F6',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <LogoutIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Logout"
            primaryTypographyProps={{
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileCard; 