import React from 'react';

export type ActionIconsProps = {
  onAction1Click?: () => void;
  onAction2Click?: () => void;
  onAction3Click?: () => void;
  color?: string;
  closed?: boolean;
  small?: boolean;
};

const ActionIcons: React.FC<ActionIconsProps> = ({
  onAction1Click,
  onAction2Click,
  onAction3Click,
  color = 'white',
  small = false,
}) => (
  <div className={`flex gap-1 ${color !== 'white' ? 'text-white' : 'text-gray-500'}`}>
    <button onClick={onAction1Click} className={small ? 'w-8 h-8 flex items-center justify-center p-0' : 'p-2'}><span className={`material-icons ${small ? 'text-[20px]' : 'text-base'}`}>volume_up</span></button>
    <button onClick={onAction2Click} className={small ? 'w-8 h-8 flex items-center justify-center p-0' : 'p-2'}><span className={`material-icons ${small ? 'text-[20px]' : 'text-base'}`}>assignment</span></button>
    <button onClick={onAction3Click} className={small ? 'w-8 h-8 flex items-center justify-center p-0' : 'p-2'}><span className={`material-icons ${small ? 'text-[20px]' : 'text-base'}`}>description</span></button>
  </div>
);

export default ActionIcons; 