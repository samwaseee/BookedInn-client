import axios from 'axios';
import RoomCard from './RoomCard';
import { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(500);

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        console.log(minPrice)
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
        console.log(maxPrice)
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => {
                setRooms(res.data);
            })
    }, [minPrice,maxPrice]);

    return (
        <div className='space-y-10 my-20'>
            <div className='text-center space-y-5 max-w-3xl mx-auto'>
                <p className='text-xs'>WELCOME TO COZYSTAY LODGE</p>
                <h1 className='text-5xl font-mar'>Select Your Cozy Room</h1>
                <p>In a new setting composed of exceptional hotels chalets, nestled in a forest of pine trees, the CozyStay Lodge is expanding into a harmonious and refined unit that affirms it’s purpose: to sublimate the stay of its guests by a tailor-made service.</p>
            </div>
            <div className="px-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
                <h3>Filter</h3>
                <div className="flex-shrink-0">
                    <input
                        type="range"
                        min="100"
                        max="500"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                    />
                    <div>Min: ${minPrice}</div>
                </div>
                <div className="flex-shrink-0">
                    <input
                        type="range"
                        min="150"
                        max="500"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                    />
                    <div>Max: ${maxPrice}</div>
                </div>
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