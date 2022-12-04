import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const lines = input.split('\n\n');

let highest = 0;

for (const line of lines) {
	const numbers = line.split('\n').map((string) => parseInt(string, 10));
	const sum = numbers.reduce((a, b) => a + b, 0);

	if (sum > highest) {
		highest = sum;
	}
}

console.log(highest);
