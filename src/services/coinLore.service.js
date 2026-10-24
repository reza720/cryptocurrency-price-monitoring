const BASE_URL = 'https://api.coinlore.net/api';

async function getCoinPrices(coinLoreIds) {
	if (!coinLoreIds.length) {
		return [];
	}

	const ids = coinLoreIds.join(',');
	const url = new URL(`${BASE_URL}/ticker/`);
	url.searchParams.set('id', ids);

	const response = await fetch(url, {
		signal: AbortSignal.timeout(10000),
	});

	if (!response.ok) {
		throw new Error(`CoinLore API request failed: ${response.status}`);
	}

	const data = await response.json();

	if (!Array.isArray(data)) {
		throw new Error('Invalid response received from CoinLore API');
	}

	return data.map((coin) => {
		const price = Number(coin.price_usd);

		if (!Number.isFinite(price)) {
			throw new Error(`Invalid price received for ${coin.name}`);
		}

		return {
			coinLoreId: coin.id,
			symbol: coin.symbol,
			name: coin.name,
			price,
		};
	});
}

export default getCoinPrices;