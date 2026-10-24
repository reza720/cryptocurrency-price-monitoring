import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { getCoin } from '../../src/services/coin.service.js';

const rl = createInterface({ input: stdin, output: stdout });

try {
	const coinId = await rl.question('Coin UUID: ');
	await getCoin(coinId);
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}
