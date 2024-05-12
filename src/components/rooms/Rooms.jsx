import { useLoaderData } from 'react-router-dom';
import RoomCard from './RoomCard';

const Rooms = () => {
    const rooms = useLoaderData();
    return (
        <div className='space-y-10 my-20'>
            <div className='text-center space-y-5 max-w-3xl mx-auto'>
                <p className='text-xs'>WELCOME TO COZYSTAY LODGE</p>
                <h1 className='text-5xl font-mar'>Select Your Cozy Room</h1>
                <p>In a new setting composed of exceptional hotels chalets, nestled in a forest of pine trees, the CozyStay Lodge is expanding into a harmonious and refined unit that affirms it’s purpose: to sublimate the stay of its guests by a tailor-made service.</p>
            </div>
            {
                rooms.map((room, index) => <RoomCard
                    key={room._id}
                    room={room}
                    index={index}
                ></RoomCard>)
            }
        </div>
    );
};

export default Rooms;