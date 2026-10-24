import Coin from '../models/coin.js';

// Register a coin
export async function registerCoin(data) {
	const coin = await Coin.create(data);
	console.log(`Coin registered: ${coin.name} (${coin.symbol})`);
}

// Retrieve list of coins
export async function listCoins() {
	const coins = await Coin.findAll();
	console.log(`Retrieved ${coins.length} registered coins`);
	return coins;
}

// Retrieve the coin
export async function getCoin(coinId) {
	const coin = await Coin.findByPk(coinId);

	if (!coin) {
		console.error(`Coin not found: ${coinId}`);
		return;
	}

	console.log(`Retrieved coin: ${coin.name} (${coin.symbol})`);
}

// Update the coin
export async function updateCoin(coinId, data) {
	const coin = await Coin.findByPk(coinId);

	if (!coin) {
		console.error(`Coin not found: ${coinId}`);
		return;
	}

	await coin.update(data);
	console.log(`Coin updated: ${coin.name} (${coin.symbol})`);
}

// Delete the coin
export async function deleteCoin(coinId) {
	const coin = await Coin.findByPk(coinId);

	if (!coin) {
		console.error(`Coin not found: ${coinId}`);
		return;
	}

	await coin.destroy();
	console.log(`Coin deleted: ${coin.name} (${coin.symbol})`);
}
