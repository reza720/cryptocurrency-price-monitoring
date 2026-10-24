import { listCoins } from '../../src/services/coin.service.js';

try {
	const coins = await listCoins();
	console.log(coins.map((coin) => coin.toJSON()));
} catch (error) {
	console.error(error);
	process.exitCode = 1;
}
