# Sharkiot - Back-end
Este repositório contém o código em Node.js que armazena dados de leituras de sensores em um banco de dados PostgreSQL.
## Endpoints
### /leitura [GET]
Lista as leituras registradas

Exemplo:
``` bash
curl -X GET "http://localhost:8000/leitura"
```
### /leitura [POST]
Registrar nova leitura

Exemplo:
``` bash
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 1, "id_sensor": 1, "data_ocorrencia": "2025-05-15T10:00:00"}'
```
### /sensor [GET]
Lista os sensores cadastrados

Exemplo:
``` bash
curl -X GET "http://localhost:8000/sensor"
```
## Tecnologias
### Linguagens
1. Node.js
2. PostgreSQL
### Bibiliotecas JS
1. Dotenv: para guardar as credenciais de conexão com o BD
2. Cors: para controle geral da API
3. Express: para disponibilização de servidor virtualizado
4. Pg: para conectar-se com o BD - PostgreSQL
5. Sequelize: para gerenciar a estrutura do BD
