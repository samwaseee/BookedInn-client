import { Map, Marker } from "pigeon-maps"

export function MyMap() {
    return (
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
    )
}

const HotelMap = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {MyMap()}
        </div>
    );
};

export default HotelMap;