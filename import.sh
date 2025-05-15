#!/bin/bash

curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 1, "id_sensor": 1, "data_ocorrencia": "2025-05-15T10:00:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 0, "id_sensor": 1, "data_ocorrencia": "2025-05-15T10:01:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 1, "id_sensor": 1, "data_ocorrencia": "2025-05-15T10:02:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 0, "id_sensor": 1, "data_ocorrencia": "2025-05-15T10:03:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 1, "id_sensor": 1, "data_ocorrencia": "2025-05-15T10:04:00"}'

curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 25, "id_sensor": 2, "data_ocorrencia": "2025-05-15T10:05:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 30, "id_sensor": 2, "data_ocorrencia": "2025-05-15T10:06:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 28, "id_sensor": 2, "data_ocorrencia": "2025-05-15T10:07:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 22, "id_sensor": 2, "data_ocorrencia": "2025-05-15T10:08:00"}'
curl -X POST http://localhost:8000/leitura -H "Content-Type: application/json" -d '{"valor": 35, "id_sensor": 2, "data_ocorrencia": "2025-05-15T10:09:00"}'
