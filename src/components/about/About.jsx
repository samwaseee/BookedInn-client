import { FaCar, FaHandHoldingUsd, FaParking, FaRegCalendarAlt, FaUser, FaWifi } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <div
                className="w-full bg-[#000000] ">
                <img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/maria-orlova-XpSxazz9p2Y-unsplash.jpg" alt="" className="opacity-45" />
                <div className="lg:absolute top-96 left-[30%] text-center  text-white">
                    <p>AN ICONIC HOTEL SINCE 1998</p>
                    <h1 className="text-7xl font-mar my-5">About The Hotel</h1>
                    <p className="text-xl">A luxury boutique hotel in the heart of wine country</p>
                </div>
            </div>

            <div className="max-w-screen-md text-center mx-auto my-10">
                <h1>
                    WELCOME TO BookedInn Lodge
                </h1>
                <p className="text-6xl">Exceptional Chalets, tailored services and the experience of unique holidays</p>
                <p>The BookedInn Lodge consists of exceptional hotels chalets forming a harmonious and refined environment. Each room is unique, with colourful décor, Victorian furniture and claw-foot bathtubs. We welcome guests with authentic wine country hospitality. Stay, sip, and savor the best of Napa wine country at CozyStay.
                </p>


            </div>
            <div className="md:flex gap-10 items-center my-20 w-[90vw] mx-auto">
                <div className="lg:w-2/3">
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-14">
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
        </div>
    );
};

export default About;