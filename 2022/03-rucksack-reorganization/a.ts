import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const lines = input.split('\n');

const dupes = [];

let sum = 0;

for (const line of lines) {
	const first = line.slice(0, line.length / 2);
	const second = line.slice(line.length / 2, line.length);
	const sackDupes: string[] = [];

	for (const char of first) {
		if (second.includes(char) && !sackDupes.includes(char)) {
			sackDupes.push(char);
		}
	}
	dupes.push(...sackDupes);
}

dupes.forEach((l) => {
	sum += l.charCodeAt(0) - (l === l.toUpperCase() ? 64 - 26 : 96);
});

console.log(sum);
