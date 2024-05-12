import { useLoaderData } from 'react-router-dom';
import RoomCard from './RoomCard';

const Rooms = () => {
    const rooms = useLoaderData();
    return (
        <div className='space-y-10 my-20'>
            {
                rooms.map(room => <RoomCard
                key={room._id}
                room={room}
                ></RoomCard>)
            }
        </div>
    );
};

export default Rooms;