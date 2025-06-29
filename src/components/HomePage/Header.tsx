import React from 'react';
import type { ReactNode } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type HeaderProps = {
  darkMode?: boolean;
  children?: ReactNode;
  showHamburger?: boolean;
  onHamburgerClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ darkMode = false, children, showHamburger = false, onHamburgerClick }) => (
  <header className="mx-2 sm:mx-4 lg:mx-8 mt-2 sm:mt-4 mb-4 sm:mb-6">
    <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-[#f3eedd] border-yellow-900'} border rounded-xl lg:rounded-2xl py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-colors duration-300`}>
      <div className="flex items-center gap-3">
        {showHamburger && (
          <IconButton
            onClick={onHamburgerClick}
            sx={{
              color: darkMode ? '#E5E7EB' : '#374151',
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <div className={`text-[18px]  md:text-[20px] lg:text-[28px] font-medium ${darkMode ? 'text-gray-200' : 'text-yellow-800'} text-center leading-tight`}>
          Welcome to NYU Kreativespace, John
        </div>
      </div>
      {children}
    </div>
  </header>
);

export default Header; 