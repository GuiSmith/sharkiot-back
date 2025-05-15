import { DataTypes } from "sequelize";
import sequelize from "../banco.js";
import Sensor from "./Sensor.js"; // assumindo que está na mesma pasta

const Leitura = sequelize.define('leitura', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	valor: {
		type: DataTypes.INTEGER, // pode ser boolean, string, etc., depende do tipo de leitura
		allowNull: false,
	},
	id_sensor: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	data_ocorrencia: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	data_cadastro: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		allowNull: false,
	},
});

// Relação 1:N (um sensor tem muitas leituras)
Sensor.hasMany(Leitura, { foreignKey: 'sensor_id' });
Leitura.belongsTo(Sensor, { foreignKey: 'sensor_id' });

export default Leitura;
