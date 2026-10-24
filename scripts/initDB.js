import sequelize from '../src/config/database.js';
import '../src/models/coin.js';
import '../src/models/email.js';

try {
	await sequelize.authenticate();
	console.log('Database connection established.');

	await sequelize.sync();
	console.log('Database tables created successfully.');
} catch (error) {
	console.error('Database initialization failed:', error);
	process.exitCode = 1;
} finally {
	await sequelize.close();
}
