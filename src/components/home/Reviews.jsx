import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/pagination';
import { useLoaderData } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { MdStarRate } from "react-icons/md";


const Reviews = () => {
    const reviews = useLoaderData();
    console.log(reviews);
    return (
        <div>
            <p className="text-center mt-10 text-secondary text-sm font-semibold">FEEDBACK FROM OUR DEAR GUESTS</p>
            <h1 className="text-5xl text-center font-mar my-10">What they say about us</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2500
                }}
                modules={[Pagination, Autoplay]}
            >
                {
                    reviews.map(review => review.reviews.map((userReview, index) =>
                        <SwiperSlide
                            key={index}
                        >
                            <div className="card w-96">
                                <div className="flex justify-center px-36 mt-4">
                                    {Array.from({ length: parseInt(userReview.rating) }).map((_, starIndex) => (
                                        <MdStarRate color="gold" key={starIndex} className="mx-auto" />
                                    ))}
                                </div>
                                <div className="card-body text-center">
                                    <p>{userReview.review}</p>
                                    <RxAvatar size={40} className="mx-auto" />
                                    <h2 className="card-title mx-auto">{userReview.name}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Reviews;