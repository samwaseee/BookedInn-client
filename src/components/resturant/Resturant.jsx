import { Link, useLoaderData } from "react-router-dom";
import Menu from "./Menu";

const Resturant = () => {

    const menus = useLoaderData()

    return (
        <>
            <div
                className="w-full bg-[#000000] ">
                <img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/jonas-denil-cX76OCFBW2w-unsplash.jpg" alt="" className="opacity-45" />
                <div className="lg:absolute top-96 left-[24%] text-center  text-white max-w-[50vw]">
                    <p>CURATED CULINARY EXPERIENCES</p>
                    <h1 className="text-7xl font-mar my-5">BookedInn Restaurant</h1>
                    <p className="text-xl">Carefully curated menus incorporate locally sourced ingredients into exquisite dishes that reflect the locals and the world around them.</p>
                </div>
            </div>
            <div className="md:flex gap-10 my-32 mx-10">
                <div className="max-w-[45vw]">
                    <p>FINE DINING EXPERIENCES</p>
                    <h1 className="text-7xl font-mar my-5">Indulge your senses and discover new flavors</h1>
                    <p className="text-xl">We are committed to create wonderful memories for all guests with every stay. Carefully curated menus incorporate locally sourced ingredients into exquisite dishes that reflect the locals and the world around them. Wherever you are in the world, we’ll take your taste buds on a journey they’ll never forget. Authentic flavors and culinary skills combine to create an unforgettable dining experience.
                        <br />
                        This gourmet restaurant has been awarded 2 Michelin stars, making it one of the highest rated restaurants in the region. Come and taste the surprising and seemingly endless flavors and spend an unforgettable evening at a Michelin restaurant.
                        <br />
                        A reservation is recommended. </p>
                </div>
                <img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/04/jonathan-borba-fIGQshb_Bh0-unsplash-768x1152.jpg" alt="" className="w-1/4 h-1/2" />
                <img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/04/lucas-lobak-neves-wL672yv_hss-unsplash-768x1152.jpg" alt="" className="w-1/5 h-1/4 my-auto" />

            </div>
            <div className="my-10">
                <p className="text-center">FINE DINING EXPERIENCES</p>
                <h1 className="text-5xl text-center font-mar my-5">Our Menu</h1>
                <div className="md:flex gap-5 justify-center">
                    {
                        menus.map(menu => <div key={menu._id}>
                            <h3 className="text-primary text-center text-3xl font-mar">{menu.category}</h3>
                            {
                                menu.items.map(submenu => <Menu key={submenu._id} menu={submenu}></Menu>)
                            }
                        </div>)
                    }
                </div>
                <Link className="mx-[46vw] "><button className='btn bg-secondary text-primary'>View Full Menu</button></Link>
            </div>
        </>
    );
};

export default Resturant;