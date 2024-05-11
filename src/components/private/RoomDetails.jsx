import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const RoomDetails = () => {

    const room = useLoaderData();
    console.log(room);
    const { amenities, availability, bathrooms, description, images, pricePerNight, reviews, roomSize, specialOffers, title, type, view } = room;

    return (
        <>
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
                <div className=" bg-base-100 shadow-xl h-full ml-20">
                    <div className="border-2 border-[#b99d75] p-8 space-y-3 px-10">
                        <p className="text-sm -mb-3 text-center">CHOOSE DATE TO SEARCH</p>
                        <p className="text-3xl font-mar font-semibold text-center pb-5">BOOK YOUR STAY</p>
                        <div className="flex border border-[#b99d75] p-2 items-center">
                            <p className="flex-1 text-xl">Check In</p>
                            <input type="date" defaultValue="14/05/2024" data-value="2024-05-10" className="bg-transparent p-2"></input>
                        </div>
                        <div className="flex border border-[#b99d75] p-2 w-80 justify-between">
                            <p className="flex-1 text-xl">Check Out</p>
                            <input type="date" defaultValue="14/05/2024" data-value="2024-05-10" className="bg-transparent  p-2"></input>
                        </div>
                        <div className="flex border border-[#b99d75] p-2">
                            <p className="flex-1 text-xl">Rooms</p>
                            <select name="" id="" className="bg-transparent border border-[#b99d75] w-40 p-2">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center border border-[#b99d75] p-2 w-1/2 mr-2">
                                <p className="flex-1 text-xl">Adults</p>
                                <select name="" id="" className="bg-transparent p-2">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                            <div className="flex items-center border border-[#b99d75] p-2 w-1/2">
                                <p className="flex-1 text-xl">Children </p>
                                <select name="" id="" className="bg-transparent p-2">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="text-3xl font-mar  my-5 mt-10">Extra Services</p>
                            <div className="flex gap-2">
                                <input type="radio" name="radio-1" className="radio" />
                                <p className="flex-1">Room Clean</p>
                                <p>9$/per night</p>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="radio-1" className="radio" />
                                <p className="flex-1">Massage</p>
                                <p>19$/per night</p>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="radio-1" className="radio" />
                                <p className="flex-1">Day Spa</p>
                                <p>29$/per night</p>
                            </div>
                        </div>
                        <div className="flex border-t-2 py-5 justify-between items-center">
                            <h3 className="text-3xl font-mar">Total</h3>
                            <p className="text-2xl">{pricePerNight}$</p>
                        </div>
                        <button className="btn bg-[#b99d75] w-full rounded-none text-xl font-mar">Book Your Stay Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default RoomDetails;