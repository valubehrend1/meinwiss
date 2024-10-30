import * as React from 'react';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../config/features/ChatSlice';
import { Box, Typography } from '@mui/material';
import theme from '../../theme';

interface PdfExportProps {
  ref: React.Ref<HTMLDivElement>;
}

// Styled components
const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column', // Cambiado a column para un diseño vertical
  width: '100%',
  height: '100vh', // Ajusta según necesites
});


const Content = styled('div')({
  backgroundColor: 'white',
  padding: '20px',
});

const ProcedureTitle = styled('h1')({
  fontSize: '24px', // Ajusta según necesites
  marginBottom: '10px',
});

const IntroductionText = styled('p')({
  marginBottom: '20px',
});

const StepTitle = styled(Typography)({
  color: '#333', // Color oscuro para el título del paso
  marginBottom: '5px',
});

const StepDescription = styled(Typography)({
  marginBottom: '15px',
  marginTop: '15px'
});

const PdfExport: React.FC<PdfExportProps> = ({ ref }) => {
  const messages = useSelector(selectMessages);

  console.log(messages)
  return (
    <MainContainer ref={ref}>
      <Content>
        {/* Iterar sobre los pasos como sea necesario */}
        <Box sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: '12px', padding: '20px', width: '100%', textAlign: 'center' }}>
          <ProcedureTitle>Chat theme: {messages[0].content}</ProcedureTitle>
          <IntroductionText>
            Downloaded conversation
          </IntroductionText>
        </Box>
        {messages?.map((message, index) => {
          let response; // Variable para almacenar la respuesta

          if (index % 2 === 0) { // Si el índice es par
            response = 'User Question'; // Asignación si es usuario
          } else { // Si el índice es impar
            response = 'Lupai Answer'; // Asignación si es asistente
          }

          return (
            <>
              <Box sx={{ width: '20%', textAlign: 'center' }}>
                <StepTitle
                  sx={{
                    color: response == 'User Question' ? theme.palette.primary.main : '#FFF',
                    backgroundColor: response == 'Lupai Answer' ? theme.palette.primary.main : theme.palette.secondary.main,
                    borderRadius: '12px',
                    padding: '12px',
                    marginTop: '20px',
                  }}
                  variant='h4'
                >
                  {response}
                </StepTitle >
              </Box>
              <StepDescription variant='h5'>
                {message.content}
              </StepDescription>
            </>
          );
        })}
      </Content >
    </MainContainer >
  );
};

export default PdfExport;
