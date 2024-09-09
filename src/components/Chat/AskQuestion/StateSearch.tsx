import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@mui/material';
import { IState, State } from 'country-state-city';
import { InputFieldAutoComplete } from './AskQuestion/AskQuestionsStyle';

const StateSearch: React.FC = () => {
  const [states, setStates] = useState<IState[]>([]);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  useEffect(() => {
    // Obtener estados de Alemania, utilizando el código ISO 'DE'
    const fetchedStates = State.getStatesOfCountry('DE') || [];
    setStates(fetchedStates);
  }, []);

  return (
    <>
      <Autocomplete
        options={states.map(state => state.name)}
        value={selectedState}
        onChange={(_event, newValue) => setSelectedState(newValue)}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder='Search State' />
        )}
      />
    </>
  );
};

export default StateSearch;
