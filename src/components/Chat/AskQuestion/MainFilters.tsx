import React, { useEffect, useState } from 'react';

import { Grid } from '@mui/material';
import {
  InputField,
  SearchBarError,
  SearchFiltersLabel,
} from './AskQuestion/AskQuestionsStyle.tsx'; // Importa los estilos desde el archivo separado

import CountriesSearch from './CountriesSearch'
import StateSearch from './StateSearch.tsx'
import TimeFrameInput from './TimeFrameInput.tsx'

import { useDispatch, useSelector } from 'react-redux';
import { setAge, selectAge } from '../../../config/features/ChatSlice.tsx';

interface MainFiltersProps {
  ageError: boolean;
  countryError: boolean;
  locationError: boolean;
  timeError: boolean;
}

const MainFilters: React.FC<MainFiltersProps> = ({
  ageError,
  countryError,
  locationError,
  timeError
}) => {
  const dispatch = useDispatch();
  const age = useSelector(selectAge);
  const [userAge, setUserAge] = useState<string | null>(null);

  const errorMessage = parseInt(age) < 1 || parseInt(age) > 120
    ? "Your age must be between 1 and 120"
    : "Please enter your age"

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setUserAge(newAge);
  };

  const handleAgeBlur = () => {
    dispatch(setAge(userAge));
  };

  useEffect(() => {
    console.log("User age:", age);
  }, [age]);


  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Country of origin</SearchFiltersLabel>
          <CountriesSearch countryError={countryError} />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Location</SearchFiltersLabel>
          <StateSearch locationError={locationError} />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Time in Germany</SearchFiltersLabel>
          <TimeFrameInput timeError={timeError} />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>Age</SearchFiltersLabel>
          <InputField
            fullWidth
            type="number"
            inputProps={{ min: 1, max: 120 }}
            placeholder="Your age"
            variant="outlined"
            onChange={handleAgeChange}
            onBlur={handleAgeBlur} />
          {ageError &&
            <SearchBarError
              severity="error">
              {errorMessage}
            </SearchBarError>}
        </Grid>
      </Grid>
    </>
  );
};

export default MainFilters;
