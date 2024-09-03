import React, { useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete
} from './AskQuestionsStyle'; // Importa los estilos desde el archivo separado

const TimeFrameInput: React.FC = () => {
  const [selectedTimeFrame, setSelectedPlace] = useState<string | null>(null);

  const timeFrameArray = [
    "I don't live in germany",
    "Im in Germany as a turist",
    "0-1 year",
    "1-5 years",
    "+5 years"
  ]

  const handleTimeFrameChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedPlace(newValue);
  };
  return (
    <>
      <Autocomplete
        options={timeFrameArray}
        value={selectedTimeFrame}
        onChange={handleTimeFrameChange}
        inputValue={selectedTimeFrame || ''}
        onInputChange={(_event, newInputValue) => {
          setSelectedPlace(newInputValue);
        }}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder='Pick a time frame' />
        )}
      />
    </>
  );
};

export default TimeFrameInput;
