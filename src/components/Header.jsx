import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className="flex justify-between items-center px-5 py-1 shadow-md static top-0">
			<img className="w-14" src={logo} alt="logo" />
			<div onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer">
				{darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
			</div>
		</div>
	);
};

export default Header;
