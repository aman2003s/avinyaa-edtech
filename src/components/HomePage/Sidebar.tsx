import React, { useState } from 'react';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpIcon from '@mui/icons-material/Help';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SpaIcon from '@mui/icons-material/Spa';

interface SidebarProps {
  darkMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode = false }) => {
  const [activeIcon, setActiveIcon] = useState('home');

  return (
    <aside className={`w-20 mx-4 my-4 py-2 px-4 space-y-2 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-700' : 'bg-gradient-to-b from-[rgb(166,127,41)] to-[rgb(166,127,30)]'} flex flex-col items-center rounded-2xl transition-colors duration-300 h-[calc(100vh-2rem)] overflow-y-auto`}>
      {/* Logo */}
      <div className="flex items-center justify-center flex-shrink-0">
        <SpaIcon 
          sx={{ 
            fontSize: 32, 
            color: 'white',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }} 
        />
      </div>

      {/* Main Frosted Glass Container */}
      <div 
        className="rounded-full p-1 flex flex-col items-center space-y-1 flex-shrink-0"
        style={{
          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* Top Icon - AutoAwesomeMosaic */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'home' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('home')}
        >
          {activeIcon === 'home' ? (
            <AutoAwesomeMosaicIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <AutoAwesomeMosaicOutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
        </button>
        
        {/* Second Icon - Article */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'dashboard' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('dashboard')}
        >
          {activeIcon === 'dashboard' ? (
            <ArticleIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <ArticleOutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
        </button>
        
        {/* Third Icon - InsertInvitation */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'event' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('event')}
        >
          {activeIcon === 'event' ? (
            <InsertInvitationIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <InsertInvitationOutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
        </button>
        
        {/* Fourth Icon - Campaign */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'notifications' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('notifications')}
        >
          {activeIcon === 'notifications' ? (
            <CampaignIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <CampaignOutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
        </button>
        
        {/* Fifth Icon - AppRegistration */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'settings' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('settings')}
        >
          <AppRegistrationIcon 
            sx={{ 
              fontSize: 24, 
              color: activeIcon === 'settings' 
                ? (darkMode ? '#374151' : '#92400E')
                : 'white'
            }} 
          />
        </button>
        
        {/* Sixth Icon - Groups */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'help' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('help')}
        >
          {activeIcon === 'help' ? (
            <GroupsIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <Groups2OutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
        </button>
        
        {/* Seventh Icon - Email */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'email' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('email')}
        >
          {activeIcon === 'email' ? (
            <EmailIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <EmailOutlinedIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
        </button>
        
        {/* Eighth Icon - AccessTime */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'time' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('time')}
        >
          <AccessTimeIcon 
            sx={{ 
              fontSize: 24, 
              color: activeIcon === 'time' 
                ? (darkMode ? '#374151' : '#92400E')
                : 'white'
            }} 
          />
        </button>
        
        {/* Ninth Icon - Help */}
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            activeIcon === 'help2' ? 'bg-white/80 shadow-lg' : 'hover:bg-white/30'
          }`}
          onClick={() => setActiveIcon('help2')}
        >
          {activeIcon === 'help2' ? (
            <HelpIcon 
              sx={{ 
                fontSize: 24, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <HelpOutlineIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white' 
              }} 
            />
          )}
    </button>
      </div>

      {/* Separate SavedSearch Frosted Glass Container - Aligned but not combined */}
      <div 
        className="rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20 flex-shrink-0"
        style={{
          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.25)',
        }}
      >
        <button 
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/30 ${
            activeIcon === 'savedSearch' ? 'bg-white/80 shadow-lg' : ''
          }`}
          onClick={() => setActiveIcon('savedSearch')}
        >
          <SavedSearchIcon 
            sx={{ 
              fontSize: 24, 
              color: activeIcon === 'savedSearch' 
                ? (darkMode ? '#374151' : '#92400E')
                : 'white'
            }} 
          />
        </button>
      </div>

      {/* Spacer to push logout to bottom */}
      <div className="flex-1"></div>

      {/* Separate Logout Frosted Glass Container */}
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20 flex-shrink-0"
        style={{
          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.25)',
        }}
      >
        <button 
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/30 ${
            activeIcon === 'logout' ? 'bg-white/80 shadow-lg' : ''
          }`}
          onClick={() => setActiveIcon('logout')}
        >
          {activeIcon === 'logout' ? (
            <LogoutIcon 
              sx={{ 
                fontSize: 20, 
                color: darkMode ? '#374151' : '#92400E' 
              }} 
            />
          ) : (
            <LogoutOutlinedIcon 
              sx={{ 
                fontSize: 20, 
                color: 'white' 
              }} 
            />
          )}
    </button>
      </div>
  </aside>
);
};

export default Sidebar; 