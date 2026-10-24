import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { registerCoin } from '../../src/services/coin.service.js';

const rl = createInterface({ input: stdin, output: stdout });

try {
	const coinLoreId = await rl.question('CoinLore ID: ');
	const symbol = await rl.question('Symbol: ');
	const name = await rl.question('Name: ');
	const minPrice = await rl.question('Minimum price: ');
	const maxPrice = await rl.question('Maximum price: ');

	await registerCoin({ coinLoreId, symbol, name, minPrice, maxPrice });
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}
