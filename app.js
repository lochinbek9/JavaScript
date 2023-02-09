
"use strict";

const numbersOfSeries = +prompt("Nechta serail kordingiz");

const seriasDB = {
	count: numbersOfSeries,
	serias: {},
	actors: {},
	genres: [],
	private: false,
}

for(let i = 0; i < 2; i++){
	const a = prompt("Oxirgi korgan serialingiz");
	const b = prompt("Necha baho bergan bolar edingiz");
	
	seriasDB.serias[a] = b;
}

console.log(seriasDB);	