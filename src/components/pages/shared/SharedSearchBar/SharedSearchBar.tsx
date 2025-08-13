import React from 'react';

import { Box, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import {
  SearchBar,
  SearchBarError
} from './SharedSearchBarStyles';

import { useDispatch } from 'react-redux';
import { setUserQuery } from '../../../../config/features/ChatSlice';

import { useTranslation } from 'react-i18next';

interface SharedSearchBarProps {
  mainSearchPage?: boolean;
  sendMessage?: (messageContent: string) => void;
  disabled?: boolean;
  error?: boolean;
}

const SharedSearchBar: React.FC<SharedSearchBarProps> = ({ mainSearchPage, sendMessage, disabled, error }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const handleSearchQueryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSendMessage = () => {
    if (searchQuery.trim() === '') return; // Evitar enviar mensajes vacíos
    dispatch(setUserQuery(searchQuery));
    if (sendMessage) {
      sendMessage(searchQuery);
    }
    if (!mainSearchPage) setSearchQuery('');
  };

  const handleBlurSearchQuery = () => {
    if (searchQuery.trim() === '') return;
    dispatch(setUserQuery(searchQuery));
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (mainSearchPage) {
        setSearchQuery(searchQuery);
      }
      event.preventDefault(); // Prevenir comportamiento por defecto
      handleSendMessage();
      if (!mainSearchPage) setSearchQuery('');
    }
  };

  const inputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
    ...(!mainSearchPage && {
      endAdornment: (
        <InputAdornment position="end">
          <Button variant="contained" sx={{ color: 'white', boxShadow: 'none' }} onClick={handleSendMessage}>
            <EastIcon />
          </Button>
        </InputAdornment>
      ),
    }),
  };

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center'
    }}>
      <SearchBar
        mainSearchPage={mainSearchPage}
        fullWidth
        placeholder={t('try_question')}
        variant="outlined"
        InputProps={inputProps}
        onChange={handleSearchQueryInputChange}
        onBlur={handleBlurSearchQuery}
        onKeyDown={onEnter}
        value={searchQuery}
        disabled={disabled}
        error={error}
      />
      {error &&
        <SearchBarError
          mainSearchPage={mainSearchPage}
          severity="error">
          {t('this_field_is_required')}
        </SearchBarError>}
    </Box>
  );
};
export default SharedSearchBar;
