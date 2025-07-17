import React, { useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete,
  SearchBarError
} from './AskQuestion/AskQuestionsStyle';

import { countries } from 'countries-list';
import { useDispatch } from 'react-redux';
import { setOriginCountry } from '../../../config/features/ChatSlice';

import { useTranslation } from 'react-i18next';

interface CountriesSearchProps {
  countryError: boolean;
}


const CountriesSearch: React.FC<CountriesSearchProps> = ({ countryError }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const countryNames = Object.values(countries).map(country => country.name);

  const handlePlaceChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedPlace(newValue);
    dispatch(setOriginCountry(newValue));
  };

  const handleInputChange = (_event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return (
    <>
      <Autocomplete
        options={countryNames}
        value={selectedPlace}
        inputValue={inputValue}
        onChange={handlePlaceChange}
        onInputChange={handleInputChange}
        isOptionEqualToValue={(option, value) => option === value}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder={t('search')} />
        )}
      />
      {countryError && <SearchBarError severity="error">Please select a country</SearchBarError>}
    </>
  );
};

export default CountriesSearch;
