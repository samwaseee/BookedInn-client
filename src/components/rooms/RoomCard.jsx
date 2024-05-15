import { IoIosArrowForward, IoMdStarHalf } from 'react-icons/io';
import { MdStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RoomCard = ({ room, index }) => {

    const [reviews, setReview] = useState([]);

    const { _id, images, title, description, pricePerNight, type, view, roomSize } = room;


    useEffect(() => {
        axios.get(`https://booked-inn-server.vercel.app/Review/${_id}`)
            .then(res => {
                setReview(res.data);
            })
    }, [_id]);

    const ratings = reviews.map((review) => parseInt(review.rating));
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;


    return (
        <div>
            <div>
                <Link to={`/rooms/${_id}`} className="hero bg-base-200 shadow-xl w-[95vw] mx-auto">
                    <div className="">
                        <div className={`md:hero-content p-5 lg:p-0 gap-14 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <img src={images[0]} className="md:max-w-xl w-96 lg:w-auto rounded-lg shadow-2xl mb-5 md:mb-0 hover:scale-110 duration-700" />
                            <div className=''>
                                <h1 className="text-5xl font-bold font-mar">{title}</h1>
                                <p className="py-6">{description.slice(description.indexOf('.') + 1)}</p>
                                <p className='flex items-end'>({reviews.length > 0 ? reviews.length : 'no review'})  {averageRating > 0 && averageRating}{(averageRating < 5 ) ? <IoMdStarHalf color='gold' size={30}/> : <MdStarRate color='gold' size={30}/>}</p>
                                <div className='flex items-center'>
                                    <button className=" border-black border-b-2 space-y-3">Discover  more</button><IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

RoomCard.propTypes = {
    room: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default RoomCard;