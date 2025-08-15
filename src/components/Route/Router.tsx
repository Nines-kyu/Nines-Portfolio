import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Network from "../Network/Network";
import ErrorPage from "../PageError/Error";
import App from "../../App";


export const router = createBrowserRouter([
    {   
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home />},
            { path: '/network', element: <Network />},
            { path: '*', element: <ErrorPage /> },
        ],
    },
]);