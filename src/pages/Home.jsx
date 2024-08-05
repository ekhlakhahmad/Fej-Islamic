import React from "react";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import mcq from "../assets/MCQ.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="flex flex-wrap gap-5 justify-center py-2">
				<Link
					to="/surahDataPage"
					className="md:w-[25%] w-[95%] flex justify-center items-center cursor-pointer">
					<div>
						<img className="w-full h-full" src={banner2} alt="" />
						<h3 className=" w-full text-center p-2 bg-blue-900 text-white">
							Show All Surah (English)
						</h3>
					</div>
				</Link>
				<Link
					to="/surahDataPage"
					className="md:w-[25%] w-[95%] flex justify-center items-center cursor-pointer">
					<div>
						<img className="w-full h-full" src={banner} alt="" />
						<h3 className=" w-full text-center p-2 bg-blue-900 text-white">
							Show All Surah (Hindi)
						</h3>
					</div>
				</Link>
				<Link
					to="/McqQuesPage"
					className="md:w-[25%] w-[95%] flex justify-center items-center cursor-pointer">
					<div>
						<img className="w-full h-full" src={mcq} alt="" />
						<h3 className=" w-full text-center p-2 bg-blue-900 text-white">
							MCQ Question Based on Holy Quran
						</h3>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
