import Leitura from '../models/Leitura.js';

const inserir = async (req, res) => {
	try {
		const colunasPermitidas = ['valor','id_sensor','data_ocorrencia'];
		const dados = req.body;
		const dadosFiltrados = {};

		for(const coluna of colunasPermitidas){
			if(!dados.hasOwnProperty(coluna)){
				return res.status(400).json({
					mensagem: `Dado faltante: ${coluna}`
				});
			}
			dadosFiltrados[coluna] = dados[coluna];
		}

		const novaLeitura = await Leitura.create(dadosFiltrados);

		if(novaLeitura){
			return res.status(201).json(novaLeitura.dataValues);
		}

		throw Error("Leitura não salva");
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			mensagem: `Erro ao inserir leitura`,
			error: error.message
		});
	}

};

const listar = async (req, res) => {
	try {
		const dados = await Leitura.findAll();

		if(dados.length > 0){
			return res.status(200).json(dados);
		}

		return res.status(204).send();
	}catch(error) {
		return res.status(500).json({
			mensagem: `Erro interno`,
			error
		});
	}
};

export default { inserir, listar };