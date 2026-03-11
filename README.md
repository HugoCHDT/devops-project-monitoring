# Infra DevOps Monitoring

## Présentation du projet

Ce projet a pour objectif de déployer une infrastructure DevOps complète conteneurisée avec Docker afin de simuler un environnement de production utilisé par l’équipe informatique d’une entreprise.

Le but principal de cette infrastructure est de fournir une plateforme centralisée de supervision et de monitoring permettant de surveiller l’état des services, des conteneurs et des ressources système.

L’ensemble des services est orchestré avec Docker Compose et s’appuie sur un reverse proxy Nginx permettant de centraliser l’accès aux différentes applications de supervision, d’administration et d’analyse.

Cette infrastructure permet notamment de :
- **surveiller les performances des serveurs et des conteneurs
- **centraliser les logs et les métriques
- **détecter les incidents ou anomalies
- **sécuriser les services exposés

L’infrastructure intègre plusieurs composants essentiels d’un environnement moderne :

Applications

- **Reverse Proxy Nginx** : point d’entrée unique pour les services web.
- **Backend API** : service applicatif principal exposant les fonctionnalités métier.
- **Vaultwarden** : gestionnaire de mots de passe auto-hébergé.
- **Metabase** : outil de visualisation et d’analyse de données.

Bases de données et cache

- **PostgreSQL** : base de données principale pour l’application.
- **PostgreSQL (Zabbix)** : base de données dédiée à la supervision.
- **Redis** : système de cache pour améliorer les performances des applications.

Supervision et observabilité

- **Zabbix Server** : collecte et analyse des métriques de l’infrastructure.
- **Zabbix Web** : interface web de supervision.
- **Zabbix Agent** : agent installé sur l’hôte pour remonter les métriques système.
- **cAdvisor** : monitoring des conteneurs Docker (CPU, mémoire, réseau).
- **Dozzle** : visualisation en temps réel des logs Docker.

Sécurité

- **CrowdSec** : moteur de détection d’attaques basé sur l’analyse des logs.
- **CrowdSec Bouncer** : blocage automatique des IP malveillantes au niveau du reverse proxy.

Administration et gestion

- **Portainer** : interface web de gestion des conteneurs Docker.
- **ttyd** : terminal web permettant l’accès à un shell depuis le navigateur.


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
