import React, { useEffect, useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete,
  SearchBarError
} from './AskQuestion/AskQuestionsStyle'; // Importa los estilos desde el archivo separado

import { useDispatch, useSelector } from 'react-redux';
import { setTimeInGermany, selectTimeInGermany } from '../../../config/features/ChatSlice';

interface TimeFrameInputProps {
  timeError: boolean;
}

const TimeFrameInput: React.FC<TimeFrameInputProps> = ({ timeError }) => {
  const dispatch = useDispatch();
  const timeInGermany = useSelector(selectTimeInGermany);
  const [selectedTimeFrame, setsSelectedTimeFrame] = useState<string | null>(null);

  const timeFrameArray = [
    "I don't live in germany",
    "Im in Germany as a turist",
    "0-1 year",
    "1-5 years",
    "+5 years"
  ]

  const handleTimeFrameChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setsSelectedTimeFrame(newValue);
    dispatch(setTimeInGermany(newValue));
  };

  useEffect(() => {
    console.log("SelectedPlace", timeInGermany);
  }, [timeInGermany]);


  return (
    <>
      <Autocomplete
        options={timeFrameArray}
        value={selectedTimeFrame}
        onChange={handleTimeFrameChange}
        inputValue={selectedTimeFrame || ''}
        onInputChange={(_event, newInputValue) => {
          setsSelectedTimeFrame(newInputValue);
        }}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder='Pick a time frame' />
        )}
      />
      {timeError && <SearchBarError severity="error">Please select a time frame</SearchBarError>}
    </>
  );
};

export default TimeFrameInput;
