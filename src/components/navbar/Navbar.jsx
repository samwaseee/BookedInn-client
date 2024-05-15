import { FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";

const Navbar = () => {

    const { user,logOut } = useAuth();

    const handleSignout = () => {
        logOut()
            .then(()=>{
                toast.info("Signed Out ");
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#b99d75" : "white",
                backgroundColor: isActive ? "transparent" : "",
                borderBottom: isActive ? "solid #b99d75" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to="/rooms" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#b99d75" : "white",
                backgroundColor: isActive ? "transparent" : "",
                borderBottom: isActive ? "solid #b99d75" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Rooms</NavLink></li>
        <li><NavLink to="/about" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#b99d75" : "white",
                backgroundColor: isActive ? "transparent" : "",
                borderBottom: isActive ? "solid #b99d75" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>About Us</NavLink></li>
        <li>
            {
                user &&
                <NavLink to="/myBookings" className="rounded-sm" style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#b99d75" : "white",
                        backgroundColor: isActive ? "transparent" : "",
                        borderBottom: isActive ? "solid #b99d75" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}>My Bookings</NavLink>
            }
        </li>
    </>

    return (
        <div className="navbar h-24 bg-[url('https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/05/bg-pattern-3.jpg')]">
            <div className="w-1/3 md:navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-secondary w-52">
                        {links}
                    </ul>
                </div><div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
            <div className="grid">
                <a className="btn btn-ghost text-2xl md:text-4xl font-mar">BookedInn</a>
                <div className="flex gap-2 items-center justify-center">
                    <FaStar size={7} color="#b99d75" />
                    <FaStar size={10} color="#b99d75" />
                    <FaStar size={15} color="#b99d75" />
                    <FaStar size={10} color="#b99d75" />
                    <FaStar size={7} color="#b99d75" />
                </div>
            </div>
            <div className="navbar-end grid md:flex">
                {
                    user ?
                        <div className="flex gap-3 items-center">
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                <button className=""> <img src={user.photoURL} alt="No image" className="w-10" /> </button>
                            </a>
                            <Tooltip id="my-tooltip" className="z-10"/>
                            <button onClick={handleSignout} className="btn btn-outline text-primary rounded-none">Sign Out</button>
                        </div>
                        :
                        <Link to={'/signin'}><button className="btn btn-outline text-primary rounded-none">Sign In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;