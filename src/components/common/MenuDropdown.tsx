import React from 'react';

export type MenuDropdownProps = {
  onClick?: () => void;
  className?: string;
  small?: boolean;
};

const MenuDropdown: React.FC<MenuDropdownProps> = ({ onClick, className = '', small = false }) => (
  <button className={`bg-white rounded-full ${small ? 'w-8 h-8 flex items-center justify-center p-0' : 'p-2'} shadow ${className}`} onClick={onClick}>
    <span className={`material-icons ${small ? 'text-[20px]' : ''}`}>more_vert</span>
  </button>
);

export default MenuDropdown; 