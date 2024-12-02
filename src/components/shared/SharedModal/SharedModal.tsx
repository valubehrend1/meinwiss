import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  info: string;
  content: string;
  submitString: string;
  alternativeString: string;
  onNewQuestion: () => void;
  onCancel: () => void;
}

const SharedModal: React.FC<SharedModalProps> = ({
  open,
  info,
  content,
  submitString,
  alternativeString,
  onNewQuestion,
  onCancel,
}) => {
  const messages = useSelector(selectMessages);

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" variant='h5'>{info}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" variant='h4'>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <PDFDownloadLink
          document={<PdfExport messages={messages} />}
          fileName="conversation.pdf"
          style={{ textDecoration: 'none' }} // Remueve subrayado
        >
          <ActionButton color="secondary" variant="contained">
            {alternativeString}
          </ActionButton>
        </PDFDownloadLink>
        <ActionButton onClick={onNewQuestion} color="primary" variant="contained">
          {submitString}
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default SharedModal;
