import React from 'react';

interface QuickActionsProps {
  darkMode?: boolean;
}

const actions = [
  { icon: 'menu_book', color: 'bg-orange-400' },
  { icon: 'translate', color: 'bg-green-500' },
  { icon: 'science', color: 'bg-blue-400' },
  { icon: 'settings', color: 'bg-gray-400' },
  { icon: 'text_fields', color: 'bg-purple-500' },
];

const QuickActions: React.FC<QuickActionsProps> = ({ darkMode = false }) => (
  <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl p-4 shadow transition-colors duration-300`}>
    <div className="flex gap-4 justify-between">
      {actions.map((action, idx) => (
        <button key={idx} className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
          <span className="material-icons text-white">{action.icon}</span>
        </button>
      ))}
    </div>
  </div>
);

export default QuickActions;
