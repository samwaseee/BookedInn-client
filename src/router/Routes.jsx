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
import Resturant from "../components/resturant/Resturant";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://booked-inn-server.vercel.app/rooms'),
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/rooms/:id',
                loader: ({ params }) => fetch(`https://booked-inn-server.vercel.app/rooms/${params.id}`),
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
            },
            {
                path: '/mybookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/updatebooking/:id',
                loader: ({ params }) => {
                    return fetch(`https://booked-inn-server.vercel.app/bookings/${params.id}`, {
                        credentials: 'include'
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            }
                            throw new Error('Error fetching booking data');
                        });
                },
                element: <PrivateRoute><UpdatedBooking></UpdatedBooking></PrivateRoute>
            },
            {
                path: '/resturant',
                loader: () => fetch('https://booked-inn-server.vercel.app/menu'),
                element: <PrivateRoute><Resturant></Resturant></PrivateRoute>
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