import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import ErrorNotFoundPage from './components/pages/ErrorNotFound';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import AskQuestion from './components/Chat/AskQuestion/AskQuestion/AskQuestion';
import AskQuestionStep2 from './components/Chat/AskQuestion/AskQuestion/AskQuestionStep2';
import AskQuestionStep3 from './components/Chat/AskQuestion/AskQuestion/AskQuestionStep3';
import ProcessingQuestion from './components/Chat/AskQuestion/AskQuestion/ProcessingQuestion';
import Chat from './components/Chat/InteractiveChat/Chat';
import LoginPage from './components/Auth/LoginPage';
import DataPrivacy from './components/Chat/DataPrivacy/DataPrivacy';
import Impressum from './components/pages/Impressum/Impressum';
import HowlupaiWorksSection from './components/pages/HowLupaiWorks/HowlupaiWorksSection';
import PrivateRoute from './components/Auth/PrivateRoute';
import LupaiForOrganizations from './components/pages/LupaiForOrganizations/LupaiForOrganizations';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/über-uns" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/lupai-for-organizations" element={<LupaiForOrganizations />} />
            <Route path="/lupai-für-organisationen" element={<LupaiForOrganizations />} />
            <Route path="/how-lupai-works" element={<HowlupaiWorksSection />} />
            <Route path="/wie-lupai-funktioniert" element={<HowlupaiWorksSection />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/terms" element={<DataPrivacy />} />
            <Route path="/impressum" element={<Impressum />} />

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/ask-lupai" element={<AskQuestion />} />
                <Route path="/frage-lupai" element={<AskQuestion />} />
                <Route path="/ask-lupai/step2" element={<AskQuestionStep2 />} />
                <Route path="/ask-lupai/step3" element={<AskQuestionStep3 />} />
                <Route path="/ask-lupai/step4" element={<ProcessingQuestion />} />
                <Route path="/ask-lupai/chat" element={<Chat />} />
            </Route>

            {/* Not founded routes */}
            <Route path="*" element={<ErrorNotFoundPage />} />
        </Route>
    )
);

export default router;
