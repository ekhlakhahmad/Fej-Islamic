import React, { useState } from "react";
import surah from "../components/utility/surah.js";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

const SurahDataPage = () => {
	const [surahData, setSurahData] = useState(surah);
	const [index, setIndex] = useState(0);
  const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState();

	const nextSurah = () => {
		setIndex(index + 1);
	};

	const previewSurah = () => {
		setIndex(index - 1);
	};
	const backToHome = () => {
		navigate("/");
	};

	const handleSearch = () => {
		const surahNumber = parseInt(searchQuery);
		if (!surahNumber || surahNumber < 1 || surahNumber > surah.length) {
			alert("Invalid surah number. Please enter a number between 1 and 114.");
			return;
		}
		setIndex(surahNumber - 1);
		setSearchQuery("");
	};

	const onKeyDown = (event) => {
		if (event.keyCode === 13) {
			handleSearch();
		}
	};

	return (
		<div className="flex flex-col items-center my-5 mx-auto gap-10">
			<div className="md:w-1/2 w-[95%] flex justify-between items-center gap-1 border-[.5px] border-blue-900 rounded-full">
				<CiSearch className="w-10" />
				<input
					className="w-full outline-none"
          type="search"
          inputMode="numeric"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onKeyDown={onKeyDown}
					placeholder="search surah number"
				/>
				<button
					onClick={handleSearch}
					className="bg-blue-900 hover:bg-blue-950 font-semibold text-white rounded-e-full p-1 px-2">
					Search
				</button>
			</div>
			<div className="flex flex-col gap-5 md:w-1/2 w-[95%] p-2 md:p-4 border-2 border-blue-700 rounded-md">
				<div className="flex gap-2">
					<h1 className="font-semibold flex gap-1">
						Surah Number:
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
				<div className="flex gap-2">
					<h1 className="font-semibold">Meaning: </h1>
					<h2 className="flex">
						<RiSingleQuotesL />
						<span className="text-blue-950 font-bold">
							{surahData[index].meaning}
						</span>
						<RiSingleQuotesR />
					</h2>
				</div>
				<div className="flex gap-10">
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
						onClick={backToHome}
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

export default SurahDataPage;
