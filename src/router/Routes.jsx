import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Error from "../components/error/Error";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../components/private/RoomDetails";

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
                path: '/rooms/:id',
                loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`),
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
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