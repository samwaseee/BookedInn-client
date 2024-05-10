const OurStory = () => {
	return (
		<div className="text-center -mt-48">
			<div className=" max-w-4xl space-y-6 mx-auto">
				<div><span className="text-[#475746]">Welcome to BookedInn Lodge</span></div>
				<h3 className="text-5xl font-mar">
					Exceptional Chalets, tailored services and the experience of unique holidays	            </h3>	            <div className="cs-title-text">
					<p className="text-xl">The CozyStay Lodge consists of exceptional hotels chalets forming a harmonious and refined environment. Each room is unique, with colourful décor, Victorian furniture and claw-foot bathtubs. We welcome guests with authentic wine country hospitality. Stay, sip, and savor the best of Napa wine country at CozyStay.</p>	            </div>                <div className="cs-title-btn">
					<a className="btn bg-[#53624e] text-white font-mar px-14 rounded-none">
						<span className="">Explore Our Story</span>                    </a>
				</div>
			</div>
			<div className="flex justify-center max-w-[90vw] mx-auto my-10">
				<div className="w-1/3">
					<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-51.jpg" alt="" className="h-[630px]"/>
					<p>Horse Riding Valley Tour</p>
					<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-53.jpg" alt="" className="mt-32 ml-32"/>
					<p>Perfect Picnic Settings & Spots</p>
				</div>
				<div className="">
					<div className="border border-[#b99d75] h-[460px] w-[2px] bg-[#b99d75] mb-10 mx-auto"></div>
					<h3 className="text-3xl font-mar w-96">Wonderful Countryside Activities & Great Experiences</h3>
					<div className="border border-[#b99d75] h-[960px] w-[2px] bg-[#b99d75] mb-10 mx-auto"></div>
				</div>
				<div className="w-1/3">
					<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-52.jpg" alt="" className="mt-44 w-[420px]"/>
					<p>Self-guided Walking Tours</p>
					<img src="https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/img-54.jpg" alt="" className="mt-72 -ml-24 w-[150%]"/>
					<p>Blueberry Picking Experience</p>
				</div>
			</div>
			<button className="btn btn-circle w-32 h-32 mx-auto grid bg-[#53624E] ">
				<div className="btn btn-outline h-28 w-28 rounded-full text-[#d3b283]">
					<p>Explore Our Hotels</p>
				</div>
			</button>
		</div>
	);
};

export default OurStory;