import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilos personalizados para los botones
const ActionButton = styled(Button)({
  borderRadius: '20px',
  padding: '10px 20px',
});

interface SharedModalProps {
  open: boolean;
  info: string;
  content: string;
  submitString: string;
  alternativeString: string;
  onNewQuestion: () => void;
  onDownload: () => void;
  onCancel: () => void;
}

const SharedModal: React.FC<SharedModalProps> = ({ open, info, content, submitString, alternativeString, onNewQuestion, onDownload, onCancel }) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{info}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ActionButton onClick={onDownload} color="error" variant="contained">
          {alternativeString}
        </ActionButton>
        <ActionButton onClick={onNewQuestion} color="primary" variant="contained">
          {submitString}
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default SharedModal;
