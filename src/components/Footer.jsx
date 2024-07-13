import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center py-2 fixed bottom-0 bg-blue-950 text-white">
			<h2>Developed by: - Ekhlakh Ahmad</h2>
			<div className="flex justify-center items-center gap-2">
				❤️ Connect with me
				<div className="flex gap-2">
					<a href="https://www.instagram.com/ekhlakhahmad9/">
						<FaInstagram />
					</a>
					<a href="https://wa.me/9576650491">
						<FaWhatsapp />
					</a>
					<a href="https://www.linkedin.com/in/ekhlakhahmad/">
						<FaLinkedin />
					</a>
				</div>
				❤️
			</div>
		</div>
	);
};

export default Footer;
