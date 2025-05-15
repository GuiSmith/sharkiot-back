import Sensor from '../models/Sensor.js';

const listar = async (req, res) => {
    try {
        const dados = await Sensor.findAll();
        if(dados.length > 0){
            return res.status(200).json(dados);
        }

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensagem: `Erro interno`,
            erro: error.message
        });
    }
}

export default { listar };