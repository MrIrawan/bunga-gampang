import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./src/App";
import Count from "./src/pages/Count";
import NotFound from "./src/pages/404";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/blog',
        element: <h2>blog</h2>
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
        path: '*',
        element: <NotFound />
    },
]);