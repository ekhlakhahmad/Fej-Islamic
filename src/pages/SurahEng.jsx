import React, { useState } from "react";
import surah from "../components/utility/surah.js";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

const SurahEng = () => {
	const [surahData, setSurahData] = useState(surah);
	const [index, setIndex] = useState(0);

	const nextSurah = () => {
		setIndex(index + 1);
	};

	const previewSurah = () => {
		setIndex(index - 1);
	};

	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center my-5 mx-auto gap-10">
			<div className="md:w-1/2 w-[95%] flex justify-between items-center gap-1 border-[.5px] border-blue-900 rounded-full">
				<CiSearch className="w-10" />
				<input
					className="w-full outline-none"
					type="search"
					placeholder="search surah number"
				/>
				<button className="bg-blue-900 hover:bg-blue-950 font-semibold text-white rounded-e-full p-1">
					search
				</button>
			</div>
			<div className="flex flex-col gap-5 md:w-1/2 w-[95%] p-2 md:p-4 border-2 border-blue-700 rounded-md">
				<div className="flex gap-10">
					<h1 className="font-semibold">
						Surah Number:{" "}
						<span className="text-blue-950 font-bold">
							{surahData[index].id}
						</span>
					</h1>
					<h2>
						<span className="text-blue-950 font-bold">
							{surahData[index].surahName}
						</span>
					</h2>
				</div>
				<div className="flex gap-10">
					<h1 className="font-semibold">Meaning: </h1>
					<h2 className="flex">
						<RiSingleQuotesL />
						<span className="text-blue-950 font-bold">
							{surahData[index].meaning}
						</span>
						<RiSingleQuotesR />
					</h2>
				</div>
				<div className="flex justify-evenly py-5">
					<h1 className="font-semibold">
						Total Ayat:{" "}
						<span className="text-blue-950 font-bold">
							{surahData[index].totalAyahs}
						</span>
					</h1>
					<h1 className="font-semibold">
						Total Rukus:{" "}
						<span className="text-blue-950 font-bold">
							{surahData[index].totalRukus}
						</span>
					</h1>
				</div>
				<div className="flex justify-between md:p-5 p-2">
					<button
						onClick={previewSurah}
						disabled={index === 0}
						className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">
						Preview
					</button>
					<button
						onClick={() => navigate("/")}
						className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">
						Home
					</button>
					<button
						onClick={nextSurah}
						disabled={index === surah.length - 1}
						className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default SurahEng;
