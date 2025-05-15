import sequelize from './banco.js';

import Leitura from './models/Leitura.js';
import Sensor from './models/Sensor.js';

await sequelize.sync({ alter: true })
	.then(async () => {
		console.log('Tabelas criadas com sucesso');
		try {
			const sensores = [
				{ id: 1, tipo: 'IR' },
				{ id: 2, tipo: 'Distancia' }
			];

			for(const sensor of sensores){
				const sensorExistente = await Sensor.findOne({
					where: { id: sensor.id }
				});

				if(!sensorExistente){
					const novoSensor = await Sensor.create(sensor);
					if(novoSensor){
						console.log(`Sucesso: sensor ${sensor.tipo} criado!`);
					}else{
						console.log(`Erro: sensor ${sensor.tipo} não criado...`);
					}
				}
			}
		} catch(error){
			console.log(error);
		}
	})
	.catch(error => {
		console.log("Erro ao criar tabelas");
		console.log(error);
	});