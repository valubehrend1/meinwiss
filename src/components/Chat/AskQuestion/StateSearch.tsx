import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@mui/material';
import { IState, State } from 'country-state-city';
import { InputFieldAutoComplete } from './AskQuestion/AskQuestionsStyle';

import { useDispatch, useSelector } from 'react-redux';
import { setLocation, selectLocation } from '../../../config/features/ChatSlice';

const StateSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [states, setStates] = useState<IState[]>([]);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const location = useSelector(selectLocation);

  useEffect(() => {
    // Obtener estados de Alemania, utilizando el código ISO 'DE'
    const fetchedStates = State.getStatesOfCountry('DE') || [];
    setStates(fetchedStates);
  }, []);

  const handleLocationChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedState(newValue);
    dispatch(setLocation(newValue));
  };

  useEffect(() => {
    console.log("location", location);
  }, [location]);

  return (
    <>
      <Autocomplete
        options={states.map(state => state.name)}
        value={selectedState}
        onChange={handleLocationChange}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder='Search State' />
        )}
      />
    </>
  );
};

export default StateSearch;
