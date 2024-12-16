import React, { useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete,
  SearchBarError
} from './AskQuestion/AskQuestionsStyle'; // Importa los estilos desde el archivo separado

import { countries } from 'countries-list';
import { useDispatch } from 'react-redux';
import { setOriginCountry } from '../../../config/features/ChatSlice';

interface CountriesSearchProps {
  countryError: boolean;
}


const CountriesSearch: React.FC<CountriesSearchProps> = ({ countryError }) => {
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
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder='Search' />
        )}
      />
      {countryError && <SearchBarError severity="error">Please select a country</SearchBarError>}
    </>
  );
};

export default CountriesSearch;
