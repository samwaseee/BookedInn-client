import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const RoomCard = ({ room, index }) => {

    const { _id, images, title, description, pricePerNight, type, view, roomSize } = room;

    return (
        <div>
            <div>
                <Link to={`/rooms/${_id}`} className="hero bg-base-200 shadow-xl w-[95vw] mx-auto">
                    <div className="">
                        <div className={`hero-content gap-14 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <img src={images[0]} className="max-w-xl rounded-lg shadow-2xl hover:scale-110 duration-700" />
                            <div>
                                <h1 className="text-5xl font-bold font-mar">{title}</h1>
                                <p className="py-6">{description.slice(description.indexOf('.') + 1)}</p>
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

export default RoomCard;