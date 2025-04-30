import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./src/App";
import Count from "./src/pages/Count";
import Blog from "./src/pages/Blog";
import NotFound from "./src/pages/404";
import Auth from "./src/components/Auth"
import UserProfile from "./src/pages/UserProfile";
import UpdateProfile from "./src/pages/UpdateProfile";
import UploadBlog from "./src/pages/UploadBlog";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/blog',
        element: <Blog />
    },
    {
        path: '/count',
        element: <Navigate to="/count/bunga-tunggal" replace />
    },
    {
        path: '/count/:id',
        element: <Count />
    },
    {
        path: '/masuk',
        element: <Auth variant="login"/>
    },
    {
        path: '/daftar',
        element: <Auth variant="register"/>
    },
    {
        path: '/profile/:id',
        element: <UserProfile />
    },
    {
        path: '/profile',
        element: <Navigate to="/profile/xxx" replace />
    },
    {
        path: '/update/:id',
        element: <UpdateProfile />
    },
    {
        path: '/upload-blog',
        element: <UploadBlog />
    },
    {
        path: '*',
        element: <NotFound />
    },
]);