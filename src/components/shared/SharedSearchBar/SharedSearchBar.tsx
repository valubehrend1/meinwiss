import React from 'react';

import { Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import {
  SearchBar,
} from '../../Chat/AskQuestion/AskQuestion/AskQuestionsStyle';

import { useDispatch } from 'react-redux';
import { setUserQuery } from '../../../config/features/ChatSlice';

interface SharedSearchBarProps {
  mainSearchPage?: boolean;
  sendMessage?: (messageContent: string) => void;
  disabled?: boolean;
}

const SharedSearchBar: React.FC<SharedSearchBarProps> = ({ mainSearchPage, sendMessage, disabled }) => {
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
    setSearchQuery(searchQuery);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (mainSearchPage) {
        setSearchQuery(searchQuery);
        console.log('Search query:', searchQuery);
        console.log(mainSearchPage, 'mainSearchPage');
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
    <SearchBar
      mainSearchPage={mainSearchPage}
      fullWidth
      placeholder='Try questions like "How do I validate my university degree in Germany?"'
      variant="outlined"
      InputProps={inputProps}
      onChange={handleSearchQueryInputChange}
      onBlur={handleBlurSearchQuery}
      onKeyDown={onEnter}
      value={searchQuery}
      disabled={disabled}
    />
  );
};
export default SharedSearchBar;
