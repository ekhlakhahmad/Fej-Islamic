import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col justify-center items-center my-8 gap-10">
			<h1 className="text-[100px] font-extrabold text-red-800">Oops!</h1>
			<h2 className="text-xl">404 - PAGE NOT FOUND</h2>
			<button
				onClick={() => navigate("/")}
				className="py-2 px-4 text-white bg-blue-900 hover:bg-blue-950 rounded-full">
				Go to Home Page
			</button>
		</div>
	);
};

export default NotFound;
