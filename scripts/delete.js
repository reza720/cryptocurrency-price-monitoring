import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { deleteCoin } from '../../src/services/coin.service.js';

const rl = createInterface({ input: stdin, output: stdout });

try {
	const coinId = await rl.question('Coin UUID: ');
	await deleteCoin(coinId);
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}
