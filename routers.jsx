import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Count from "./src/pages/Count";

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
        element: <Count />
    }
]);