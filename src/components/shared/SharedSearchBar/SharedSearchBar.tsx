import React from 'react';

import { Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import {
  SearchBar,
} from '../../Chat/AskQuestion/AskQuestion/AskQuestionsStyle';

const SharedSearchBar: React.FC<{ mainSearchPage?: boolean }> = ({ mainSearchPage }) => {

  const inputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
    ...(!mainSearchPage && {
      endAdornment: (
        <InputAdornment position="end">
          <Button variant="contained" sx={{ color: 'white', boxShadow: 'none' }}>
            <EastIcon />
          </Button>
        </InputAdornment>
      )
    })
  };

  return (
    <SearchBar
      mainSearchPage={mainSearchPage}
      fullWidth
      placeholder='Try questions like “How do I validate my university degree in Germany?”'
      variant="outlined"
      InputProps={inputProps}
    />
  );
};

export default SharedSearchBar;
