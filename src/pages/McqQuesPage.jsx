import React from 'react'

const McqQuesPage = () => {
  return (
		<div className="flex flex-col items-center my-5 mx-auto">
			<div className="md:w-1/2 w-[95%] flex flex-col gap-5 border-[0.5px] border-blue-900 p-2 ">
				<h1 className="text-center text-lg font-semibold bg-blue-950 text-white rounded-md py-2">
					MCQ Question Based on Holy Quran.
				</h1>
				<h1 className="flex gap-2 text-lg">
					<span className="font-semibold">Ques1.</span>How many Surahs are in
					the Holy Quran?
				</h1>
				<ul className="flex flex-col gap-2 justify-center">
					<li className="p-2 border-[1px] cursor-pointer hover:bg-slate-100">
						A. <span>for practice</span>
					</li>
					<li className="p-2 border-[1px] cursor-pointer hover:bg-slate-100">
						B. <span>for practice</span>
					</li>
					<li className="p-2 border-[1px] cursor-pointer hover:bg-slate-100">
						C. <span>for practice</span>
					</li>
					<li className="p-2 border-[1px] cursor-pointer hover:bg-slate-100">
						D. <span>for practice</span>
					</li>
				</ul>
				<div className="flex justify-between md:p-5 p-2">
					<button
						// onClick={previewSurah}
						// disabled={index === 0}
						className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">
						Prev
					</button>
					<button
						// onClick={backToHome}
						className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">
						Home
					</button>
					<button
						// onClick={nextSurah}
						// disabled={index === surah.length - 1}
						className="py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-md
           md:font-semibold">
						Next
					</button>
				</div>
				<p className="text-center py-5">
					Question <span>1</span>/50
				</p>
			</div>
		</div>
	);
}

export default McqQuesPage
