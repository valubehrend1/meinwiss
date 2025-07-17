import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Provider } from 'react-redux';
import { store } from './store';
import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { WebSocketProvider } from './context/WebSocketContext';

import router from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18next} defaultNS={'global'}>
            <WebSocketProvider>
              <CssBaseline />
              <RouterProvider router={router} />
            </WebSocketProvider>
          </I18nextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
