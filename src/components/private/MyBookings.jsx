import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const MyBookings = () => {

    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {

        axios.get(url)
            .then(res => {
                setBookings(res.data);
            })
    }, [url]);

    const handleDelete = (id,roomId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your reservation will be terminated!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
                fetch(`http://localhost:5000/rooms/${roomId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        availability: true
                    })
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your reservation has been cancelled",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <h2 className="text-5xl text-center my-5 font-semibold">{user.displayName} Reservations</h2>
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