import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import moment from "moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const MyBookings = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [bookings, setBookings] = useState([]);

    const url = `/bookings?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setBookings(res.data);
            })
    }, [url, axiosSecure]);

    const handleDelete = (id, roomId, checkIn) => {
        const currentDate = moment();
        const checkInDate = moment(checkIn, "YYYY-MM-DD");

        const daysDifference = checkInDate.diff(currentDate, "days");

        if (daysDifference === 0) {
            Swal.fire({
                icon: "warning",
                title: "You can't cancel room reservation prior to one day",
                color: "red",
                confirmButtonColor: "#53624e",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
            return
        }


        Swal.fire({
            title: "Are you sure?",
            text: "Your reservation will be terminated!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#53624e",
            cancelButtonColor: "#d33",
            background: "#53624E",
            color: "white",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteUrl = `/bookings/${id}`;
                axiosSecure.delete(deleteUrl)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remainingBookings = bookings.filter(
                                (booking) => booking._id !== id
                            );
                            console.log(remainingBookings);
                            setBookings(remainingBookings);
                        }
                    })
                fetch(`https://booked-inn-server.vercel.app/rooms/${roomId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        availability: true
                    })
                })
                Swal.fire({
                    title: "Terminated!",
                    text: "Your reservation has been cancelled",
                    icon: "success",
                    color: "white",
                    background: "#b99d75",
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "Reservation termination cancelled",
                    icon: "error",
                    color: "white",
                    background: "#b99d75",
                    confirmButtonColor: "#53624e"
                });
            }
        });
    }



    return (
        <div>
            <Helmet>
                <title>BookedInn | My Bookings</title>
            </Helmet>
            <h2 className="text-5xl text-center my-5">{user.displayName} Reservations</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Room</th>
                            <th>Check In Date</th>
                            <th>Price</th>
                            <th>Update Reservation</th>
                            <th>Review</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
                {
                    bookings.length === 0 && <p className="text-2xl text-center my-10">Sorry You don&apos;t have any room Booked</p>
                }
            </div>
        </div>
    );
};

export default MyBookings;