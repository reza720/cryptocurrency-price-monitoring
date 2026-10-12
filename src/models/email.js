import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Email = sequelize.define(
	'Email',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},

		address: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);

export default Email;
