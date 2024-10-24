/* import React from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onDownload: () => void;
  onNewQuestion: () => void;
}

const StyledModal = styled(Modal)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  borderRadius: '20px',
  width: '90%',
  maxWidth: '500px',
}));

const CloseButton = styled(CloseIcon)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  color: theme.palette.grey[500],
  cursor: 'pointer',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.success.main,
  },
}));

const NewQuestionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.common.black,
  '&:hover': {
    backgroundColor: theme.palette.success.main,
  },
}));

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ open, onClose, onDownload, onNewQuestion }) => {
  return (
    <StyledModal open={open} onClose={onClose}>
      <ModalContent>
        <CloseButton onClick={onClose} />
        <Typography variant="body1" align="center" gutterBottom>
          When you start a new search, your current search will disappear and you will not be able to read the results again.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Are you sure you want to start a new search?
        </Typography>
        <ButtonContainer>
          <DownloadButton variant="contained" onClick={onDownload}>
            Download this conversation
          </DownloadButton>
          <NewQuestionButton variant="contained" onClick={onNewQuestion}>
            New Question
          </NewQuestionButton>
        </ButtonContainer>
      </ModalContent>
    </StyledModal>
  );
};

export default ConfirmationModal; */

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
  onCancel: () => void;
}

const SharedModal: React.FC<SharedModalProps> = ({ open, info, content, submitString, alternativeString, onNewQuestion, onCancel }) => {
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
        <ActionButton onClick={onCancel} color="error" variant="contained">
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
