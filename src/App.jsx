import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurahDataPage from "./pages/SurahDataPage";
import NotFound from "./pages/NotFound";
import McqQuesPage from "./pages/McqQuesPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surahDataPage" element={<SurahDataPage />} />
            <Route path="/mcqQuesPage" element={<McqQuesPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
