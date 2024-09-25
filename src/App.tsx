
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

/* import { Provider } from 'react-redux'; */

/* import { store } from './store'; */
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
import Contact from './components/Contact/Contact';
import AskQuestion from './components/Chat/AskQuestion/AskQuestion/AskQuestion'
import AskQuestionStep2 from './components/Chat/AskQuestion/AskQuestion/AskQuestionStep2';
import AskQuestionStep3 from './components/Chat/AskQuestion/AskQuestion/AskQuestionStep3';
import ProcessingQuestion from './components/Chat/AskQuestion/AskQuestion/ProcessingQuestion'
import Chat from './components/Chat/InteractiveChat/Chat';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ask-lupai" element={<AskQuestion />} />
        <Route path="/ask-lupai/step2" element={<AskQuestionStep2 />} />
        <Route path="/ask-lupai/step3" element={<AskQuestionStep3 />} />
        <Route path="/ask-lupai/step4" element={<ProcessingQuestion />} />
        <Route path="/ask-lupai/chat" element={<Chat />} />
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
