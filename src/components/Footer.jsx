import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center py-2 fixed bottom-0 bg-blue-950 text-white">
			<h2>Developed by: -</h2>
			<div className="flex justify-center items-center gap-2">
				❤️ Ekhlakh Ahmad Connect with me
				<div className="flex gap-1">
					<FaInstagram />
					<FaWhatsapp />
					<FaLinkedin />
				</div>
				❤️
			</div>
		</div>
	);
};

export default Footer;
