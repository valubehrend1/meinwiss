import React, { useState } from 'react';
import { MenuItem, SelectChangeEvent, IconButton, Box } from '@mui/material';

import { LanguageContainer, DropdownSelect, LanguageButton, Separator } from './NavbarStyles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LanguageSelectorOrientation } from '../../types.tsx';

interface NavbarItemsDesktopProps {
  layout: LanguageSelectorOrientation;
}

const NavbarItemsDesktop: React.FC<NavbarItemsDesktopProps> = ({ layout }) => {
  const [language, setLanguage] = useState('EN');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setLanguage(event.target.value as string);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {layout == LanguageSelectorOrientation.DROPDOWN && (
        <LanguageContainer>
          <DropdownSelect
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={language}
            onChange={handleChange}
            IconComponent={() => null}
          >
            <MenuItem value="ES">ES</MenuItem>
            <MenuItem value="DE">DE</MenuItem>
            <MenuItem value="EN">EN</MenuItem>
          </DropdownSelect>
          <IconButton onClick={handleClick} size="small" sx={{ marginLeft: '-20px' }}>
            <KeyboardArrowDownIcon color='primary' />
          </IconButton>
        </LanguageContainer>
      )}
      {layout === LanguageSelectorOrientation.HORIZONTAL && (
        <Box display="flex" alignItems="center">
          <LanguageButton
            variant="text"
            disabled={language === 'EN'}
          /*   onClick={handleChange} */
          >
            EN
          </LanguageButton>
          <Separator>|</Separator>
          <LanguageButton
            variant="text"
            /*      onClick={handleChange} */
            disabled={language === 'DE'}
          >
            DE
          </LanguageButton>
          <Separator>|</Separator>
          <LanguageButton
            variant="text"
            /*         onClick={handleChange} */
            disabled={language === 'de'}
          >
            ES
          </LanguageButton>
        </Box>
      )}
    </Box>
  );
};

export default NavbarItemsDesktop;
