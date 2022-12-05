import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const pairs = input.split('\n').map((line) => line.split(','));

let count = 0;

for (const pair of pairs) {
	const first = pair[0].split('-').map((x) => parseInt(x));
	const second = pair[1].split('-').map((x) => parseInt(x));

	if (first[0] >= second[0] && first[1] <= second[1]) {
		count++;
	} else if (second[0] >= first[0] && second[1] <= first[1]) {
		count++;
	}
}

console.log(count);
