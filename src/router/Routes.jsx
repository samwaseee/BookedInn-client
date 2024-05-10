import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Error from "../components/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }

]);

export default router;