import React from 'react';

export type StatusBadgeProps = {
  status: string;
  closed?: boolean;
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, closed = false }) => (
  <span className={`absolute top-4 left-4 ${closed ? 'bg-white' : 'bg-gray-200'} text-xs px-2 py-1 rounded`}>
    {status}
  </span>
);

export default StatusBadge; 