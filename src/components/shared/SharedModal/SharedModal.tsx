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
  onSubmit: () => void;
  onCancel: () => void;
  isPdf?: boolean;
}

const SharedModal: React.FC<SharedModalProps> = ({
  open,
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
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" variant='h5'>{info}</DialogTitle>
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
