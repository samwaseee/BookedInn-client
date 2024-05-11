import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Error from "../components/error/Error";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                loader: ()=>fetch('http://localhost:5000/rooms'),
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ]
    }

]);

export default router;