import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import OurStory from "./OurStory";
import Room from "./Room";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import moment from "moment";
import Reviews from "./Reviews";



const home = () => {

    const rooms = useLoaderData();
    //console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

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
                    </div>
                    <div>
                        <img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-62-1200x1025.jpg" alt="" />
                    </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default home;