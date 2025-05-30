// Bibliotecas
import express from "express";
import sequelize from './banco.js';
import cors from 'cors';

import midCors from "./middlewares/cors.js";

const app = express();
app.use(cors(midCors.corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 8000;

import leitura from './controllers/leitura.js';
import sensor from './controllers/sensor.js';

sequelize.authenticate()
	.then(() => {
		console.log('Conexão com o banco de dados estabelecida');
	})
	.catch((error) => {
		console.log("Erro ao conectar com banco de dados");
		console.log(error);
	});


app.get('/', (req, res) => {
	return res.status(200).json({
		mensagem: `Requisição realizada com sucesso`
	});
});

app.post('/leitura', leitura.inserir);
app.get('/leitura', leitura.listar);

app.get('/sensor', sensor.listar);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));