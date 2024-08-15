/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme } from '@mui/material/styles';

import Haffer from '../public/fonts/Haffer-Regular.woff';
import MartinaPlantijn from '../public/fonts/MartinaPlantijn.woff2';


/* export const haffer = {
  family: 'Haffer',
  weight: 'normal',
  style: 'normal',
  src: `
    local('Haffer'),
    local('Haffer-Regular'),
    url(${Haffer}) format('woff')
  `,
}; */
/* const martinaPlantijn: {
  family: 'MartinaPlantijn',
  url: '../public/fonts/martina-plantijn-regular.woff2',
  weight: 'regular',
  style: 'normal'
}
 */

export const primary_color_dark = '#00301E';
export const primary_color_lime = '#E2F389';

export const gold = '#A98031';
export const orange = '#F1683F';
export const purple = '#A0004D';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1400,
      xl: 1920,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Haffer, MartinaPlantijn',

    h6: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    h5: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: '1.625rem',
      margin: 0,
    },
    h3: {
      fontSize: '2.25rem',
      lineHeight: '2.7rem',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
    h1: {
      fontSize: '5rem',
      lineHeight: '5.625rem',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  },

  palette: {
    primary: {
      main: primary_color_dark,
    },
    secondary: {
      main: primary_color_lime

    },
  },

  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Haffer';
        src: local('Haffer'), local('Haffer-Regular'), url(${Haffer}) format('woff');
        font-weight: normal;
        font-style: normal;
      },
      @font-face {
        font-family: 'MartinaPlantijn';
        src: local('MartinaPlantijn'), local('MartinaPlantijn'), url(${MartinaPlantijn}) format('woff2');
        font-weight: normal;
        font-style: normal;
      }
    `
    },
  },
});

export default theme;