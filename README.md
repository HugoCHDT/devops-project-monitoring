# Infra DevOps Monitoring

## Présentation du projet

Ce projet a pour objectif de déployer une infrastructure DevOps complète conteneurisée avec Docker.  
L’infrastructure simule un environnement de production avec :

- Une application web (Frontend)
- Une API Backend
- Une base de données PostgreSQL
- Un cache Redis
- Une supervision complète avec Zabbix
- Un reverse proxy Nginx permettant un point d’entrée unique

L’ensemble des services est orchestré via Docker Compose.


## Architecture
<img width="276" height="637" alt="image" src="https://github.com/user-attachments/assets/c19b0bec-1ce0-41b6-b30c-05ffb360fe52" />

## Services déployés

| NOM CONTAINER      | PORTS            |
|--------------------|------------------|
| crowdsec           | -                |
| reverse-proxy      | 80, 443          |
| crowdsec-bouncer   | -                |
| metabase           | 3001->3000       |
| vaultwarden        | 80               |
| ttyd               | 7681             |
| postgres           | 5432             |
| zabbix-agent       | 10050, 31999     |
| zabbix-web         | 8080, 8443       |
| backend            | 3000             |
| zabbix-server      | 10051            |
| redis              | 6379             |
| portainer          | 9000, 9443       |
| cadvisor           | 8082->8080       |
| zabbix-db          | 5432             |
| dozzle             | 8080             |

## Accès aux services
- Site supervision :  
http://20.111.59.13
