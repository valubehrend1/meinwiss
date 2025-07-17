import React, { useState } from 'react';
import { MenuItem, SelectChangeEvent, IconButton, Box } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { LanguageContainer, DropdownSelect, LanguageButton, Separator } from './Navbar/NavbarStyles.tsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LanguageSelectorOrientation, Language } from '../../../types.tsx';

import { setLanguage, selectCurrentLanguage } from '../../../config/features/LanguagesSlice.ts';

import i18n from '../../../config/i18next.config.tsx';

interface NavbarItemsDesktopProps {
  layout: LanguageSelectorOrientation;
}

const NavbarItemsDesktop: React.FC<NavbarItemsDesktopProps> = ({ layout }) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);
  const [open, setOpen] = useState(false);

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const newLanguage = event.target.value as string;
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage as Language));
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {layout === LanguageSelectorOrientation.DROPDOWN && (
        <LanguageContainer>
          <DropdownSelect
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={currentLanguage}
            onChange={handleSelectChange}
            IconComponent={() => null}
          >
            <MenuItem value={Language.EN}>{Language.EN.toUpperCase()}</MenuItem>
            <MenuItem value={Language.DE}>{Language.DE.toUpperCase()}</MenuItem>
          </DropdownSelect>
          <IconButton onClick={handleClick} size="small" sx={{ marginLeft: '-20px' }}>
            <KeyboardArrowDownIcon color="primary" />
          </IconButton>
        </LanguageContainer>
      )}
      {layout === LanguageSelectorOrientation.HORIZONTAL && (
        <Box display="flex" alignItems="center">
          <LanguageButton
            variant="text"
            disabled={currentLanguage === Language.EN}
            onClick={() => handleSelectChange({ target: { value: Language.EN } } as SelectChangeEvent<unknown>)}
          >
            EN
          </LanguageButton>
          <Separator>|</Separator>
          <LanguageButton
            variant="text"
            onClick={() => handleSelectChange({ target: { value: Language.DE } } as SelectChangeEvent<unknown>)}
            disabled={currentLanguage === Language.DE}
          >
            DE
          </LanguageButton>
          {/*  <Separator>|</Separator>
          <LanguageButton
            variant="text"
            onClick={() => handleChange('ES')}
            disabled={currentLanguage === 'ES'}
          >
            ES
          </LanguageButton> */}
        </Box>
      )}
    </Box>
  );
};

export default NavbarItemsDesktop;
