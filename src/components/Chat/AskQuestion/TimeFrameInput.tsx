import React, { useState } from 'react';

import { Autocomplete } from '@mui/material';
import {
  InputFieldAutoComplete,
  SearchBarError
} from './AskQuestion/AskQuestionsStyle'; // Importa los estilos desde el archivo separado

import { useDispatch, useSelector } from 'react-redux';
import { setTimeInGermany, selectTimeInGermany } from '../../../config/features/ChatSlice';

import { useTranslation } from 'react-i18next';

interface TimeFrameInputProps {
  timeError: boolean;
}

const TimeFrameInput: React.FC<TimeFrameInputProps> = ({ timeError }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const timeInGermany = useSelector(selectTimeInGermany);
  const [inputValue, setInputValue] = useState<string>('');

  const timeFrameArray = [
    t('i_dont_live_in_germany'),
    t('in_germany_as_tourist'),
    t('zero_to_one_year'),
    t('one_to_five_year'),
    t('plus_five_year')
  ]

  const handleTimeFrameChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    dispatch(setTimeInGermany(newValue));
  };

  const handleInputChange = (_event: React.SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return (
    <>
      <Autocomplete
        options={timeFrameArray}
        value={timeInGermany || null}
        inputValue={inputValue}
        onChange={handleTimeFrameChange} // Manejar la selección
        onInputChange={handleInputChange} // Manejar el texto del input
        isOptionEqualToValue={(option, value) => option === value}
        renderInput={(params) => (
          <InputFieldAutoComplete {...params} variant="outlined" fullWidth placeholder={t('pick_time_frame')} />
        )}
      />
      {timeError && <SearchBarError severity="error">Please select a time frame</SearchBarError>}
    </>
  );
};

export default TimeFrameInput;
