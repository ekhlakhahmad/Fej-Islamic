const quranQuestion = [
	{
		question: "How many Surahs are in the Holy Quran?",
		options: ["A. 112", "B. 113", "C. 114", "D. 115"],
		answer: "C. 114",
	},
	{
		question: "How many Verses are in the Holy Quran?",
		options: ["A. 6000", "B. 6200", "C. 6400", "D. 6666"],
		answer: "D. 6666",
	},
	{
		question: "How many dots are in the Holy Quran?",
		options: ["A. 1005030", "B. 1015030", "C. 1025030", "D. 1035030"],
		answer: "B. 1015030",
	},
	{
		question: "How many over bars (Zaber) are in the Holy Quran?",
		options: ["A. 902435", "B. 912435", "C. 922435", "D. 932435"],
		answer: "D. 932435",
	},
	{
		question: "How many under bars (Zaer) are in the Holy Quran?",
		options: ["A. 385866", "B. 395866", "C. 405866", "D. 415866"],
		answer: "B. 395866",
	},
	{
		question: "How many Raque are in the Holy Quran?",
		options: ["A. 950", "B. 970", "C. 990", "D. 1000"],
		answer: "D. 1000",
	},
	{
		question: "How many stops (Waqf) are in the Holy Quran?",
		options: ["A. 5098", "B. 5198", "C. 5298", "D. 5398"],
		answer: "A. 5098",
	},
	{
		question: "How many Thashdeed are in the Holy Quran?",
		options: ["A. 18953", "B. 19053", "C. 19153", "D. 19253"],
		answer: "D. 19253",
	},
	{
		question: "How many letters are in the Holy Quran?",
		options: ["A. 323671", "B. 324671", "C. 325671", "D. 326671"],
		answer: "A. 323671",
	},
	{
		question: "How many Pash are in the Holy Quran?",
		options: ["A. 4708", "B. 4808", "C. 4908", "D. 5008"],
		answer: "B. 4808",
	},
	{
		question: "How many Madd are in the Holy Quran?",
		options: ["A. 1671", "B. 1721", "C. 1771", "D. 1821"],
		answer: "C. 1771",
	},
	{
		question: "How many words are in the Holy Quran?",
		options: ["A. 76701", "B. 77201", "C. 77701", "D. 78201"],
		answer: "C. 77701",
	},
	{
		question: "How many parts of the Holy Quran are there?",
		options: ["A. 28", "B. 29", "C. 30", "D. 31"],
		answer: "C. 30",
	},
	{
		question:
			"How many times is 'Bismillah Al-Rahman Al-Raheem' repeated in the Holy Quran?",
		options: ["A. 113", "B. 114", "C. 115", "D. 116"],
		answer: "B. 114",
	},
	{
		question: "How many Surahs start with 'Bismillah Al-Rahman Al-Raheem'?",
		options: ["A. 112", "B. 113", "C. 114", "D. 115"],
		answer: "B. 113",
	},
	{
		question: "How many times is the word 'Quran' repeated in the Holy Quran?",
		options: ["A. 68", "B. 69", "C. 70", "D. 71"],
		answer: "C. 70",
	},
	{
		question: "Which is the longest Surah of the Holy Quran?",
		options: ["A. Al-Imran", "B. Al-Nisa", "C. Al-Baqarah", "D. Al-Ma'idah"],
		answer: "C. Al-Baqarah",
	},
	{
		question: "Which is the best drink mentioned in the Holy Quran?",
		options: ["A. Water", "B. Honey", "C. Milk", "D. Juice"],
		answer: "C. Milk",
	},
	{
		question: "The best eatable thing mentioned in the Holy Quran is?",
		options: ["A. Dates", "B. Honey", "C. Olives", "D. Grapes"],
		answer: "B. Honey",
	},
	{
		question: "Which is the shortest Surah of the Holy Quran?",
		options: ["A. Al-Asr", "B. Al-Ikhlas", "C. Al-Kawthar", "D. Al-Falaq"],
		answer: "C. Al-Kawthar",
	},
	{
		question: "The longest verse of the Holy Quran is in which Surah?",
		options: [
			"A. Al-Imran",
			"B. Al-Nisa",
			"C. Al-Ma'idah",
			"D. Al-Baqarah No.282",
		],
		answer: "D. Al-Baqarah No.282",
	},
	{
		question: "The most disliked thing by God though Halal is?",
		options: ["A. Lying", "B. Stealing", "C. Divorce", "D. Backbiting"],
		answer: "C. Divorce",
	},
	{
		question: "Which letter is used the most time in the Holy Quran?",
		options: ["A. Baa", "B. Alaph", "C. Seen", "D. Meem"],
		answer: "B. Alaph",
	},
	{
		question: "Which letter is used the least time in the Holy Quran?",
		options: ["A. Zaa", "B. Dhaad", "C. Qaaf", "D. Sheen"],
		answer: "A. Zaa",
	},
	{
		question: "Which is the best night mentioned in the Holy Quran?",
		options: [
			"A. Night of Miraj",
			"B. Night of Eid",
			"C. Night of Qadar",
			"D. Night of Arafah",
		],
		answer: "C. Night of Qadar",
	},
	{
		question: "Which is the best month mentioned in the Holy Quran?",
		options: ["A. Muharram", "B. Ramzan", "C. Shawwal", "D. Dhul-Hijjah"],
		answer: "B. Ramzan",
	},
	{
		question: "Which is the biggest animal mentioned in the Holy Quran?",
		options: ["A. Whale", "B. Elephant", "C. Camel", "D. Lion"],
		answer: "B. Elephant",
	},
	{
		question: "Which is the smallest animal mentioned in the Holy Quran?",
		options: ["A. Ant", "B. Fly", "C. Mosquito", "D. Spider"],
		answer: "C. Mosquito",
	},
	{
		question: "How many words are in the longest Surah of the Holy Quran?",
		options: ["A. 25000", "B. 25250", "C. 25500", "D. 25750"],
		answer: "C. 25500",
	},
	{
		question: "How many words are in the smallest Surah of the Holy Quran?",
		options: ["A. 40", "B. 41", "C. 42", "D. 43"],
		answer: "C. 42",
	},
	{
		question:
			"Which Surah of the Holy Quran is called the mother of the Quran?",
		options: ["A. Al-Fatiha", "B. Al-Baqarah", "C. Al-Ikhlas", "D. Al-Kahf"],
		answer: "A. Al-Fatiha",
	},
	{
		question: "How many Surahs start with Al-Hamdulillah?",
		options: ["A. 3", "B. 4", "C. 5", "D. 6"],
		answer: "C. 5 (Hamd, Inaam, Kahf, Saba, & Fateha)",
	},
	{
		question:
			"Which Surah has the same number of verses as the number of Surahs in the Holy Quran?",
		options: ["A. Taqveer", "B. Takathur", "C. Taha", "D. Tabbat"],
		answer: "A. Taqveer, 114 verses",
	},
	{
		question: "How many Surahs' names consist of only one letter?",
		options: ["A. 2", "B. 3", "C. 4", "D. 5"],
		answer: "B. 3 (Qaf, Sad, & Noon)",
	},
	{
		question: "How many Surahs start with the word 'Inna'?",
		options: ["A. 3", "B. 4", "C. 5", "D. 6"],
		answer: "B. 4 (Fatha, Nuh, Qadr, Qausar)",
	},
	{
		question:
			"Which Surah has the number of its verses equal to the number of Masumeen?",
		options: ["A. Al-Baqarah", "B. Al-Imran", "C. Al-Nisa", "D. Al-Saff"],
		answer: "D. Al-Saff, 14 verses",
	},
	{
		question: "Which Surahs are called Musabbihat?",
		options: [
			"A. Al-Anfal, Al-Tawbah, Al-Rum",
			"B. Esra, Hadeed, Hsar, Juma, Taghabun & Aala",
			"C. Yaseen, Al-Waqi'a, Al-Mulk",
			"D. Al-Naba, Al-Nazi'at, Abasa",
		],
		answer: "B. Esra, Hadeed, Hsar, Juma, Taghabun & Aala",
	},
	{
		question: "How many Surahs are Makkahi and how many are Madni?",
		options: [
			"A. Makkahi 85, Madni 29",
			"B. Makkahi 86, Madni 28",
			"C. Makkahi 87, Madni 27",
			"D. Makkahi 88, Madni 26",
		],
		answer: "B. Makkahi 86, Madni 28",
	},
	{
		question: "Which Surah is named after the tribe of the Holy Prophet?",
		options: ["A. Al-Baqarah", "B. Al-Imran", "C. Al-Quraish", "D. Al-Hashr"],
		answer: "C. Al-Quraish",
	},
	{
		question: "Which Surah is called the heart of the Holy Quran?",
		options: ["A. Al-Fatiha", "B. Al-Baqarah", "C. Al-Ikhlas", "D. Yaseen"],
		answer: "D. Yaseen",
	},
	{
		question: "In which Surah is the name of Allah repeated five times?",
		options: ["A. Al-Baqarah", "B. Al-Nisa", "C. Al-Hajj", "D. Al-Ma'idah"],
		answer: "C. Al-Hajj",
	},
	{
		question: "Which Surahs are named Azaiam?",
		options: [
			"A. Al-Naba, Al-Nazi'at, Abasa",
			"B. Sajdah, Fusselat, Najum & Alaq",
			"C. Al-Rum, Al-Ankabut, Al-Ahzab",
			"D. Al-Mumtahina, Al-Saff, Al-Jumu'ah",
		],
		answer: "B. Sajdah, Fusselat, Najum & Alaq",
	},
	{
		question: "Which Surah is named after a Holy war?",
		options: ["A. Al-Baqarah", "B. Al-Tawbah", "C. Al-Ahzab", "D. Al-Fath"],
		answer: "C. Al-Ahzab",
	},
	{
		question: "Which Surah is named after a metal?",
		options: ["A. Al-Hadid", "B. Al-Furqan", "C. Al-Nahl", "D. Al-Hajj"],
		answer: "A. Al-Hadid",
	},
	{
		question: "Which Surah does not start with Bismillah?",
		options: ["A. Al-Nisa", "B. Al-Tawbah", "C. Al-Ikhlas", "D. Al-Mulk"],
		answer: "B. Al-Tawbah",
	},
	{
		question: "Which Surah is called 'Aroos-ul-Quran'?",
		options: ["A. Al-Rahman", "B. Al-Mulk", "C. Al-Furqan", "D. Al-Qiyamah"],
		answer: "A. Al-Rahman",
	},
	{
		question: "Which Surah is considered as 1/3 of the Holy Quran?",
		options: ["A. Al-Fatiha", "B. Al-Baqarah", "C. Al-Ikhlas", "D. Al-Kahf"],
		answer: "C. Al-Ikhlas",
	},
	{
		question: "The names of how many Surahs are without dots?",
		options: ["A. Three", "B. Four", "C. Five", "D. Six"],
		answer: "C. Five (Hamd, Raad, Toor, Room, Masad)",
	},
	{
		question: "In which Surah does Bismillah appear twice?",
		options: ["A. Al-Fatiha", "B. Al-Baqarah", "C. Al-Nisa", "D. Al-Naml"],
		answer: "D. Al-Naml",
	},
	{
		question: "How many Surahs start with the Initials (Mukette'at)?",
		options: ["A. 27", "B. 28", "C. 29", "D. 30"],
		answer: "C. 29",
	},
	{
		question: "Which Surah was revealed twice?",
		options: ["A. Al-Baqarah", "B. Al-Ikhlas", "C. Al-Hamd", "D. Al-Mulk"],
		answer: "C. Al-Hamd",
	},
	{
		question: "In which Surah are backbiters condemned?",
		options: ["A. Al-Baqarah", "B. Al-Humazah", "C. Al-Asr", "D. Al-Falaq"],
		answer: "B. Al-Humazah",
	},
	{
		question: "In which Surah is the name of Allah repeated in every verse?",
		options: ["A. Al-Baqarah", "B. Al-Nisa", "C. Al-Mujadala", "D. Al-Ma'idah"],
		answer: "C. Al-Mujadala",
	},
	{
		question: "In which Surah does the letter 'Fa' not appear?",
		options: ["A. Al-Fatiha", "B. Al-Ikhlas", "C. Al-Falaq", "D. Al-Kafirun"],
		answer: "A. Al-Fatiha",
	},
	{
		question: "Which Surahs are called Muzetain?",
		options: [
			"A. Al-Falaq & Al-Nas",
			"B. Al-Kafirun & Al-Ma'un",
			"C. Al-Ikhlas & Al-Lahab",
			"D. Al-Fil & Al-Quraish",
		],
		answer: "A. Al-Falaq & Al-Nas",
	},
	{
		question: "Which Surahs, if their names are reversed, remain the same?",
		options: [
			"A. Al-Falaq & Al-Nas",
			"B. Al-Kawthar & Al-Asr",
			"C. Al-Lail & Tabbat",
			"D. Al-Ma'un & Al-Kafirun",
		],
		answer: "C. Al-Lail & Tabbat",
	},
	{
		question:
			"Which Surah, if its first letter is removed, becomes the name of a city in Saudi Arabia?",
		options: ["A. Al-Baqarah", "B. Al-Nisa", "C. Al-Mulk", "D. Sajdah"],
		answer: "D. Sajdah",
	},
	{
		question: "Which Surahs start with the phrase 'Tabarakallazi'?",
		options: [
			"A. Al-Mulk & Al-Furqan",
			"B. Al-Naba & Al-Nazi'at",
			"C. Al-Baqarah & Al-Imran",
			"D. Al-Anfal & Al-Tawbah",
		],
		answer: "A. Al-Mulk & Al-Furqan",
	},
	{
		question: "Macci Surahs were revealed over how many years?",
		options: ["A. 11 years", "B. 12 years", "C. 13 years", "D. 14 years"],
		answer: "C. 13 years",
	},
	{
		question: "Madani Surahs were revealed over how many years?",
		options: ["A. 8 years", "B. 9 years", "C. 10 years", "D. 11 years"],
		answer: "C. 10 years",
	},
	{
		question: "Which Surahs start with the word 'Kad'?",
		options: [
			"A. Al-Baqarah & Al-Nisa",
			"B. Al-Fatiha & Al-Ikhlas",
			"C. Al-Mujadala & Al-Mu'minun",
			"D. Al-Falaq & Al-Nas",
		],
		answer: "C. Al-Mujadala & Al-Mu'minun",
	},
	{
		question: "Which Surah is related to Hazrat Ali?",
		options: ["A. Al-Baqarah", "B. Al-Imran", "C. Al-Ahzab", "D. Al-Adiyat"],
		answer: "D. Al-Adiyat",
	},
	{
		question: "How many Surahs are in the 30th chapter?",
		options: ["A. 35", "B. 36", "C. 37", "D. 38"],
		answer: "C. 37",
	},
];
