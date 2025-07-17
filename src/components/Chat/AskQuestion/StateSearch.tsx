import React, { /* useEffect, */ useState } from 'react';
import { Autocomplete } from '@mui/material';
/* import { IState, State } from 'country-state-city'; */
import { InputFieldAutoComplete, SearchBarError } from './AskQuestion/AskQuestionsStyle';

import { useDispatch /* useSelector */ } from 'react-redux';
import { setLocation /* selectLocation */ } from '../../../config/features/ChatSlice';

import { useTranslation } from 'react-i18next';


interface StateSearchProps {
  locationError: boolean;
}

const StateSearch: React.FC<StateSearchProps> = ({ locationError }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  /*   const [states, setStates] = useState<IState[]>([]); */
  const [selectedState, setSelectedState] = useState<string | null>(null);
  /*  const location = useSelector(selectLocation); */

  const countryNames = ['Berlin'];
  /*
    useEffect(() => {
      const fetchedStates = State.getStatesOfCountry('DE') || [];
      setStates(fetchedStates);
    }, []);
   */
  const handleLocationChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedState(newValue);
    dispatch(setLocation(newValue));
  };

  return (
    <>
      <Autocomplete
        /* options={states.map(state => state.name)} */
        options={countryNames}
        value={selectedState}
        onChange={handleLocationChange}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder={t('search_state')} />
        )}
      />
      {locationError && <SearchBarError severity="error">Please select a location</SearchBarError>}
    </>
  );
};

export default StateSearch;
