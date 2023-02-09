
"use strict";

const numbersOfSeries = +prompt("Nechta serail kordingiz");

const seriasDB = {
	count: numbersOfSeries,
	serias: {},
	actors: {},
	genres: [],
	private: false,
}

const a = prompt("Oxirgi korgan serialingiz");
const b = prompt("Necha baho bergan bolar edingiz");
const c = prompt("Oxirgi korgan serialingiz");
const d = prompt("Necha baho bergan bolar edingiz");

seriasDB.serias[a] = b;

seriasDB.serias[c] = d;

console.log(seriasDB.serias);	