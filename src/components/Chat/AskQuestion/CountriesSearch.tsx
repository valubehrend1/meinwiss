import React, { useEffect, useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete,
  SearchBarError
} from './AskQuestion/AskQuestionsStyle'; // Importa los estilos desde el archivo separado

import { countries } from 'countries-list';
import { useDispatch, useSelector } from 'react-redux';
import { setOriginCountry, selectOriginCountry } from '../../../config/features/ChatSlice';

interface CountriesSearchProps {
  countryError: boolean;
}


const CountriesSearch: React.FC<CountriesSearchProps> = ({ countryError }) => {
  const dispatch = useDispatch();
  const originCountry = useSelector(selectOriginCountry);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const countryNames = Object.values(countries).map(country => country.name);

  const handlePlaceChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedPlace(newValue);
    dispatch(setOriginCountry(newValue));
  };

  useEffect(() => {
    console.log("SelectedPlace", originCountry);
  }, [originCountry]);


  return (
    <>
      <Autocomplete
        options={countryNames}
        value={selectedPlace}
        onChange={handlePlaceChange}
        inputValue={selectedPlace || ''}
        onInputChange={(_event, newInputValue) => {
          setSelectedPlace(newInputValue);
        }}
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
