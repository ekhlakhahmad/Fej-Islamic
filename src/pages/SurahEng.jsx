import React, { useState } from "react";
import data from "../utilities/data";
import { useNavigate, useParams } from "react-router-dom";

const SurahEng = () => {
	const [surah, setSurah] = useState(0);
	const navigate = useNavigate();
	const params = useParams();

	const nextData = () => {};

	const preData = () => {};

	const backToHome = () => {
		navigate("/");
	};

	return (
		<div className="flex flex-col">
			<p></p>
			<div className="flex gap-5">
				<button>Back</button>
				<button onClick={backToHome}>Home</button>
				<button>Next</button>
			</div>
		</div>
	);
};

export default SurahEng;
