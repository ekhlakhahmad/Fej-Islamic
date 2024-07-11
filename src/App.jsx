import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurahEng from "./pages/SurahEng";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/surahEng" element={<SurahEng />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
