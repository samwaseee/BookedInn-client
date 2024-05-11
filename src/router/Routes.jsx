import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Error from "../components/error/Error";
import SignIn from "../components/auth/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    }

]);

export default router;