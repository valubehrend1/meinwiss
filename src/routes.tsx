import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import WidgetLayout from './components/WidgetLayout';
import ErrorNotFoundPage from './components/pages/ErrorNotFound';
import Chat from './components/Chat/InteractiveChat/Chat';
import ChatWidget from './components/Chat/InteractiveChat/ChatWidget';
import LoginPage from './components/Auth/LoginPage';
import DataPrivacy from './components/Chat/DataPrivacy/DataPrivacy';
import Impressum from './components/pages/Impressum/Impressum';
import PrivateRoute from './components/Auth/PrivateRoute';
import ProfileSettings from './components/Profile/ProfileSettings';
import ChatHistory from './components/ChatsHistory/ChatHistory';
import HomeRedirect from './components/HomeRedirect';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Main Layout routes */}
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

                {/* Not found routes */}
                <Route path="*" element={<ErrorNotFoundPage />} />
            </Route>

            {/* Widget Layout (without navbar/footer) */}
            <Route path="/widget" element={<WidgetLayout />}>
                <Route index element={<ChatWidget />} />
            </Route>
        </>
    )
);

export default router;
