import { Map, Marker } from "pigeon-maps"

export function MyMap() {
    return (
        <Map height={500} defaultCenter={[38.297539, -122.286855]} defaultZoom={12}>
            <Marker width={50} anchor={[38.297539, -122.286855]} />
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