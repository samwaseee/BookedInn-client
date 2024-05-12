import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const BookingRow = ({ booking,handleDelete }) => {
    // console.log(booking);
    const { _id, checkIn, room, title, pricePerNight, image, adult, children ,roomId } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id,roomId)} className="btn btn-ghost p-1">
                    <RiDeleteBin5Line color="red" size={20} />
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24">
                        <img src={image} alt={title} />
                    </div>
                </div>
            </td>
            <td>
                <div>
                <p>{title}</p>
                <p>Rooms:{room}, Adults:{adult}, Children:{children}</p>
            </div>
            </td>
            <td>{checkIn}</td>
            <td>${pricePerNight}</td>
            <th>
                <Link to={`/updatebooking/${_id}`}><button className="btn btn-ghost btn-xs"> <GrUpdate /> </button></Link>
            </th>
        </tr>
    );
};

export default BookingRow;