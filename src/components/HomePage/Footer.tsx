import React from 'react';

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode = false }) => (
  <footer className={`flex justify-between items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-400'} mt-4 px-8 pb-2`}>
    <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>Avinyaa EdTech</span>
    <div className="flex gap-4">
      <a href="#" className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} no-underline hover:no-underline`}>Privacy Policy</a>
      <a href="#" className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} no-underline hover:no-underline`}>Cookie Notice</a>
      <a href="#" className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} no-underline hover:no-underline`}>Acceptable User Policy</a>
      <a href="#" className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} no-underline hover:no-underline`}>Facebook</a>
      <a href="#" className={`${darkMode ? 'text-gray-400' : 'text-gray-400'} no-underline hover:no-underline`}>X.com</a>
    </div>
  </footer>
);

export default Footer; 