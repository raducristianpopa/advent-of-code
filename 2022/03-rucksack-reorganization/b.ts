import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const lines = input.split('\n');

function getCharCode(letter: string) {
	return (
		letter.charCodeAt(0) - (letter === letter.toUpperCase() ? 64 - 26 : 96)
	);
}

let sum = 0;

for (let i = 0; i < lines.length; i += 3) {
	let badge = 0;
	const first = lines[i].split('').map((l) => getCharCode(l));
	const second = lines[i + 1].split('').map((l) => getCharCode(l));
	const third = lines[i + 2].split('').map((l) => getCharCode(l));

	first.forEach((c) => {
		if (second.includes(c) && third.includes(c)) {
			badge = c;
		}
	});

	sum += badge;
}

console.log(sum);
