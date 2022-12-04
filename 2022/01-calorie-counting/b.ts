import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const lines = input.split('\n\n');

let highest = [];

for (const line of lines) {
	const numbers = line.split('\n').map((string) => parseInt(string, 10));
	const sum = numbers.reduce((a, b) => a + b, 0);

	highest.push(sum);
}

const top = highest.sort((a, b) => b - a).slice(0, 3);
const total = top.reduce((a, b) => a + b, 0);

console.log(total);
