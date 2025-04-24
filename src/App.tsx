import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import { Provider } from 'react-redux';

import { store } from './store';

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
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AskQuestion from './components/Chat/AskQuestion/AskQuestion/AskQuestion';
import AskQuestionStep2 from './components/Chat/AskQuestion/AskQuestion/AskQuestionStep2';
import AskQuestionStep3 from './components/Chat/AskQuestion/AskQuestion/AskQuestionStep3';
import ProcessingQuestion from './components/Chat/AskQuestion/AskQuestion/ProcessingQuestion';
import Chat from './components/Chat/InteractiveChat/Chat';
import LoginForm from './components/BetaLogin/LoginForm';
import DataPrivacy from './components/Chat/DataPrivacy/DataPrivacy';
import Impressum from './components/Impressum/Impressum';

import { WebSocketProvider } from './context/WebSocketContext';
import HowlupaiWorksSection from './components/HowLupaiWorks/HowlupaiWorksSection';
import PrivateRoute from './components/BetaLogin/PrivateRoute';

const App: React.FC = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/über" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/how-lupai-works" element={<HowlupaiWorksSection />} />
        <Route path="/wie-lupai-funktioniert" element={<HowlupaiWorksSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/terms" element={<DataPrivacy />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route element={<PrivateRoute />} >
          <Route path="/ask-lupai" element={<AskQuestion />} />
          <Route path="/frage-lupai" element={<AskQuestion />} />
          <Route path="/ask-lupai/step2" element={<AskQuestionStep2 />} />
          <Route path="/ask-lupai/step3" element={<AskQuestionStep3 />} />
          <Route path="/ask-lupai/step4" element={<ProcessingQuestion />} />
          <Route path="/ask-lupai/chat" element={<Chat />} />
          <Route path="*" element={<ErrorNotFoundPage />} />
        </Route>
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
      } as const,
    }
  );

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
