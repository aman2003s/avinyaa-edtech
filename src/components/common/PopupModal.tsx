import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { usePopupContext } from '../../context/PopupContext';

const PopupModal: React.FC = () => {
  const { isOpen, popupData, closePopup } = usePopupContext();

  if (!popupData) return null;

  const getButtonLabel = (buttonType: string) => {
    switch (buttonType) {
      case 'volume':
        return 'Volume Button';
      case 'assignment':
        return 'Assignment Button';
      case 'description':
        return 'Description Button';
      case 'menu':
        return 'Menu Action';
      case 'favorite':
        return 'Favorite/Heart Button';
      default:
        return 'Unknown Button';
    }
  };

  const getMenuActionText = () => {
    if (popupData.menuAction) {
      return popupData.menuAction.charAt(0).toUpperCase() + popupData.menuAction.slice(1);
    }
    return 'Menu action triggered';
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closePopup}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h6" component="div">
          {popupData.buttonType === 'menu' ? 'Menu Action' : 'Button Clicked'}
        </Typography>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 0 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {popupData.buttonType === 'menu' ? (
            <>
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                {getMenuActionText()}
              </Box>
              {' for '}
              <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                {popupData.courseTitle}
              </Box>
              {' ('}
              <Box component="span" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                {popupData.courseCode}
              </Box>
              {')'}
            </>
          ) : (
            <>
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                {getButtonLabel(popupData.buttonType)}
              </Box>
              {' clicked for '}
              <Box component="span" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                {popupData.courseTitle}
              </Box>
              {' ('}
              <Box component="span" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                {popupData.courseCode}
              </Box>
              {')'}
            </>
          )}
        </Typography>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={closePopup} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupModal; 