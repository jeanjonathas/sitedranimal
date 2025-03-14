#!/bin/bash

# Criar diretório de logs se não existir
mkdir -p /var/log

# Log de início
echo "Iniciando reimplantação do site Dr. Animal em $(date)" >> /var/log/webhook-redeploy.log

# Reimplantar o stack
docker stack deploy -c /root/docker-compose.yml sitedranimal

# Log de conclusão
echo "Reimplantação concluída em $(date)" >> /var/log/webhook-redeploy.log
