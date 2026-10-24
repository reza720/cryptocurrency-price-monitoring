import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { z } from 'zod';
import { registerCoin } from '../../src/services/coin.service.js';

const rl = createInterface({ input: stdin, output: stdout });

const coinSchema = z.object({
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
	const coinLoreId = await rl.question('CoinLore ID: ');
	const symbol = await rl.question('Symbol: ');
	const name = await rl.question('Name: ');
	const minPrice = await rl.question('Minimum price: ');
	const maxPrice = await rl.question('Maximum price: ');

	const result = coinSchema.safeParse({
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
		await registerCoin(result.data);
	}
} catch (error) {
	console.error(error);
	process.exitCode = 1;
} finally {
	rl.close();
}