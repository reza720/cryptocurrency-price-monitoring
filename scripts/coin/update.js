import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { z } from 'zod';
import { updateCoin } from '../../src/services/coin.service.js';

const rl = createInterface({ input: stdin, output: stdout });

const coinSchema = z.object({
	coinId: z.string().uuid('Invalid coin UUID'),
	coinLoreId: z.string().trim().min(1, 'CoinLore ID is required'),
	symbol: z.string().trim().min(1, 'Symbol is required'),
	name: z.string().trim().min(1, 'Name is required'),
	minPrice: z.coerce.number().finite().nonnegative(),
	maxPrice: z.coerce.number().finite().positive(),
}).refine((data) => data.minPrice < data.maxPrice, {
	message: 'Minimum price must be less than maximum price',
	path: ['maxPrice'],
});

try {
	const coinId = await rl.question('Coin UUID: ');
	const coinLoreId = await rl.question('New CoinLore ID: ');
	const symbol = await rl.question('New symbol: ');
	const name = await rl.question('New name: ');
	const minPrice = await rl.question('New minimum price: ');
	const maxPrice = await rl.question('New maximum price: ');

	const result = coinSchema.safeParse({
		coinId,
		coinLoreId,
		symbol,
		name,
		minPrice,
		maxPrice,
	});

	if (!result.success) {
		for (const error of result.error.issues) {
			console.error(`${error.path.join('.')}: ${error.message}`);
		}

		process.exitCode = 1;
	} else {
		const { coinId, ...data } = result.data;
		await updateCoin(coinId, data);
	}
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}