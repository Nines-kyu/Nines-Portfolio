import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

import ErrorPage from "../PageError/Error";
import App from "../../App";

export const router = createBrowserRouter([
    {   
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home />},
            { path: '*', element: <ErrorPage /> },
        ],
    },
]);