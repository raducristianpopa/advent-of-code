import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const lines = input
	.split('\n')
	.map((line) => line.split(' ') as [string, string]);

const dictionary = new Map([
	['A', { w: 2, l: 3, d: 1 }],
	['B', { w: 3, l: 1, d: 2 }],
	['C', { w: 1, l: 2, d: 3 }]
]);

let totalScore = 0;

for (const line of lines) {
	let roundScore = 0;
	let [opponent, me] = line;

	if (me === 'X') {
		roundScore += dictionary.get(opponent)!.l;
	}

	if (me === 'Y') {
		roundScore += 3 + dictionary.get(opponent)!.d;
	}

	if (me === 'Z') {
		roundScore += 6 + dictionary.get(opponent)!.w;
	}

	totalScore += roundScore;
}

console.log(totalScore);
