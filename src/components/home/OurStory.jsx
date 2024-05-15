import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const OurStory = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className="text-center -mt-48">
			<div className=" max-w-4xl space-y-6 mx-auto">
				<div><span className="text-[#475746]">Welcome to BookedInn Lodge</span></div>
				<h3 className="text-5xl font-mar">
					Exceptional Chalets, tailored services and the experience of unique holidays	            </h3>	            <div className="cs-title-text">
					<p className="text-xl">The BookedInn Lodge consists of exceptional hotels chalets forming a harmonious and refined environment. Each room is unique, with colourful décor, Victorian furniture and claw-foot bathtubs. We welcome guests with authentic wine country hospitality. Stay, sip, and savor the best of Napa wine country at CozyStay.</p>	            </div>                <div className="cs-title-btn">
					<Link to={'/about'} className="btn bg-secondary text-white font-mar px-14 rounded-none">
						<span className="">Explore Our Story</span>                    </Link>
				</div>
			</div>
			<div className="md:flex justify-center max-w-[90vw] mx-auto my-10">
				<div className="md:w-1/3">
					<div data-aos="fade-right">
						<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-51.jpg" alt="" className="h-96 lg:h-[630px]" />
						<p>Horse Riding Valley Tour</p>
					</div>
					<div data-aos="zoom-in-right">
						<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-53.jpg" alt="" className="mt-32 lg:ml-32" />
						<p>Perfect Picnic Settings & Spots</p>
					</div>
				</div>
				<div className="w-1/4 lg:w-auto">
					<div className="border border-[#b99d75] h-64 md:h-[460px] w-[2px] bg-[#b99d75] mb-10 mx-auto"></div>
					<h3 className="text-3xl font-mar lg:w-96">Wonderful Countryside Activities & Great Experiences</h3>
					<div className="border border-[#b99d75] h-64 md:h-[960px] w-[2px] bg-[#b99d75] mb-10 mx-auto"></div>
				</div>
				<div className="md:w-1/3">
					<div data-aos="fade-left">
						<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-52.jpg" alt="" className="mt-44 w-[420px]" />
						<p>Self-guided Walking Tours</p>
					</div>
					<div data-aos="zoom-in-up">
						<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-54.jpg" alt="" className="mt-72 lg:-ml-24 w-[150%]" />
						<p>Blueberry Picking Experience</p>
					</div>
				</div>
			</div>
			<button className="btn btn-circle font-mar  w-32 h-32 mx-auto grid bg-[#53624E] md:-mt-14 hover:scale-150">
				<div className="btn btn-outline h-28 w-28 rounded-full text-[#d3b283]">
					<p>Our Hotel Location</p>
				</div>
			</button>
		</div>
	);
};

export default OurStory;