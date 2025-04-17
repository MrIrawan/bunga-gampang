import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./src/App";
import Count from "./src/pages/Count";
import Blog from "./src/pages/Blog";
import NotFound from "./src/pages/404";

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
        element: <h2>login</h2>
    },
    {
        path: '/daftar',
        element: <h2>register</h2>
    },
    {
        path: '*',
        element: <NotFound />
    },
]);