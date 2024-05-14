import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/pagination';
import { RxAvatar } from "react-icons/rx";
import { MdStarRate } from "react-icons/md";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";


const Reviews = () => {

    const [reviews,setReview] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/Review`)
            .then(res => {
                setReview(res.data);
            })
    }, []);

    // console.log(reviews);

    return (
        <div className="mx-auto max-w-[95vw]">
            <p className="text-center mt-10 text-secondary text-sm font-semibold">FEEDBACK FROM OUR DEAR GUESTS</p>
            <h1 className="text-5xl text-center font-mar my-10">What they say about us</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true
                }}
                autoplay={
                    {delay: 3000}
                }
                modules={[Pagination, Autoplay]}
            >
                {
                    reviews.map((userReview, index) =>
                        <SwiperSlide
                            key={index}
                        >
                            <div className="card w-96">
                                <div className="flex justify-center px-36 mt-4">
                                    {Array.from({ length: parseInt(userReview.rating) }).map((_, starIndex) => (
                                        <MdStarRate color="gold" key={starIndex} className="mx-auto" />
                                    ))}
                                </div>
                                <div className="card-body text-center mx-auto">
                                    <p>{userReview.review}</p>
                                    <p className="text-end my-3 text-primary">{moment(userReview.timeFormatted, 'MMM D YYYY, h:mm:ss a').format('MMMM D, YYYY')}</p>
                                    <RxAvatar size={40} className="mx-auto" />
                                    <h2 className="card-title mx-auto mb-5">{userReview.name}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Reviews;