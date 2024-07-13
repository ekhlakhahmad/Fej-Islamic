import React from "react";
import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";


const Home = () => {

	return (
		<div>
			<div className="flex flex-wrap gap-2 justify-center py-2">
				<div className="md:w-[25%] w-[90%] h-[280px] flex flex-col justify-center items-center cursor-pointer">
					<img className="w-full h-full" src={banner} alt="" />
					<h3 className=" w-full text-center p-2 bg-blue-800 text-white">
						Show All Surah (Hindi)
					</h3>
				</div>
				<div className="md:w-[25%] w-[90%] h-[280px] flex flex-col justify-center items-center cursor-pointer">
					<img className="w-full h-full" src={banner2} alt="" />
					<h3 className=" w-full text-center p-2 bg-blue-800 text-white">
						Show All Surah (English)
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;
