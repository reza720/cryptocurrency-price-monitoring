import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { updateCoin } from '../../src/services/coin.service.js';

const rl = createInterface({ input: stdin, output: stdout });

try {
	const coinId = await rl.question('Coin UUID: ');
	const coinLoreId = await rl.question('New CoinLore ID: ');
	const symbol = await rl.question('New symbol: ');
	const name = await rl.question('New name: ');
	const minPrice = await rl.question('New minimum price: ');
	const maxPrice = await rl.question('New maximum price: ');

	await updateCoin(coinId, { coinLoreId, symbol, name, minPrice, maxPrice });
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}
