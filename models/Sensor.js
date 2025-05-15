import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Sensor = sequelize.define('sensor', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
	},
	tipo: {
		type: DataTypes.STRING(100), // ou ENUM se quiser limitar
		allowNull: false,
	},
	ativo: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
});

export default Sensor;
