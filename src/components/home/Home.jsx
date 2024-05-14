import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import OurStory from "./OurStory";
import Room from "./Room";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Reviews from "./Reviews";
import { FaCar, FaHandHoldingUsd, FaParking, FaRegCalendarAlt, FaUser, FaWifi } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const Home = () => {

    const rooms = useLoaderData();
    const navigate = useNavigate();
    const [hasVisited, setHasVisited] = useState(sessionStorage.getItem('hasVisited') || false);

    useEffect(() => {
        if (!hasVisited) {
            sessionStorage.setItem('hasVisited', true);
            Swal.fire({
                title: 'Special Offers!',
                text: 'Get 20% off your first booking with us!',
                confirmButtonText: 'Book Now',
                confirmButtonColor: '#B99D75',
                showCloseButton: true,
                width: 700,
                heightAuto: true,
                animation: true,
                focusCancel: true,
                padding: "2rem",
                color: "white",
                background: 'linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.4)), url("https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/04/billy-jo-catbagan-zvhjrkA7gSk-unsplash.jpg") center / cover no-repeat',
                backdrop: `rgba(0,0,0,0.6)`
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/rooms');
                }
            });
        }
    }, [hasVisited, setHasVisited, navigate]);

    return (
        <div>
            <Banner></Banner>
            <OurStory></OurStory>
            <HotelMap></HotelMap>

            <div className="py-10 bg-[url('https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/bg-pattern-3.jpg')]">
                <div className="text-center text-white max-w-2xl mx-auto my-10">
                    <div><span>Welcome to BookedInn Lodge</span></div>
                    <h3 className="text-5xl font-mar">
                        Select Your Cozy Room
                    </h3>
                    <div>
                        <p className="text-lg">In a new setting composed of exceptional hotels chalets, nestled in a forest of pine trees, the CozyStay Lodge is expanding into a harmonious and refined unit that affirms it’s purpose: to sublimate the stay of its guests by a tailor-made service.</p>	            </div>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                >
                    {
                        rooms.map(room => <SwiperSlide key={room._id}><Room
                            room={room}
                        ></Room></SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className="flex my-20 w-[90vw] mx-auto">
                <div className="w-2/3">
                    <p>DISCOVER THE SERVICES WE OFFERED</p>
                    <h3 className="text-5xl font-mar">Chalets With All the Benefits of a Hotel</h3>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-14">
                        <div className="space-y-10">
                            <div className="">
                                <FaCar size={50} color="gold" className=" text-primary-500 mx-auto" />
                                <p className="text-lg font-medium text-gray-800">Airport Pick-up Service</p>
                            </div>
                            <div className="text-center grid items-center">
                                <FaUser size={50} color="gold" className=" text-primary-500 mx-auto" />
                                <p className="text-lg font-medium text-gray-800">Housekeeper Services</p>
                            </div>
                            <div className="text-center grid items-center">
                                <FaWifi size={50} color="gold" className=" text-primary-500 mx-auto" />
                                <p className="text-lg font-medium text-gray-800">Wifi & Internet</p>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="text-center grid items-center">
                                <FaRegCalendarAlt size={50} color="gold" className=" text-primary-500 mx-auto" />
                                <p className="text-lg font-medium text-gray-800">Laundry Services</p>
                            </div>
                            <div className="text-center grid items-center">
                                <FaHandHoldingUsd size={50} color="gold" className=" text-primary-500 mx-auto" />
                                <p className="text-lg font-medium text-gray-800">Breakfast in Bed</p>
                            </div>
                            <div className="text-center grid items-center">
                                <FaParking size={50} color="gold" className=" text-primary-500 mx-auto" />
                                <p className="text-lg font-medium text-gray-800">Private Parking Space</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-62-1200x1025.jpg" alt="" />
                </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;