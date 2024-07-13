import React from "react";

const SurahEng = () => {
	return (
		<div className="flex flex-col items-center my-20 mx-auto">
			<div className="flex flex-col gap-5 md:w-1/2 p-2 md:p-4 border-2 border-blue-700 rounded-md">
				<div className="flex gap-10">
					<h1 className="font-semibold">Surah Number: </h1>
					<h2>Fatehah</h2>
				</div>
				<div className="flex gap-10">
					<h1 className="font-semibold">Meaning: </h1>
					<h2>"The Opening"</h2>
				</div>
				<div className="flex justify-evenly py-5">
					<h1 className="font-semibold">Total Ayat:</h1>
					<h1 className="font-semibold">Total Rukus:</h1>
				</div>
				<div className="flex justify-between md:p-5 p-2">
					<button className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">Preview Surah</button>
					<button className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">Back To Home</button>
					<button className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">Next Surah</button>
				</div>
			</div>
		</div>
	);
};

export default SurahEng;
