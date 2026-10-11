import { Sequelize } from 'sequelize';
import env from './env';

const sequelize = new Sequelize(env.databaseUrl, {
	dialect: 'postgres',
	logging: false,
});

export default sequelize;
