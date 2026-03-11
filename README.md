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

| Service | Description | Port |
|--------|-------------|------|
| Frontend | Interface web utilisateur | via Nginx |
| Backend | API applicative | 3000 |
| PostgreSQL | Base de données principale | interne |
| Redis | Cache mémoire | interne |
| Zabbix Web | Interface supervision | 8080 |
| Zabbix Server | Collecte métriques | interne |
| Zabbix Agent | Agent monitoring | interne |
| Reverse Proxy (Nginx) | Point d’entrée unique | 8081 |

## Accès aux services
- Site supervision :  
http://20.111.59.13
