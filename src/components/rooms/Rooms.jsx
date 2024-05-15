import axios from 'axios';
import RoomCard from './RoomCard';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { CiFilter } from 'react-icons/ci';
import { Helmet } from 'react-helmet';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [value, setValue] = useState([100, 500]);

    useEffect(() => {
        axios.get(`https://booked-inn-server.vercel.app/rooms?minPrice=${value[0]}&maxPrice=${value[1]}`)
            .then(res => {
                setRooms(res.data);
            })
    }, [value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Helmet>
                <title>BookedInn | Rooms</title>
            </Helmet>
            <div className='space-y-10 my-20'>
                <div className='text-center space-y-5 max-w-3xl mx-auto'>
                    <p className='text-xs'>WELCOME TO COZYSTAY LODGE</p>
                    <h1 className='text-5xl font-mar'>Select Your Cozy Room</h1>
                    <p>In a new setting composed of exceptional hotels chalets, nestled in a forest of pine trees, the CozyStay Lodge is expanding into a harmonious and refined unit that affirms it’s purpose: to sublimate the stay of its guests by a tailor-made service.</p>
                </div>
                <div className='md:ml-14'>
                    <Box sx={{ width: 300 }}>
                        <div className="text-xl font-medium text-black flex items-center"><CiFilter size={30} /> Cost Range Filter </div>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaLabel={() => 'Price range'}
                            min={100}
                            max={500}
                            sx={{ color: '#B99D75' }}
                        />
                        <div> ${value[0]} - ${value[1]}</div>
                    </Box>
                </div>
                {
                    rooms.map((room, index) => <RoomCard
                        key={room._id}
                        room={room}
                        index={index}
                    ></RoomCard>)
                }
            </div>
        </>
    );
};

export default Rooms;