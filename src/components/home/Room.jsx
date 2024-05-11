import { Link } from 'react-router-dom';

const Room = (room) => {

    const { _id, images, title, pricePerNight, type, view, roomSize } = room.room;
    // console.log(room.room)

    return (
        <div>
            <div className="relative w-full text-white text-center">
                <figure><img src={images[0]} alt="Shoes" /></figure>
                <div className='bg-white absolute text-black text-xs border-2 border-primary p-1 top-1 left-1'>{pricePerNight}$/Night
                </div>
                <div className="absolute w-full items-center h-3/4 left-0 bottom-0 bg-gradient-to-t from-[#232323] to-[rgba(21, 21, 21, 0)] pt-14 rounded-none">
                    <h2 className="text-3xl font-mar">{title}</h2>
                    <div className="space-y-2">
                        <div>
                            <p>{parseInt(roomSize)}m<sup>2</sup> / {type} / {view}</p>
                        </div>
                    </div>
                    <Link to={`/rooms/${_id}`}><button className="btn bg-secondary text-primary rounded-none">Book Now </button></Link>
                </div>
            </div>
        </div>
    );
};

Room.propTypes = {

};

export default Room;