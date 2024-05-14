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
import MyBookings from "../components/private/MyBookings";
import Rooms from "../components/rooms/Rooms";
import UpdatedBooking from "../components/private/UpdatedBooking";
import About from "../components/about/About";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/rooms'),
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/rooms/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`),
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
            },
            {
                path: '/mybookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/updatebooking/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`),
                element: <PrivateRoute><UpdatedBooking></UpdatedBooking></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
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