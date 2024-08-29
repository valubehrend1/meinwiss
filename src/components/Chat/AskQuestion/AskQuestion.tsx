import React from 'react';

import { InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  SectionContainer,
  Title,
  Description,
  SearchBarContainer,
  SearchBar,
  AskButton,
} from './AskQuestionsStyle';
import theme from '../../../theme';

import MainFilters from './MainFilters';

const AskQuestion: React.FC = () => {
  return (
    <SectionContainer>
      {/* Título y Descripción */}
      <Title variant='h3'>How can Lupai help you today?</Title>
      <Description variant='h5'>
        You can ask questions about your work or migration status in different languages. You can ask in English o puedes preguntar en español. Du kannst auf Deutsch fragen oppure si può chiedere in italiano. You can try aswell in many other languages! As much detail as you provide, the more accurate will the answer Lupai can give you.
      </Description>

      {/* Barra de búsqueda */}
      <SearchBarContainer>
        <SearchBar
          fullWidth
          placeholder='Try questions like “How do I validate my university degree in Germany?” or “How do I apply for a Rote Karte?”'
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: theme.palette.primary.main }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchBarContainer>

      <MainFilters />

      {/* Botón principal */}
      <Box sx={{ marginTop: '40px' }}>
        <AskButton variant="contained" size="large">
          Ask question
        </AskButton>
      </Box>
    </SectionContainer>
  );
};

export default AskQuestion;
