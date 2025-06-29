export interface PopupData {
  buttonType: 'volume' | 'assignment' | 'description' | 'menu' | 'favorite';
  courseTitle: string;
  courseCode: string;
  menuAction?: 'view details' | 'remove';
}

export interface PopupContextType {
  isOpen: boolean;
  popupData: PopupData | null;
  openPopup: (data: PopupData) => void;
  closePopup: () => void;
} 