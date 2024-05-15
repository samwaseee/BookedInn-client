import moment from 'moment';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UpdatedBooking = () => {
    const Room = useLoaderData();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const { adult, checkIn, children, customerName, email, image, pricePerNight, room, roomId, title, _id } = Room;


    const handleBookingUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const newCheckIn = form.checkInDate.value;

        axiosSecure.patch(`/bookings/${_id}`, {
            checkIn: newCheckIn
          })
            .then(res => {
              if (res.data.modifiedCount > 0) {
                Swal.fire({
                  title: "UPDATED",
                  text: "Your Reservation is Updated!",
                  icon: "success",
                  confirmButtonColor: "#53624e"
                });
                navigate('/mybookings')
              }
            })
            .catch(error => {
              console.error(error);
            });
    }

    return (
        <div>
            <Helmet>
                <title>BookedInn | Update Bookings</title>
            </Helmet>
            <form onSubmit={handleBookingUpdate} className=" bg-base-100 shadow-xl h-full mx-auto lg:ml-20">
                <div className="border-2 border-[#b99d75] p-8 space-y-3 px-10">
                    <img src={image} alt={title} className='w-1/2 mx-auto' />
                    <h3 className='text-center font-mar text-3xl py-5'>{title}</h3>
                    <div className="flex border border-[#b99d75] p-2 items-center">
                        <p className="flex-1 text-xl">Check In <span className='text-base-300'>{checkIn}</span> </p>
                        <input type="date" name="checkInDate" required className="bg-transparent p-2" min={moment().format('YYYY-MM-DD')}></input>
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