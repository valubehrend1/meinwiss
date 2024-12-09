import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/system';

import { useSelector } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PdfExport from '../../Chat/PdfExport';
import { selectMessages } from '../../../config/features/ChatSlice';

const ActionButton = styled(Button)({
  marginBottom: '20px',
  borderRadius: '20px',
  padding: '10px 20px',
  textTransform: 'none',
});

interface SharedModalProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  info: string;
  content: string;
  submitString: string;
  alternativeString: string;
  onSubmit: () => void;
  onCancel: () => void;
  isPdf?: boolean;
}

const SharedModal: React.FC<SharedModalProps> = ({
  open,
  setIsOpen,
  info,
  content,
  submitString,
  alternativeString,
  onSubmit,
  onCancel,
  isPdf
}) => {
  const messages = useSelector(selectMessages);

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={() => setIsOpen(false)}
    >
      <Box sx={{ display: 'flex', gap: '0px' }}>
        <Box>
          <DialogTitle id="alert-dialog-title" variant='h5'>{info}</DialogTitle>
        </Box>
        <Box sx={{ marginRight: '20px', marginTop: '20px' }}>
          <IconButton
            aria-label="close"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" variant='h4'>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {
          isPdf ? (
            <>
              <PDFDownloadLink
                document={<PdfExport messages={messages} />}
                fileName="conversation.pdf"
                style={{ textDecoration: 'none' }} // Remueve subrayado
              >
                <ActionButton color="secondary" variant="contained">
                  {alternativeString}
                </ActionButton>
              </PDFDownloadLink>
              <ActionButton onClick={onCancel} color="primary" variant="contained">
                {submitString}
              </ActionButton>
            </>
          ) : (
            <ActionButton onClick={onSubmit} color="primary" variant="contained">
              {submitString}
            </ActionButton>
          )
        }
      </DialogActions>
    </Dialog>
  );
};

export default SharedModal;
