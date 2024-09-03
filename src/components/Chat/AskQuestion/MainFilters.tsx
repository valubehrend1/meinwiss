import React from 'react';

import { Grid } from '@mui/material';
import {
  InputField,
  SearchFiltersLabel,
} from './AskQuestionsStyle'; // Importa los estilos desde el archivo separado

import CountriesSearch from './CountriesSearch'
import StateSearch from './StateSearch.tsx'
import TimeFrameInput from './TimeFrameInput.tsx'


const MainFilters: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Country of origin</SearchFiltersLabel>
          <CountriesSearch />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Location</SearchFiltersLabel>
          <StateSearch />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Time in Germany</SearchFiltersLabel>
          <TimeFrameInput />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Age</SearchFiltersLabel>
          <InputField fullWidth placeholder="Your age" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={1}>
        </Grid>
      </Grid>
    </>
  );
};

export default MainFilters;
