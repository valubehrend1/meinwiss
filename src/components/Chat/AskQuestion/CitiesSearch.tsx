import React, { useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete
} from './AskQuestionsStyle'; // Importa los estilos desde el archivo separado

import { countries } from 'countries-list';

/* import {
  GetState,
  GetCity,
} from "react-country-state-city"; */

const MainFilters: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const countryNames = Object.values(countries).map(country => country.name);

  const handlePlaceChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedPlace(newValue);
  };
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
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder='Search' sx={{ borderRadius: '80px' }} />
        )}
      />
    </>
  );
};

export default MainFilters;
