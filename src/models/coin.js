import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Coin = sequelize.define(
	'Coin',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},

		coinLoreId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		symbol: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		minPrice: {
			type: DataTypes.DECIMAL(20, 8),
			allowNull: false,
		},

		maxPrice: {
			type: DataTypes.DECIMAL(20, 8),
			allowNull: false,
		},
	},
	{
		timestamps: true,
	},
);

export default Coin;
