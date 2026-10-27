import { listCoins } from './services/coin.service.js';
import { listEmails } from './services/email.service.js';
import getCoinPrices from './services/coinLore.service.js';
import sendEmail from './services/notification.service.js';

async function runWorker() {
	console.log('Coin price monitoring started');

	const coins = await listCoins();

	if (coins.length === 0) {
		console.log('No registered coins to monitor');
		return;
	}

	const prices = await getCoinPrices(
		coins.map((coin) => coin.coinLoreId),
	);

	const priceById = new Map(
		prices.map((coin) => [coin.coinLoreId, coin]),
	);

	const emails = await listEmails();

	if (emails.length === 0) {
		console.log('No registered email addresses');
		return;
	}

	for (const coin of coins) {
		const marketCoin = priceById.get(coin.coinLoreId);

		if (!marketCoin) {
			console.error(`Price not found for ${coin.name}`);
			continue;
		}

		const price = marketCoin.price;
		const minPrice = Number(coin.minPrice);
		const maxPrice = Number(coin.maxPrice);

		if (price >= minPrice && price <= maxPrice) {
			console.log(`${coin.name}: $${price} — within range`);
			continue;
		}

		const direction = price < minPrice ? 'below' : 'above';

		console.log(
			`${coin.name}: $${price} — ${direction} configured range`,
		);

		const subject = `${coin.name} (${coin.symbol}) Price Alert`;

		const text = [
			`Price alert for ${coin.name} (${coin.symbol})`,
			'',
			`Current price: $${price}`,
			`Minimum price: $${minPrice}`,
			`Maximum price: $${maxPrice}`,
			`Status: Price is ${direction} the configured range.`,
		].join('\n');

		for (const email of emails) {
			try {
				await sendEmail({
					to: email.address,
					subject,
					text,
				});

				console.log(`Alert sent to ${email.address}`);
			} catch (error) {
				console.error(
					`Failed to send alert to ${email.address}:`,
					error.message,
				);
			}
		}
	}

	console.log('Coin price monitoring completed');
}

runWorker().catch((error) => {
	console.error('Coin price monitoring failed:', error);
	process.exitCode = 1;
});
