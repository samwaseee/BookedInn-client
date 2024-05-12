import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {

    const { _id, images, title, pricePerNight, type, view, roomSize } = room;

    return (
        <div>
            <div>
                <Link to={`/rooms/${_id}`} className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={images[0]} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{ }</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;