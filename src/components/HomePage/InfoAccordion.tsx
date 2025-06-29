import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { calendarData, todoData, announcementData } from '../../data/accordionData';

interface InfoAccordionProps {
  darkMode?: boolean;
}

const InfoAccordion: React.FC<InfoAccordionProps> = ({ darkMode = false }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const getColorClasses = (color: string, darkMode: boolean) => {
    const colorMap = {
      blue: darkMode ? 'bg-blue-900/20' : 'bg-blue-50',
      green: darkMode ? 'bg-green-900/20' : 'bg-green-50',
      orange: darkMode ? 'bg-orange-900/20' : 'bg-orange-50',
      yellow: darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50',
      purple: darkMode ? 'bg-purple-900/20' : 'bg-purple-50',
      red: darkMode ? 'bg-red-900/20' : 'bg-red-50'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getBorderColor = (color: string) => {
    const borderMap = {
      blue: 'border-blue-400',
      green: 'border-green-400',
      orange: 'border-orange-400',
      yellow: 'border-yellow-400',
      purple: 'border-purple-400',
      red: 'border-red-400'
    };
    return borderMap[color as keyof typeof borderMap] || borderMap.blue;
  };

  const getTextColor = (color: string, darkMode: boolean) => {
    const textMap = {
      blue: darkMode ? 'text-blue-200' : 'text-blue-800',
      green: darkMode ? 'text-green-200' : 'text-green-800',
      orange: darkMode ? 'text-orange-200' : 'text-orange-800',
      yellow: darkMode ? 'text-yellow-200' : 'text-yellow-800',
      purple: darkMode ? 'text-purple-200' : 'text-purple-800',
      red: darkMode ? 'text-red-200' : 'text-red-800'
    };
    return textMap[color as keyof typeof textMap] || textMap.blue;
  };

  return (
    <div className="bg-transparent rounded-xl flex flex-col gap-3">
      {/* Calendar Section */}
      <div className={`${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg shadow-sm transition-all`}>
        <button 
          className={`flex justify-between items-center w-full ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} rounded-lg p-3 transition-all`}
          onClick={() => toggleSection('calendar')}
        >
          <span>Calendar</span>
          {openSection === 'calendar' ? (
            <ExpandLessIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          ) : (
            <ExpandMoreIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          )}
        </button>
        {openSection === 'calendar' && (
          <div className={`px-3 pb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-h-[240px] overflow-y-auto scroll-smooth accordion-content`} style={{
            scrollbarWidth: 'thin',
            scrollbarColor: darkMode ? '#6B7280 #374151' : '#D1D5DB #F3F4F6',
          }}>
            <div className="space-y-2 text-sm">
              {calendarData.map((event) => (
                <div key={event.id} className={`flex items-center gap-2 p-2 rounded ${getColorClasses(event.color, darkMode)}`}>
                  <div className={`w-2 h-2 bg-${event.color}-500 rounded-full`}></div>
                  <span>{event.title}</span>
                  <span className="text-xs opacity-70">{event.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* To Do Section */}
      <div className={`${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg shadow-sm transition-all`}>
        <button 
          className={`flex justify-between items-center w-full ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} rounded-lg p-3 transition-all`}
          onClick={() => toggleSection('todo')}
        >
          <span>To Do</span>
          {openSection === 'todo' ? (
            <ExpandLessIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          ) : (
            <ExpandMoreIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          )}
        </button>
        {openSection === 'todo' && (
          <div className={`px-3 pb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-h-[240px] overflow-y-auto scroll-smooth accordion-content`} style={{
            scrollbarWidth: 'thin',
            scrollbarColor: darkMode ? '#6B7280 #374151' : '#D1D5DB #F3F4F6',
          }}>
            <div className="space-y-2 text-sm">
              {todoData.map((item) => (
                <div key={item.id} className="flex items-center gap-2 p-2 rounded">
                  <input type="checkbox" className="rounded" defaultChecked={item.completed} />
                  <span className={item.completed ? 'line-through opacity-60' : ''}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Announcement Section */}
      <div className={`${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg shadow-sm transition-all`}>
        <button 
          className={`flex justify-between items-center w-full ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} rounded-lg p-3 transition-all`}
          onClick={() => toggleSection('announcement')}
        >
          <div className="flex items-center gap-2">
            <span>Announcement</span>
            <span className="bg-yellow-600 text-white rounded-full px-2 text-xs ml-1">05</span>
          </div>
          {openSection === 'announcement' ? (
            <ExpandLessIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          ) : (
            <ExpandMoreIcon sx={{ fontSize: 20, color: darkMode ? '#9CA3AF' : '#6B7280' }} />
          )}
        </button>
        {openSection === 'announcement' && (
          <div className={`px-3 pb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-h-[240px] overflow-y-auto scroll-smooth accordion-content`} style={{
            scrollbarWidth: 'thin',
            scrollbarColor: darkMode ? '#6B7280 #374151' : '#D1D5DB #F3F4F6',
          }}>
            <div className="space-y-3 text-sm">
              {announcementData.map((announcement) => (
                <div key={announcement.id} className={`p-2 rounded ${getColorClasses(announcement.color, darkMode)} border-l-4 ${getBorderColor(announcement.color)}`}>
                  <div className={`font-medium ${getTextColor(announcement.color, darkMode)}`}>{announcement.title}</div>
                  <div className="text-xs mt-1">{announcement.description}</div>
                  <div className="text-xs mt-1 opacity-70">{announcement.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoAccordion; 