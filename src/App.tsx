
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
/* import '@fontsource/inter'; */


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import Layout from './components/Layout';
import ErrorNotFoundPage from './components/ErrorNotFound';
import Home from './components/Home/Home';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorNotFoundPage />} />
      </Route>
    )
  );

  return (
    /*  <Provider store={store}> */
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next} defaultNS={'global'}>
          <CssBaseline />
          <RouterProvider router={router} />
        </I18nextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
    /*    </Provider> */
  );
}

export default App;
