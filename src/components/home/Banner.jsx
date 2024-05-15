import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-50.jpg')] bg-cover bg-center text-white">
                <div className="flex justify-between bg-black opacity-65">
                    <div className="md:max-w-[60vw] p-20 my-20 space-y-8">
                        <p className="text-xl">BEST PLACE FOR RELAX</p>
                        <h3 className="text-6xl">Perfect Countryside Vacation at BookedInn Lodge</h3>
                        <p className="text-2xl">Nestled in Napa Valley, BookedInn Lodge is a luxury boutique hotel in the heart of wine country, conveniently located in the historic Napa Mill neighbourhood, just steps from some of the best wineries and restaurants.</p>
                    </div>
                </div>
            </div>
            <div className="text-center p-1 bg-[#323d32] opacity-90 md:relative -top-72 left-1/2 lg:left-2/3 max-w-96 text-white mb-64 md:mb-0">
                <div className="border-2 border-[#b99d75] p-3 space-y-3">
                    <p className="text-sm -mb-3">CHOOSE DATE TO SEARCH</p>
                    <p className="text-3xl font-mar font-semibold">BOOK YOUR STAY</p>
                    <div className="flex border border-[#b99d75] p-2">
                        <p className="flex-1 text-xl">Check In</p>
                        <input type="date" defaultValue="14/05/2024" data-value="2024-05-10" className="bg-transparent border border-[#b99d75] p-2"></input>
                    </div>
                    <div className="flex border border-[#b99d75] p-2">
                        <p className="flex-1 text-xl">Check Out</p>
                        <input type="date" defaultValue="14/05/2024" data-value="2024-05-10" className="bg-transparent border border-[#b99d75] p-2"></input>
                    </div>
                    <div className="flex border border-[#b99d75] p-2">
                        <p className="flex-1 text-xl">Rooms</p>
                        <select name="" id="" className="bg-transparent border border-[#b99d75] w-40 p-2">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center border border-[#b99d75] p-2 w-1/2 mr-2">
                            <p className="flex-1 text-xl">Adults</p>
                            <select name="" id="" className="bg-transparent p-2">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>
                        <div className="flex items-center border border-[#b99d75] p-2 w-1/2">
                            <p className="flex-1 text-xl">Children </p>
                            <select name="" id="" className="bg-transparent p-2">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>
                    </div>
                    <Link to={'/rooms'}><button className="btn bg-[#b99d75] w-full rounded-none">Check Availability</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;