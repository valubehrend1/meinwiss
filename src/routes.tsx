import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import ErrorNotFoundPage from './components/pages/ErrorNotFound';
import Chat from './components/Chat/InteractiveChat/Chat';
import LoginPage from './components/Auth/LoginPage';
import DataPrivacy from './components/Chat/DataPrivacy/DataPrivacy';
import Impressum from './components/pages/Impressum/Impressum';
import PrivateRoute from './components/Auth/PrivateRoute';
import ProfileSettings from './components/Profile/ProfileSettings';
import ChatHistory from './components/ChatsHistory/ChatHistory';
import HomeRedirect from './components/HomeRedirect';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route index element={<HomeRedirect />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/terms" element={<DataPrivacy />} />
            <Route path="/impressum" element={<Impressum />} />

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile-settings" element={<ProfileSettings />} />
                <Route path="/chat-history" element={<ChatHistory />} />
            </Route>

            {/* Not founded routes */}
            <Route path="*" element={<ErrorNotFoundPage />} />
        </Route>
    )
);

export default router;
