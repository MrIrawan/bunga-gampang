import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/blog',
        element: <h2>blog</h2>
    },
]);