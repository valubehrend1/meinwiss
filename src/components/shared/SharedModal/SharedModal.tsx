import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useSelector } from 'react-redux';


import { PDFDownloadLink } from '@react-pdf/renderer';

import PdfExport from '../../Chat/PdfExport';
import { selectMessages } from '../../../config/features/ChatSlice';

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
  isPdf?: boolean;
}

const SharedModal: React.FC<SharedModalProps> = ({
  open,
  info,
  content,
  submitString,
  alternativeString,
  onNewQuestion,
  onCancel,
  isPdf }) => {
  const messages = useSelector(selectMessages);

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
        {
          isPdf ? (
            <PDFDownloadLink document={<PdfExport messages={messages} />} fileName="somename.pdf">
              {alternativeString}
            </PDFDownloadLink>
          ) : (
            <ActionButton onClick={onNewQuestion} color="primary" variant="contained">
              {submitString}
            </ActionButton>
          )
        }
        <ActionButton onClick={onNewQuestion} color="primary" variant="contained">
          {submitString}
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default SharedModal;
