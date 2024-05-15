import { useLoaderData, useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import moment from "moment";
import { MdOutlineStar } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const RoomDetails = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const room = useLoaderData();
    const navigate = useNavigate();
    const [reviews, setReview] = useState([]);


    // console.log(user);
    const { _id, amenities, availability, bathrooms, description, images, pricePerNight, roomSize, specialOffers, title, type, view } = room;

    useEffect(() => {
        axios.get(`https://booked-inn-server.vercel.app/Review/${_id}`)
            .then(res => {
                setReview(res.data);
            })
    }, [_id]);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = user.displayName;
        const email = user.email;
        const checkIn = form.checkInDate.value;
        const room = form.rooms.value;
        const adult = form.adults.value;
        const children = form.children.value;
        const bookingDetails = {
            customerName: name,
            image: images[0],
            title,
            email,
            checkIn, room, adult, children, pricePerNight,
            roomId: _id
        }
        // console.log(bookingDetails);




        Swal.fire({
            title: "Booking Confirmation",
            text: `Name: ${name} |  
                            Room : ${title} | 
                            E-mail: ${email} |  
                            Check in date: ${checkIn}
                            Price: ${pricePerNight}$`,
            showDenyButton: true,
            heightAuto: true,
            confirmButtonText: "Yes,Conifrm",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/bookings', bookingDetails);
                Swal.fire("Room Reserved!", `Check in :${checkIn}`, "success");
                fetch(`https://booked-inn-server.vercel.app/rooms/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        availability: false
                    })
                })
                navigate('/')

            } else if (result.isDenied) {
                Swal.fire("Room not Booked", "", "info");
            }
        });

    }

    return (
        <>
            <Helmet>
                <title>BookedInn | {title}</title>
            </Helmet>
            <Swiper
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="h-[37vw]"
            >
                <SwiperSlide> <img src={images[0]} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={images[1]} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={images[2]} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={images[0]} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={images[1]} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={images[2]} alt="" /> </SwiperSlide>
            </Swiper>

            <div className="flex m-20">
                <div className="space-y-10">
                    <h3 className="text-6xl font-mar">{title}</h3>
                    <p className="text-2xl">{parseInt(roomSize)}m<sup>2</sup> / {type} / {view}</p>
                    <p className="text-xl">{description}</p>
                    <h4 className="text-3xl">Room Amenities</h4>
                    <div className="text-lg grid grid-cols-2">
                        {
                            amenities.map(amenity => <li
                                key={amenity}
                            >
                                {amenity}
                            </li>)
                        }
                    </div>
                    <div className="text-xl space-y-3">
                        <div className="text-3xl my-10">
                            <h4 >What’s included in this suite?</h4>
                        </div>
                        <p>Private balcony</p>
                        <p>140x200 cm Elite bed</p>
                        <p>Upholstered seat beside the panoramic window</p>
                        <p>TV-UHD screen for watching mountaineering films</p>
                        <p>Writing desk with USB ports for documenting your adventures</p>
                        <p>Room safe for your top mountain photos</p>
                        <p>Service station with Lavazza coffee machine, kettle and tea</p>
                        <p>Bathroom with rain shower</p>
                        <p>Comfortable terry towels and bathrobes</p>

                    </div>
                </div>
                <form onSubmit={handleBooking} className=" bg-base-100 shadow-xl h-full ml-20">
                    <div className="border-2 border-[#b99d75] p-8 space-y-3 px-10">
                        <p className="text-3xl font-mar font-semibold text-center pb-5">BOOK YOUR STAY</p>
                        <div className="flex border border-[#b99d75] p-2 w-96 items-center">
                            <p className="flex-1 text-xl">Check In</p>
                            <input type="date" name="checkInDate" required className="bg-transparent p-2" min={moment().format('YYYY-MM-DD')}></input>
                        </div>
                        <div className="flex border border-[#b99d75] p-2">
                            <p className="flex-1 text-xl">Rooms</p>
                            <select name="rooms" id="" className="bg-transparent border border-[#b99d75] w-40 p-2">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center border border-[#b99d75] p-2 w-1/2 mr-2">
                                <p className="flex-1 text-xl">Adults</p>
                                <select name="adults" id="" className="bg-transparent p-2">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="flex items-center border border-[#b99d75] p-2 w-1/2">
                                <p className="flex-1 text-xl">Children </p>
                                <select name="children" id="" className="bg-transparent p-2">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="text-3xl font-mar  my-5 mt-10">Extra Services</p>
                            <div className="flex gap-2">
                                <input type="radio" name="radio-1" className="radio" />
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
                        {
                            !availability && <p>Sorry, It&apos;s already being Reserved by our Guest </p>
                        }
                        <button className={`btn bg-[#b99d75] w-full rounded-none text-xl font-mar ${availability ? '' : 'btn-disabled'}`}>Book Your Stay Now</button>
                    </div>
                </form>
            </div>
            <h2 className="lg:ml-20 font-mar text-4xl font-semibold">Room Reviews</h2>
            <div className="mx-auto max-w-[90vw] space-y-5 my-10">
                {
                    reviews.length > 0 ?
                        reviews.map((review, index) =>
                            <div key={index} className="card bg-base-100 shadow-xl">
                                <div className="card-body flex-row items-center gap-14">
                                    <div>
                                        <RxAvatar size={50} />
                                        <h4>{review.name}</h4>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="card-title">{review.rating} <MdOutlineStar color="gold" size={25} /></h2>
                                        <p className="max-w-96">{review.review}</p>

                                    </div>
                                    <div className="card-actions text-end">
                                        <p>{review.timeFormatted}</p>
                                    </div>
                                </div>
                            </div>
                        ) :
                        <p>No reviews available for the room currently</p>
                }
            </div>

        </>
    );
};

export default RoomDetails;