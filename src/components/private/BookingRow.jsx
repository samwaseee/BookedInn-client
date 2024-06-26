import { GrUpdate } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";

const BookingRow = ({ booking, handleDelete }) => {
    // console.log(booking);
    const { user } = useAuth();
    const { _id, checkIn, room, title, pricePerNight, image, adult, children, roomId } = booking;

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const name = user.displayName;
        const review = form.review.value;
        const rating = form.rating.value;
        const time = new Date();
        const timeFormatted = moment().format('MMMM Do YYYY, h:mm:ss a');

        const roomReview = { email, name, time, rating, review, timeFormatted, roomId }
        console.log(roomReview)

        axios.post("https://booked-inn-server.vercel.app/Review", roomReview)
            .then(() => {
                Swal.fire({
                    title: 'Review submitted!',
                    text: 'Your review has been successfully submitted.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch(error => {
                console.log(error)
            });

        form.reset();
    }

    return (

        <>
            <Helmet>
                <title>BookedInn | My Bookings</title>
            </Helmet>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id, roomId, checkIn)} className="btn btn-ghost p-1">
                        <RiDeleteBin5Line color="red" size={20} />
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="w-24 h-24">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <p>{title}</p>
                        <p>Rooms:{room}, Adults:{adult}, Children:{children}</p>
                    </div>
                </td>
                <td>{checkIn}</td>
                <td>${pricePerNight}</td>
                <td>
                    <Link to={`/updatebooking/${_id}`} className=""><button className="btn btn-ghost"> <GrUpdate size={20} /> </button></Link>
                </td>
                <td>
                    <form onSubmit={handleReview}>
                        <div className="flex items-center border border-primary px-2 mb-2 lg:w-1/2">
                            <p className="lg:flex-1 text-lg text-secondary">rating </p><MdOutlineStar className="ml-5"/>
                            <select name="rating" id="" className="bg-transparent p-2">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <textarea className="textarea textarea-bordered border border-primary w-full rounded-none" name="review" placeholder="Write your review here..."></textarea>
                        <button className="btn btn-outline rounded-none btn-sm text-primary">Submit review</button>
                    </form>
                </td>

            </tr>
        </>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
};

export default BookingRow;