import { Map, Marker } from "pigeon-maps"

export function MyMap() {
    return (
        <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
    )
}

const HotelMap = () => {
    return (
        <div className="max-w-7xl mx-auto border border-primary p-4">
            {MyMap()}
        </div>
    );
};

export default HotelMap;