import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedBooking = () => {
    const Room = useLoaderData();

    const { adult, checkIn, checkOut, children, customerName, email, image, pricePerNight, room, roomId, title, _id } = Room;

    const handleBookingUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const newCheckIn = form.checkInDate.value;
        const newCheckOut = form.checkOutDate.value;

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                checkIn: newCheckIn,
                checkOut: newCheckOut
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "UPDATED",
                        text: "Your Reservation is Updated!",
                        icon: "success"
                      });
                }
            })
    }

    return (
        <div className=''>
            <form onSubmit={handleBookingUpdate} className=" bg-base-100 shadow-xl h-full ml-20">
                <div className="border-2 border-[#b99d75] p-8 space-y-3 px-10">
                    <img src={image} alt={title} className='w-1/2 mx-auto' />
                    <div className="flex border border-[#b99d75] p-2 items-center">
                        <p className="flex-1 text-xl">Check In <span className='text-base-300'>{checkIn}</span> </p>
                        <input type="date" name="checkInDate" required className="bg-transparent p-2"></input>
                    </div>
                    <div className="flex border border-[#b99d75] p-2 justify-between">
                        <p className="flex-1 text-xl">Check Out <span className='text-base-300'>{checkOut}</span> </p>
                        <input type="date" name="checkOutDate" required className="bg-transparent  p-2"></input>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="flex border border-[#b99d75] p-2 w-1/3">
                            <p className="flex-1 text-xl">Rooms</p>
                            <p>{room}</p>
                        </div>
                        <div className="flex items-center border border-[#b99d75] p-2 w-1/3 mr-2">
                            <p className="flex-1 text-xl">Adults</p>
                            <p>{adult}</p>
                        </div>
                        <div className="flex items-center border border-[#b99d75] p-2 w-1/3">
                            <p className="flex-1 text-xl">Children </p>
                            <p>{children}</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <p className="text-3xl font-mar  my-5 mt-10">Extra Services</p>
                        <div className="flex gap-2">
                            <input type="radio" name="radio-1" className="radio" defaultChecked />
                            <p className="flex-1">Room Clean</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="radio-2" className="radio" />
                            <p className="flex-1">Massage</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="radio-3" className="radio" />
                            <p className="flex-1">Day Spa</p>
                        </div>
                    </div>
                    <div className="flex border-t-2 py-5 justify-between items-center">
                        <h3 className="text-3xl font-mar">Charges</h3>
                        <p className="text-2xl">{pricePerNight}$/Night</p>
                    </div>
                    <button className="btn bg-[#b99d75] w-full rounded-none text-xl font-mar">Update Reservation Date</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatedBooking;