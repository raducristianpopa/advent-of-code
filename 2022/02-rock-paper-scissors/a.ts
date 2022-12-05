import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const lines = input
	.split('\n')
	.map((line) => line.split(' ') as [string, string]);

const dictionary = {
	X: 'A',
	Y: 'B',
	Z: 'C'
};

let totalScore = 0;

for (const line of lines) {
	let roundScore = 0;
	let [opponent, me] = line;

	if (me === 'X') roundScore += 1;
	if (me === 'Y') roundScore += 2;
	if (me === 'Z') roundScore += 3;

	me = dictionary[me as 'X' | 'Y' | 'Z'];

	if (opponent === me) roundScore += 3;
	if (opponent === 'A' && me === 'B') roundScore += 6;
	if (opponent === 'B' && me === 'C') roundScore += 6;
	if (opponent === 'C' && me === 'A') roundScore += 6;

	totalScore += roundScore;
}

console.log(totalScore);
