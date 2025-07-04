import React, { useState } from 'react';

import { Grid } from '@mui/material';
import {
  InputField,
  SearchBarError,
  SearchFiltersLabel,
} from './AskQuestion/AskQuestionsStyle.tsx';

import CountriesSearch from './CountriesSearch';
import StateSearch from './StateSearch.tsx';
import TimeFrameInput from './TimeFrameInput.tsx';

import { useDispatch, useSelector } from 'react-redux';
import { setAge, selectAge } from '../../../config/features/ChatSlice.tsx';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const age = useSelector(selectAge);
  const [userAge, setUserAge] = useState<string | null>(null);

  const errorMessage = !age || parseInt(age) < 1 || parseInt(age) > 120
    ? "Your age must be between 1 and 120"
    : "Please enter your age"

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setUserAge(newAge);
  };

  const handleAgeBlur = () => {
    dispatch(setAge(userAge));
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>{t('country_of_origin')}</SearchFiltersLabel>
          <CountriesSearch countryError={countryError} />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>{t('location')}</SearchFiltersLabel>
          <StateSearch locationError={locationError} />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>{t('time_in_germany')}</SearchFiltersLabel>
          <TimeFrameInput timeError={timeError} />
        </Grid>
        <Grid item xs={12} md={2}>
          <SearchFiltersLabel>{t('age')}</SearchFiltersLabel>
          <InputField
            fullWidth
            type="number"
            inputProps={{ min: 1, max: 120 }}
            placeholder={t('your_age')}
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
