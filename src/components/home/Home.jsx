import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import OurStory from "./OurStory";
import Room from "./Room";

const home = () => {

    const rooms = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OurStory></OurStory>
            <HotelMap></HotelMap>
            <div className="bg-[url('https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/bg-pattern-3.jpg')]">
                {
                    rooms.map(room => <Room
                        key={room._id}
                        room={room}
                    ></Room>)
                }
            </div>
        </div>
    );
};

export default home;