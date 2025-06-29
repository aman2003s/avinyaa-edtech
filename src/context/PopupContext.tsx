import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { PopupData, PopupContextType } from '../types/popup';

const PopupContext = createContext<PopupContextType | undefined>(undefined);

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState<PopupData | null>(null);

  const openPopup = (data: PopupData) => {
    setPopupData(data);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupData(null);
  };

  const value: PopupContextType = {
    isOpen,
    popupData,
    openPopup,
    closePopup,
  };

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopupContext must be used within a PopupProvider');
  }
  return context;
}; 